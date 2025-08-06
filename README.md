# Utkarsh Next Era - Construction & Real Estate Platform

This is a modern, feature-rich web application for Utkarsh Next Era, a construction and real estate company. Built with Next.js and TypeScript, it provides a seamless user experience for clients looking to build, renovate, or sell property. The platform is designed to be highly performant, SEO-friendly, and easy to navigate.

## ✨ Key Features

- **Dynamic Pages:** Fully responsive pages for showcasing projects, packages, floor plans, and company information.
- **Interactive Cost Calculator:** Allows users to get an estimated cost for their construction projects based on city, package, and area.
- **Advanced Floor Plan Viewer:** Users can browse and filter a gallery of customizable floor plans.
- **Smart FAQ Assistant:** An interactive, guided chat experience that helps users find answers to common questions about services, projects, and packages without relying on AI.
- **WhatsApp Integration:** Contact forms and job applications are seamlessly integrated with WhatsApp for instant communication.
- **Multi-City Support:** The entire site is tailored to provide information specific to the user's selected city (Varanasi, Bengaluru, Gurugram).
- **SEO Optimized:** Comprehensive on-page and technical SEO, including a dynamic sitemap, `robots.txt`, and structured data (JSON-LD) for enhanced search engine visibility.
- **Genkit-Powered AI (Optional):** Includes a Genkit flow for property recommendations, which can be expanded for future AI-driven features.

## 🚀 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [ShadCN UI](https://ui.shadcn.com/)
- **AI/Generative:** [Genkit](https://firebase.google.com/docs/genkit) (for AI flows)
- **Form Management:** [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)

## 🏁 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env` file in the root of your project and add any necessary environment variables (e.g., for Genkit API keys).
    ```env
    # Example for Google AI with Genkit
    GEMINI_API_KEY=your_google_ai_api_key
    ```

4.  **Run the development server:**
    ```sh
    npm run dev
    ```
    Open [http://localhost:9002](http://localhost:9002) with your browser to see the result.

## 📜 Available Scripts

In the project directory, you can run:

- `npm run dev`: Runs the app in development mode.
- `npm run build`: Builds the app for production.
- `npm run start`: Starts a production server.
- `npm run lint`: Runs the linter to check for code quality issues.
- `npm run genkit:dev`: Runs the Genkit development server for AI flows.

## 📂 Folder Structure

The project follows a standard Next.js App Router structure:

```
.
├── src/
│   ├── app/                # Main application routes and pages
│   ├── components/         # Reusable React components (UI, common, etc.)
│   ├── lib/                # Utility functions, constants, and data
│   ├── context/            # React context providers (e.g., CityContext)
│   ├── ai/                 # Genkit AI flows and configuration
│   └── hooks/              # Custom React hooks
├── public/                 # Static assets (images, fonts, robots.txt)
└── ...                     # Configuration files (tailwind.config.ts, next.config.ts, etc.)
```

## 🌐 SEO & Optimization

The website is built with a strong focus on SEO to ensure maximum visibility on search engines. Key optimizations include:
- **Dynamic Sitemap:** Automatically generated via `sitemap.ts`.
- **Robots.txt:** Optimized for crawlers.
- **Metadata:** Unique and descriptive titles and meta descriptions for all pages.
- **Structured Data:** `Organization` schema is implemented to improve search result appearance.
- **Image Optimization:** `next/image` is used for automatic image optimization and lazy loading.
- **Core Web Vitals:** The application is built to be fast and responsive, targeting excellent Core Web Vitals scores.
