import { useState, useEffect } from 'react';
import { apps } from '../data/apps';
import AppCard from '../components/AppCard';

const categories = ['All', ...new Set(apps.map((a) => a.category))];

export default function Apps() {
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    document.title = 'Our Apps - Vavy Labs';
  }, []);

  const filtered = activeCategory === 'All'
    ? apps
    : apps.filter((a) => a.category === activeCategory);

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-600/20 border border-brand-500/30 text-brand-300 text-sm font-medium mb-6">
            Android Applications
          </div>
          <h1 className="section-heading mb-4">Our Apps</h1>
          <p className="section-sub">
            {apps.length} apps · 250k+ total downloads · Made with love in India
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-brand-600 text-white shadow-lg shadow-brand-600/30'
                  : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-slate-500">
            No apps found in this category.
          </div>
        )}

        {/* Play store banner */}
        <div className="mt-16 card p-8 text-center">
          <p className="text-slate-400 mb-4">Find all our apps on Google Play Store</p>
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 20.5v-17c0-.83 1.01-1.3 1.7-.78l16 8.5a.9.9 0 0 1 0 1.56l-16 8.5C4.01 21.8 3 21.33 3 20.5z"/>
            </svg>
            View on Google Play
          </a>
        </div>
      </div>
    </div>
  );
}
