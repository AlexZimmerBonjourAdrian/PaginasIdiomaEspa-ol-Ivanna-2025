# Microrrelatos - Literary Website

## Overview

Microrrelatos is a Spanish-language literary website dedicated to showcasing micro-stories (very short fiction). The application features a modern, elegant design with a literary theme, displaying featured stories, writing tips, and interactive content. Built as a full-stack web application with React frontend and Express backend, it emphasizes beautiful typography and smooth animations to create an immersive reading experience.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Shadcn/ui component library built on Radix UI primitives, providing accessible and customizable components
- **Styling**: Tailwind CSS with custom CSS variables for theming, featuring literary-inspired color schemes and typography
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Build Tool**: Vite for fast development and optimized production builds
- **Typography**: Custom font integration with Inter, Crimson Text, and JetBrains Mono for different content types

### Backend Architecture
- **Runtime**: Node.js with Express.js framework using ESM modules
- **Language**: TypeScript for both client and server code
- **API Structure**: RESTful API design with `/api` prefix for all backend routes
- **Storage Interface**: Abstracted storage layer with in-memory implementation (MemStorage class)
- **Development Setup**: Hot module replacement and development middleware integration

### Data Storage Solutions
- **Database ORM**: Drizzle ORM configured for PostgreSQL with type-safe queries
- **Schema Management**: Centralized schema definitions in shared directory
- **Migrations**: Drizzle Kit for database migrations and schema changes
- **Session Storage**: PostgreSQL session store configuration for user sessions
- **Development Storage**: In-memory storage implementation for development/testing

### Authentication and Authorization
- **Session Management**: Express sessions with PostgreSQL backing store
- **User Schema**: Basic user model with username/password authentication
- **Security**: Prepared for secure authentication implementation with proper session handling

### External Dependencies
- **Database**: Neon PostgreSQL serverless database for production data storage
- **UI Components**: Extensive Radix UI component collection for accessibility and functionality
- **Development Tools**: Replit-specific plugins for development environment integration
- **Fonts**: Google Fonts integration for typography (Inter, Crimson Text)
- **Icons**: Lucide React for consistent iconography throughout the application

The architecture follows a monorepo structure with clear separation between client, server, and shared code. The application is configured for deployment on Replit with proper environment variable handling and development tools integration. The design emphasizes performance with lazy loading, optimized builds, and efficient state management.