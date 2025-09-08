param(
    [switch]$NoBuild,
    [switch]$StartDev,
    [switch]$StartProd,
    [int]$Port = 5000,
    [switch]$UseNext,
    [switch]$InstallNext
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

function Write-Info($msg) { Write-Host "[INFO] $msg" -ForegroundColor Cyan }
function Write-Ok($msg)   { Write-Host "[ OK ] $msg" -ForegroundColor Green }
function Write-Err($msg)  { Write-Host "[ERR ] $msg" -ForegroundColor Red }

# Moverse al directorio del script (raíz del repo)
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $scriptDir

# Comprobaciones básicas
if (-not (Test-Path -Path "package.json")) {
    Write-Err "No se encontró package.json. Ejecuta este script desde la raíz del proyecto."
    exit 1
}

function Test-Binary($name) {
    $bin = Get-Command $name -ErrorAction SilentlyContinue
    if (-not $bin) {
        Write-Err "No se encontró '$name' en PATH. Instálalo y vuelve a intentar."
        exit 1
    }
}

Test-Binary node
Test-Binary npm

# Cargar package.json
$pkg = Get-Content -Raw -Path package.json | ConvertFrom-Json

# Detección de Next.js
$hasNext = $false
if ($pkg.dependencies -and ($pkg.dependencies.PSObject.Properties.Name -contains 'next')) { $hasNext = $true }
if ($pkg.devDependencies -and ($pkg.devDependencies.PSObject.Properties.Name -contains 'next')) { $hasNext = $true }

# Instalar Next.js si se solicita
if ($InstallNext) {
    Write-Info "Instalando Next.js (next, react, react-dom) ..."
    npm install next react react-dom
    Write-Ok "Dependencias Next instaladas"

    # Añadir scripts si no existen
    $pkg = Get-Content -Raw -Path package.json | ConvertFrom-Json
    $needsBuild = -not ($pkg.scripts -and $pkg.scripts.build)
    $needsDev = -not ($pkg.scripts -and $pkg.scripts.dev)
    $needsStart = -not ($pkg.scripts -and $pkg.scripts.start)
    if ($needsBuild) { & npm pkg set scripts.build="next build" | Out-Null }
    if ($needsDev)   { & npm pkg set scripts.dev="next dev"       | Out-Null }
    if ($needsStart) { & npm pkg set scripts.start="next start"   | Out-Null }
    Write-Ok "Scripts Next configurados (si faltaban)"

    # Refrescar detección
    $pkg = Get-Content -Raw -Path package.json | ConvertFrom-Json
    $hasNext = $true
}

# Validar versión de Node (>= 20)
$nodeVerRaw = (node -v)
$nodeVer = $nodeVerRaw.TrimStart('v')
$nodeMajor = [int]($nodeVer.Split('.')[0])
if ($nodeMajor -lt 20) {
    Write-Err "Se requiere Node >= 20. Detectado: $nodeVerRaw"
    exit 1
}
Write-Ok "Node $nodeVerRaw OK"

# Instalar dependencias (usa package-lock)
Write-Info "Instalando dependencias (npm ci) ..."
npm ci
Write-Ok "Dependencias instaladas"

# Build (cliente + servidor)
$doBuild = -not $NoBuild
if ($doBuild) {
    if ($UseNext -or $hasNext) {
        Write-Info "Compilando proyecto Next.js ..."
        if ($pkg.scripts -and $pkg.scripts.build) {
            npm run build
        } else {
            npx --yes next build
        }
        Write-Ok "Build Next.js completado"
    } else {
        Write-Info "Compilando proyecto (npm run build) ..."
        npm run build
        Write-Ok "Build completado"
    }
} else {
    Write-Info "Build omitido por --NoBuild"
}

# Arranque opcional
if ($StartDev -and $StartProd) {
    Write-Err "Usa solo uno: -StartDev o -StartProd"
    exit 1
}

if ($StartDev) {
    Write-Info "Iniciando en desarrollo (PORT=$Port) ..."
    $env:PORT = $Port
    if ($UseNext -or $hasNext) {
        if ($pkg.scripts -and $pkg.scripts.dev) {
            npm run dev -- --port $Port
        } else {
            npx --yes next dev -p $Port
        }
    } else {
        npm run dev
    }
    exit $LASTEXITCODE
}

if ($StartProd) {
    Write-Info "Iniciando en producción (PORT=$Port) ..."
    $env:PORT = $Port
    if ($UseNext -or $hasNext) {
        if ($pkg.scripts -and $pkg.scripts.start) {
            npm run start -- --port $Port
        } else {
            npx --yes next start -p $Port
        }
    } else {
        npm start
    }
    exit $LASTEXITCODE
}

Write-Ok "Setup terminado. Usa -StartDev o -StartProd para arrancar."


