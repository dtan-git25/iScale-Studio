# iScale Studio - AI Development & Automation Agency

## Overview

iScale Studio is a Philippines-based AI development agency specializing in AI-powered digital solutions for businesses. The platform serves as the company's primary web presence, showcasing services in AI web/app development, workflow automation, and AI agents. The website is built as a modern single-page application with React, featuring comprehensive service pages, case studies, blog content, and integrated booking functionality.

**Primary Business Goals:**
- Lead generation through consultation booking
- Showcase AI/automation capabilities and expertise
- Demonstrate ROI through case studies and success stories
- Establish thought leadership via blog content

**Target Audience:** Philippine SMBs and enterprises seeking AI transformation, e-commerce businesses, and companies looking to automate manual processes.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework:** React with TypeScript (Vite build system)

**Routing:** Wouter for client-side routing with 35+ pages including:
- Core pages: Home, Services, About, Portfolio, Blog
- Service detail pages: AI Web Development, App Development, Workflow Automation, AI Agents, E-commerce, ML Development
- AI Agent pages: Sales, Support, Marketing, Admin, Research, Content agents
- Blog posts (12 articles) and Case studies (6 detailed examples)
- Utility pages: Booking, Privacy Policy, Terms of Service

**UI Framework:** Shadcn/ui components built on Radix UI primitives
- Extensive component library from Radix UI (accordion, dialog, dropdown, navigation, tooltips, etc.)
- Custom styling with Tailwind CSS v4 (using new @import syntax)
- Design system: "new-york" style variant with CSS variables for theming
- Custom color palette: Purple gradient primary (#8629e4 to #9929ea), aqua accent (#2DBFBA)

**Animation:** Framer Motion for page transitions and UI animations

**State Management:** TanStack Query (React Query v5) for server state
- Custom query client with credential-based fetching
- Configurable unauthorized behavior handling
- Disabled refetch on window focus and intervals for static content

**Typography:** Custom font stack
- Display: 'Outfit' (headings)
- Body: 'Inter' (general content)
- Monospace: 'JetBrains Mono' (code)

**SEO Implementation:**
- Custom SEOHead component (client/src/components/seo/seo-head.tsx) with schema.org structured data
- React 19 compatible using useEffect-based approach (not react-helmet-async)
- Schema types: LocalBusiness, Organization, WebSite, Service, Article, WebPage, BreadcrumbList
- OpenGraph and Twitter Card meta tags (@iscalestudio handle)
- Canonical URLs matching actual routes on all 45+ pages
- Meta descriptions optimized for Philippines market
- Article meta tag cleanup on navigation (prevents stale metadata)
- robots.txt and sitemap.xml at /public/ directory
- **SEO-Friendly URL Structure (December 2024 Refactor):**
  - Blog posts: `/blog/{descriptive-slug}` (e.g., `/blog/autonomous-ai-agents-business`)
  - Case studies: `/portfolio/{descriptive-slug}` (e.g., `/portfolio/ecommerce-ai-recommendations`)
  - All 18 content pages use keyword-rich slugs for improved search visibility

**Special Features:**
- Calendly integration for consultation booking
- CoDave AI chat component for visitor engagement
- Responsive design with mobile-first approach
- Custom animations and gradient backgrounds throughout

### Backend Architecture

**Server Framework:** Express.js with TypeScript

**Environment-Specific Servers:**
- Development: `index-dev.ts` with Vite middleware for HMR
- Production: `index-prod.ts` serving pre-built static assets

**Build Process:**
- Client: Vite builds to `dist/public`
- Server: esbuild bundles to `dist/index.js` with ESM format
- Separate dev and build scripts for client/server

**Session Management:** Session storage configured (connect-pg-simple) but not actively implemented

**Routing Structure:**
- API routes prefixed with `/api`
- Catch-all route serves SPA for all other paths
- Static file serving in production

**Storage Layer:**
- Interface-based design (IStorage) for flexibility
- In-memory implementation (MemStorage) currently active
- Prepared for database migration with Drizzle ORM schema defined

### Data Storage Solutions

**ORM:** Drizzle ORM v0.39.1 configured for PostgreSQL

**Database Provider:** Neon Database (@neondatabase/serverless)

**Schema Definition:**
- Users table with UUID primary keys, username, password fields
- Zod validation schemas via drizzle-zod
- Migration files output to `./migrations` directory

**Current State:** Database schema defined but storage layer uses in-memory implementation. Production database integration pending via DATABASE_URL environment variable.

**Migration Strategy:** 
- `db:push` script available for schema updates
- Drizzle Kit configured for PostgreSQL dialect

### External Dependencies

**Third-Party Services:**

1. **Calendly** - Appointment scheduling integration
   - Custom booking UI with Calendly API backend (`/booking` page)
   - API endpoints: `/api/calendly/availability`, `/api/calendly/book`, `/api/calendly/events`
   - Hybrid approach: Custom UI for date/time selection, Calendly popup widget fallback for booking
   - Environment variables: `CALENDLY_API_KEY` (Personal Access Token), `CALENDLY_EVENT_TYPE_URI`
   - Fallback to Calendly embed widget when API booking fails (requires paid Calendly plan for Scheduling API)
   - Free consultation scheduling flow with 30-minute sessions

2. **Font Services** - Google Fonts
   - Preconnected for performance
   - Fonts: Outfit, Inter, JetBrains Mono

3. **AI/ML Platforms** (Marketing focus, not code dependencies):
   - OpenAI (ChatGPT, GPT-4)
   - Claude (Anthropic)
   - Google Gemini
   - Used in service delivery, not application infrastructure

4. **Automation Platforms** (Service offerings):
   - n8n
   - Make.com
   - Zapier
   - Go High Level
   - Power Automate

**Development Tools:**
- Replit-specific plugins: Cartographer, Dev Banner, Runtime Error Modal
- PostCSS with Tailwind and Autoprefixer
- ESBuild for server bundling

**UI Component Libraries:**
- @radix-ui/* - 20+ primitive component packages
- cmdk - Command palette
- embla-carousel-react - Carousel functionality
- class-variance-authority - Component variant management
- tailwind-merge + clsx - Utility class merging

**Form Management:**
- react-hook-form via @hookform/resolvers
- Zod for validation schemas

**Date Handling:** date-fns v3.6.0

**Performance Optimizations (PageSpeed):**
- **Image Optimization:** All images converted to WebP format (96-98% size reduction from original PNGs)
  - Optimized images stored in: `attached_assets/optimized_images/`
  - Original images remain in: `attached_assets/generated_images/`
  - Mobile-optimized logo (226x42, 3.8KB) served via picture element with srcset
  - Optimization script: `scripts/optimize-images.js` (uses Sharp library)
- **Code Splitting:** React.lazy() implemented for all 35+ route components in App.tsx
  - Suspense boundary with loading spinner for smooth transitions
  - Significantly reduces initial bundle size
- **Font Loading:** Non-blocking font loading with preload and media="print" strategy
  - Reduced font weights to only essential: 400, 500, 600, 700
  - Removed JetBrains Mono from initial load (not used on primary pages)
- **Server Compression:** Gzip/Brotli compression enabled in production via Express middleware
- **Static Asset Caching:** Long-term caching (1 year) for immutable assets (JS, CSS, images, fonts)
- **JavaScript Deferral:** Google Analytics 4 (G-1TSQ46FW5G) deferred 2 seconds after page load with onload callback
- **Animation Optimization:** Above-the-fold Framer Motion replaced with CSS animations (fade-in-up keyframes)
  - Hero section uses CSS `animate-fade-in-up` class
  - Testimonial cards use staggered CSS delays (`animate-fade-in-up-delay-1`, etc.)
- Source map optimization (@jridgewell/trace-mapping)

**SEO Infrastructure:**
- Sitemap.xml with 35+ URLs, proper priority weighting (updated December 2024)
- robots.txt with crawl directives
- JSON-LD structured data on all pages
- Meta tag optimization across all routes
- SEO-friendly URL slugs for all blog posts and case studies

## Recent Changes

**December 5, 2024 - Calendly API Integration:**
- Replaced Cal.com integration with Calendly API
- Backend routes: `/api/calendly/availability`, `/api/calendly/book`, `/api/calendly/events`
- Auto-resolves event type URI from booking URL (e.g., calendly.com/user/30min)
- Graceful fallback to Calendly popup widget when API booking fails
- Loads Calendly widget script for popup functionality
- Environment variables: `CALENDLY_API_KEY`, `CALENDLY_EVENT_TYPE_URI`

**December 4, 2024 - SEO URL Refactor:**
- Converted all 12 blog post URLs from `/blog-post-N` to `/blog/{descriptive-slug}` format
- Converted all 6 case study URLs from `/case-study-N` to `/portfolio/{descriptive-slug}` format
- Updated App.tsx routes, lazy imports, and component names
- Updated internal links in blog.tsx, case-studies.tsx, and home.tsx
- Updated canonical URLs and breadcrumb schemas in all 18 content files
- Updated sitemap.xml with new URL structure