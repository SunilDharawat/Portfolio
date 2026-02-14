import { Heart, Code } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="py-8 bg-black border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-zinc-400 text-sm">
            © {currentYear} Sunil Dharawat. All rights reserved.
          </p>

          {/* Quick Links */}
          <nav className="flex gap-6">
            {[
              { label: "Home", id: "hero" },
              { label: "About", id: "about" },
              { label: "Projects", id: "projects" },
              { label: "Contact", id: "contact" },
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-zinc-400 hover:text-violet-400 text-sm transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
