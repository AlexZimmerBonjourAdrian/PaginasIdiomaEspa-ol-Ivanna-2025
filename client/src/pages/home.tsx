import { useEffect } from "react";
import Navigation from "@/components/navigation";
import StoryCard from "@/components/story-card";
import FeatureCard from "@/components/feature-card";
import TipCard from "@/components/tip-card";
import { BookOpen, GraduationCap, Play, Book, Users, Twitter, Instagram, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react";

export default function Home() {
  useEffect(() => {
    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const stories = [
    {
      title: "Amor77",
      content: "Tenía 77 años cuando descubrió que amar no tenía fecha de caducidad. Su corazón, que creía oxidado por el tiempo, volvió a latir como a los 17.",
      description: "Una historia que demuestra que el amor verdadero no conoce límites de edad, conquistando corazones en múltiples idiomas.",
      badge: {
        icon: "fas fa-heart",
        text: "Reconocido Mundialmente",
        variant: "secondary" as const
      },
      stat: {
        icon: "fas fa-globe",
        text: "Traducido a 12 idiomas"
      }
    },
    {
      title: "La Última Carta",
      content: "Escribió su última carta sin saber que sería la primera que él leería después de partir. El amor encontró su camino más allá del tiempo.",
      description: "Un relato emotivo sobre el poder de las palabras y los vínculos eternos que trascienden la existencia física.",
      badge: {
        icon: "fas fa-star",
        text: "Premio Internacional",
        variant: "accent" as const
      },
      stat: {
        icon: "fas fa-trophy",
        text: "Premio Microrrelato 2023"
      }
    },
    {
      title: "Espejo del Alma",
      content: "Se miró al espejo buscando defectos y encontró historia. Cada arruga era un capítulo, cada cicatriz una lección aprendida.",
      description: "Una reflexión profunda sobre la autoaceptación y la belleza de las experiencias vividas.",
      badge: {
        icon: "fas fa-fire",
        text: "Viral en Redes",
        variant: "primary" as const
      },
      stat: {
        icon: "fas fa-share",
        text: "+50k compartidos"
      }
    }
  ];

  const features = [
    {
      icon: "fas fa-compress-arrows-alt text-primary",
      title: "Brevedad Extrema",
      description: "Los microrrelatos son narraciones completas que generalmente no superan las 300 palabras, concentrando máximo impacto en mínimo espacio.",
      iconBg: "bg-primary/10"
    },
    {
      icon: "fas fa-bolt text-secondary",
      title: "Impacto Inmediato",
      description: "Cada palabra cuenta. Los microrrelatos buscan provocar una emoción intensa o reflexión profunda en el lector desde la primera línea.",
      iconBg: "bg-secondary/10"
    },
    {
      icon: "fas fa-puzzle-piece text-accent",
      title: "Narrativa Completa",
      description: "A pesar de su brevedad, contienen todos los elementos narrativos: personajes, conflicto, desarrollo y desenlace perfectamente integrados.",
      iconBg: "bg-accent/10"
    },
    {
      icon: "fas fa-magic text-primary",
      title: "Arte de la Sugerencia",
      description: "Lo no dicho es tan importante como lo escrito. Los mejores microrrelatos dejan espacio para que el lector complete la historia.",
      iconBg: "bg-primary/10"
    }
  ];

  const tips = [
    {
      number: 1,
      title: "Comienza por el Final",
      description: "Imagina el desenlace primero y construye hacia atrás para lograr máximo impacto.",
      color: "bg-primary"
    },
    {
      number: 2,
      title: "Elimina lo Innecesario",
      description: "Cada palabra debe ser esencial. Si no aporta, debe ser eliminada sin piedad.",
      color: "bg-secondary"
    },
    {
      number: 3,
      title: "Un Solo Momento",
      description: "Concéntrate en un instante específico que contenga toda la historia.",
      color: "bg-accent"
    },
    {
      number: 4,
      title: "Sorprende al Lector",
      description: "El giro inesperado es el alma del microrrelato exitoso.",
      color: "bg-primary"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section id="inicio" className="pt-20 pb-16 bg-gradient-to-br from-background to-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center fade-in">
            <h1 className="literary-title text-5xl md:text-7xl font-bold text-primary mb-6" data-testid="hero-title">
              Aprende Conmigo
            </h1>
            <p className="literary-subtitle text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto" data-testid="hero-subtitle">
              Descubre el fascinante mundo de los microrrelatos y sumérgete en historias que conquistan corazones en pocas palabras
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#historias" 
                className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
                data-testid="button-explore-stories"
              >
                <BookOpen size={20} />
                Explorar Historias
              </a>
              <a 
                href="#aprende" 
                className="border border-border bg-card text-card-foreground px-8 py-3 rounded-lg hover:bg-muted transition-colors inline-flex items-center gap-2"
                data-testid="button-learn-more"
              >
                <GraduationCap size={20} />
                Aprender Más
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Stories Section */}
      <section id="historias" className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="literary-title text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="stories-title">
              Microrrelatos Reconocidos
            </h2>
            <p className="literary-subtitle text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="stories-subtitle">
              Historias que han conquistado lectores en todo el mundo con su poder narrativo y emotivo
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <StoryCard key={index} {...story} />
            ))}
          </div>
        </div>
      </section>

      {/* Learn About Microstories Section */}
      <section id="aprende" className="py-20 bg-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="literary-title text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="learn-title">
              ¿Qué son los Microrrelatos?
            </h2>
            <p className="literary-subtitle text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="learn-subtitle">
              Descubre las características y el arte de contar historias completas en pocas palabras
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <img 
                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600" 
                alt="Libros antiguos en español y pluma de escritura sobre mesa de madera" 
                className="rounded-xl shadow-lg w-full h-auto"
                data-testid="learn-image"
              />
            </div>

            <div className="space-y-8">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>

          {/* Writing Tips Section */}
          <div className="mt-20 fade-in">
            <h3 className="literary-title text-3xl font-bold text-center text-foreground mb-12" data-testid="tips-title">
              Consejos para Escribir Microrrelatos
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tips.map((tip, index) => (
                <TipCard key={index} {...tip} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="video" className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in">
            <h2 className="literary-title text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="video-title">
              Masterclass de Microrrelatos
            </h2>
            <p className="literary-subtitle text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="video-subtitle">
              Aprende de los maestros del género y descubre los secretos detrás de las historias más impactantes
            </p>
          </div>

          <div className="bg-card rounded-xl p-8 border border-border fade-in">
            <div className="aspect-video rounded-lg overflow-hidden mb-6" data-testid="video-microrrelatos">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/UGjjIDt8VIA"
                title="¿Qué es un microrrelato? - Características y ejemplos"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div data-testid="video-stat-students">
                <div className="text-3xl font-bold text-primary mb-2">50K+</div>
                <p className="literary-subtitle text-muted-foreground">Estudiantes</p>
              </div>
              <div data-testid="video-stat-rating">
                <div className="text-3xl font-bold text-secondary mb-2">4.9/5</div>
                <p className="literary-subtitle text-muted-foreground">Valoración</p>
              </div>
              <div data-testid="video-stat-duration">
                <div className="text-3xl font-bold text-accent mb-2">15 min</div>
                <p className="literary-subtitle text-muted-foreground">Duración</p>
              </div>
            </div>
          </div>

          {/* Videos Adicionales de Microrrelatos */}
          <div className="mt-12 fade-in">
            <h3 className="literary-title text-2xl font-bold text-center text-foreground mb-8" data-testid="additional-videos-title">
              Más Videos sobre Microrrelatos
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card rounded-lg p-6 border border-border" data-testid="video-card-1">
                <div className="aspect-video rounded-lg overflow-hidden mb-4">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/0RGCf1TdB_Y"
                    title="Cómo escribir microrrelatos - Técnicas y consejos"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <h4 className="literary-title text-lg font-semibold text-foreground mb-2">
                  Técnicas para Escribir Microrrelatos
                </h4>
                <p className="literary-subtitle text-muted-foreground text-sm">
                  Aprende las técnicas fundamentales para crear microrrelatos impactantes en pocos minutos.
                </p>
              </div>

              <div className="bg-card rounded-lg p-6 border border-border" data-testid="video-card-2">
                <div className="aspect-video rounded-lg overflow-hidden mb-4">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/RQANNzLtg1g"
                    title="Mejores microrrelatos en español - Ejemplos clásicos"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <h4 className="literary-title text-lg font-semibold text-foreground mb-2">
                  Microrrelatos Clásicos en Español
                </h4>
                <p className="literary-subtitle text-muted-foreground text-sm">
                  Descubre los microrrelatos más famosos y reconocidos de la literatura en español.
                </p>
              </div>
            </div>
          </div>

          {/* Additional Resources */}
          <div className="mt-12 grid md:grid-cols-2 gap-6 fade-in">
            <div className="bg-card rounded-lg p-6 border border-border" data-testid="resources-reading">
              <h3 className="literary-title text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Book className="text-primary" size={20} />
                Lecturas Recomendadas
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="literary-subtitle">• Antología de Microrrelatos Hispanoamericanos</li>
                <li className="literary-subtitle">• El Arte de la Brevedad - Ana María Shua</li>
                <li className="literary-subtitle">• Microrrelatos: Teoría e Historia - David Lagmanovich</li>
              </ul>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border" data-testid="resources-community">
              <h3 className="literary-title text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Users className="text-secondary" size={20} />
                Únete a la Comunidad
              </h3>
              <p className="literary-subtitle text-muted-foreground mb-4">
                Comparte tus creaciones y recibe feedback de otros escritores apasionados por los microrrelatos.
              </p>
              <button 
                className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors"
                data-testid="button-join-community"
              >
                Unirse Ahora
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2" data-testid="footer-about">
              <h3 className="literary-title text-2xl font-bold mb-4">Aprende Conmigo</h3>
              <p className="literary-subtitle text-background/80 mb-6">
                Explora el fascinante mundo de los microrrelatos y descubre cómo las mejores historias se cuentan en pocas palabras. Únete a nuestra comunidad de escritores y lectores apasionados.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-background/60 hover:text-background transition-colors" data-testid="social-twitter">
                  <Twitter size={24} />
                </a>
                <a href="#" className="text-background/60 hover:text-background transition-colors" data-testid="social-instagram">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-background/60 hover:text-background transition-colors" data-testid="social-facebook">
                  <Facebook size={24} />
                </a>
                <a href="#" className="text-background/60 hover:text-background transition-colors" data-testid="social-youtube">
                  <Youtube size={24} />
                </a>
              </div>
            </div>
            
            <div data-testid="footer-links">
              <h4 className="literary-title text-lg font-semibold mb-4">Enlaces</h4>
              <ul className="space-y-2">
                <li><a href="#inicio" className="literary-subtitle text-background/80 hover:text-background transition-colors">Inicio</a></li>
                <li><a href="#historias" className="literary-subtitle text-background/80 hover:text-background transition-colors">Historias</a></li>
                <li><a href="#aprende" className="literary-subtitle text-background/80 hover:text-background transition-colors">Aprende</a></li>
                <li><a href="#video" className="literary-subtitle text-background/80 hover:text-background transition-colors">Video</a></li>
              </ul>
            </div>
            
            <div data-testid="footer-contact">
              <h4 className="literary-title text-lg font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 literary-subtitle text-background/80">
                <li className="flex items-center gap-2">
                  <Mail size={16} />
                  contacto@aprendeconmigo.com
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={16} />
                  +34 123 456 789
                </li>
                <li className="flex items-center gap-2">
                  <MapPin size={16} />
                  Madrid, España
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-background/20 mt-8 pt-8 text-center literary-subtitle text-background/60">
            <p>&copy; 2024 Aprende Conmigo. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
