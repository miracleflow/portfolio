import React from "react";
import { SiGithub } from "react-icons/si";

export const Footer: React.FC = () => {
  return (
    <footer className="text-sm text-[var(--muted)] border-t border-[var(--border)] py-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-start gap-4 px-6">
        {/* Left: message */}
        <div>
          Designed &amp; coded with ☕ + ❤️ by{" "}
          <span className="font-medium text-[var(--text)]">Kevin Pang</span>
        </div>

        {/* Right: social icons */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/miracleflow"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-[var(--text)] transition-colors"
          >
            <SiGithub size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};
