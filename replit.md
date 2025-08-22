# Overview

This is a full-stack personal portfolio web application for Uzair Mustafa, a Senior Fullstack Engineer. The application showcases professional experience, skills, projects, awards, and provides contact functionality along with resume download/viewing capabilities. It's built as a modern single-page application with a clean, professional design.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **React with TypeScript**: Modern React 18 application using TypeScript for type safety
- **Vite Build System**: Fast development server and build tool with HMR (Hot Module Replacement)
- **Wouter Routing**: Lightweight client-side routing library for navigation
- **Shadcn/ui Components**: Comprehensive UI component library built on Radix UI primitives
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens and theming
- **TanStack Query**: Server state management for API calls and caching

## Backend Architecture
- **Express.js Server**: Node.js web framework handling API routes and static file serving
- **File-based Resume System**: Direct file serving for PDF resume with download and view endpoints
- **Development/Production Split**: Conditional Vite integration for development with static serving for production

## Database Layer
- **Drizzle ORM**: Type-safe SQL query builder and ORM
- **PostgreSQL**: Primary database with schema defined in shared directory
- **User Management Schema**: Basic user table structure with username/password fields
- **In-Memory Storage**: Fallback storage implementation for development/testing

## Development Tools
- **TypeScript Configuration**: Strict type checking with path aliases for clean imports
- **ESBuild**: Fast bundling for production server builds
- **PostCSS**: CSS processing with Tailwind and Autoprefixer
- **Component Library**: Extensive set of reusable UI components following consistent design patterns

## Project Structure
- **Monorepo Layout**: Client, server, and shared code in organized directories
- **Shared Schema**: Database models and validation shared between client and server
- **Asset Management**: Static assets handled through Vite with proper resolution
- **Environment-based Configuration**: Different setups for development vs production

# External Dependencies

## UI and Styling
- **Radix UI**: Headless component primitives for accessibility and keyboard navigation
- **Tailwind CSS**: Utility-first styling with custom design system
- **Lucide React**: Icon library for consistent iconography
- **Class Variance Authority**: Type-safe variant handling for component styling

## Database and Backend
- **Neon Database**: Serverless PostgreSQL database hosting (@neondatabase/serverless)
- **Drizzle Kit**: Database migrations and schema management tooling
- **Connect PG Simple**: PostgreSQL session store for Express

## Development and Build
- **Vite**: Frontend build tool with React plugin and runtime error handling
- **ESBuild**: Fast JavaScript/TypeScript bundler for server builds
- **TSX**: TypeScript execution for development server
- **Replit Integration**: Development environment plugins for Replit platform

## Forms and Validation
- **React Hook Form**: Form state management with validation
- **Zod**: Schema validation library integrated with Drizzle ORM
- **Hookform Resolvers**: Bridge between React Hook Form and validation libraries

## Additional Libraries
- **Date-fns**: Date manipulation and formatting utilities
- **Nanoid**: URL-safe unique ID generation
- **CMDK**: Command palette component for search functionality
- **Embla Carousel**: Touch-friendly carousel component