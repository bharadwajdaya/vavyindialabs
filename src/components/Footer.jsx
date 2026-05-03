import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0a14]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center">
                <span className="text-white font-bold text-sm">V</span>
              </div>
              <span className="font-bold text-lg text-white">
                Vavy <span className="text-brand-400">India</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Crafting beautiful Android applications that make everyday life simpler and more productive.
            </p>
            <p className="text-brand-400 font-semibold mt-3 text-sm">5+ Apps on Google Play</p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { to: '/', label: 'Home' },
                { to: '/apps', label: 'Our Apps' },
                { to: '/privacy', label: 'Privacy Policy' },
                { to: '/contact', label: 'Contact Us' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-slate-400 hover:text-brand-400 text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="mailto:contact@vavylabs.com" className="hover:text-brand-400 transition-colors">
                  contact@vavylabs.com
                </a>
              </li>
              <li>India</li>
            </ul>
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-slate-300 hover:bg-white/10 transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 20.5v-17c0-.83 1.01-1.3 1.7-.78l16 8.5a.9.9 0 0 1 0 1.56l-16 8.5C4.01 21.8 3 21.33 3 20.5z"/>
              </svg>
              Google Play
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center text-slate-600 text-sm">
          &copy; {new Date().getFullYear()} Vavy Labs. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
