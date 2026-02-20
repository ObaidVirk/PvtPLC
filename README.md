# PvtPLC - Business Directory Platform

A modern, professional business directory platform built with Next.js and TailwindCSS. PvtPLC helps professionals discover companies, track funding, and stay ahead of market trends.

## 🚀 Features

- **Company Discovery**: Search and explore 50M+ companies worldwide
- **Advanced Search**: Filter by funding, location, industry, and 50+ other criteria
- **Real-time Data**: Stay updated with the latest funding rounds and market trends
- **Multiple Solutions**: Tailored for Sales, Investors, Corporate Development, and Research teams
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean, minimalistic design with smooth animations and interactions

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **Language**: TypeScript
- **Icons**: [Lucide React](https://lucide.dev/)
- **Font**: Inter (Google Fonts)

## 📦 Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   # Copy the example file
   cp .env.example .env.local
   
   # Add your Stripe keys to .env.local
   ```

3. **Configure admin credentials in `.env.local`:**

   Add the following to your `.env.local` file:
   ```
   ADMIN_EMAIL=your_admin_email@example.com
   ADMIN_PASSWORD=your_strong_password_here
   ADMIN_FIRST_NAME=Admin
   ADMIN_LAST_NAME=User
   ```

   📖 See [ADMIN_SETUP.md](./ADMIN_SETUP.md) for detailed admin configuration.

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with Navbar & Footer
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles
│   ├── about/              # About page
│   ├── contact/            # Contact page
│   ├── login/              # Login page
│   ├── pricing/            # Pricing page
│   ├── search/             # Search/Directory page
│   ├── signup/             # Signup page
│   └── solutions/          # Solutions page
├── components/
│   ├── Navbar.tsx          # Navigation component
│   ├── Footer.tsx          # Footer component
│   ├── Hero.tsx            # Hero section
│   ├── Stats.tsx           # Statistics section
│   ├── Features.tsx        # Features section
│   ├── Solutions.tsx       # Solutions section
│   ├── Testimonials.tsx    # Testimonials section
│   └── CTA.tsx             # Call-to-action section
├── public/                 # Static assets
└── tailwind.config.js      # Tailwind configuration
```

## 🎨 Design Standards

### Typography
- **Font Family**: Inter
- **Headings**: `text-4xl md:text-6xl font-semibold`
- **Subheadings**: `text-2xl md:text-3xl font-medium`
- **Body**: `text-lg md:text-xl text-gray-600 leading-relaxed`

### Layout
- **Max Width**: `max-w-screen-xl` (centered)
- **Horizontal Padding**: `px-6 md:px-12`
- **Vertical Spacing**: `py-20 md:py-28`

### Colors
- **Primary Blue**: `#0ea5e9` (blue-600)
- **Dark Blue**: `#0369a1` (blue-700)
- **Background**: `#ffffff` (white) / `#f9fafb` (gray-50)

## 🌐 Pages

- **Home** (`/`) - Hero, stats, features, solutions, testimonials
- **Search** (`/search`) - Company directory with filters
- **Solutions** (`/solutions`) - Solutions for different teams
- **Pricing** (`/pricing`) - Pricing plans with billing toggle
- **About** (`/about`) - Company story, values, and team
- **Contact** (`/contact`) - Contact form and information
- **Login** (`/login`) - User authentication
- **Signup** (`/signup`) - User registration

## 🚢 Production Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 📝 Code Quality

- Clean, modular React components
- Consistent TailwindCSS utility usage
- TypeScript for type safety
- Responsive design patterns
- Semantic HTML structure

## 🎯 Key Components

### Navbar
- Sticky navigation with mobile menu
- Search button and authentication links
- Smooth transitions and hover states

### Footer
- Comprehensive link structure
- Social media icons
- Organized into logical sections

### Hero Section
- Large headline with search bar
- Call-to-action buttons
- Trust badges and statistics

### Features
- Grid layout with icons
- Clean card design
- Hover effects

## 📱 Responsive Design

All pages and components are fully responsive:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🤝 Contributing

This is a demonstration project. Feel free to use it as a template for your own projects.

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🙏 Acknowledgments

- Design inspiration from modern SaaS platforms
- Built with Next.js and TailwindCSS
- Icons by Lucide React

---

**Built with ❤️ using Next.js and TailwindCSS**
