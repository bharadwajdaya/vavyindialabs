import { Link } from 'react-router-dom';

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-3.5 h-3.5 ${star <= Math.round(rating) ? 'text-yellow-400' : 'text-slate-600'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-slate-400 text-xs ml-1">{rating}</span>
    </div>
  );
}

export default function AppCard({ app, featured = false }) {
  return (
    <div className={`card p-6 flex flex-col gap-4 group ${featured ? 'hover:scale-105' : 'hover:scale-102'} transition-transform duration-300`}>
      {/* Icon */}
      <div
        className="w-16 h-16 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg flex-shrink-0"
        style={{ backgroundColor: app.color, boxShadow: `0 8px 24px ${app.color}40` }}
      >
        {app.name.charAt(0)}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="text-white font-semibold text-lg leading-tight">{app.name}</h3>
          <span className="flex-shrink-0 text-xs px-2 py-0.5 rounded-full bg-white/10 text-slate-300">
            {app.category}
          </span>
        </div>
        <p className="text-brand-400 text-sm font-medium mb-2">{app.tagline}</p>
        <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">{app.description}</p>
      </div>

      {/* Meta */}
      <div className="flex items-center justify-between text-sm">
        <div className="flex flex-col gap-1">
          <StarRating rating={app.rating} />
          <span className="text-slate-500 text-xs">
            {app.reviews ? app.reviews : `${app.downloads} downloads`}
          </span>
        </div>
        <a
          href={app.playStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
          style={{ backgroundColor: app.color }}
        >
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 20.5v-17c0-.83 1.01-1.3 1.7-.78l16 8.5a.9.9 0 0 1 0 1.56l-16 8.5C4.01 21.8 3 21.33 3 20.5z"/>
          </svg>
          Install
        </a>
      </div>

      {/* Features */}
      {app.features && (
        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/10">
          {app.features.map((f) => (
            <span key={f} className="text-xs px-2 py-0.5 rounded-md bg-white/5 text-slate-400">
              {f}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
