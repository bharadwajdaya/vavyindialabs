import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { apps, stats } from '../data/apps';
import AppCard from '../components/AppCard';

function AndroidIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0989L4.841 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3435-4.1021-2.6892-7.5743-6.1185-9.4396"/>
    </svg>
  );
}

export default function Home() {
  useEffect(() => {
    document.title = 'Vavy Labs - Android Apps';
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f0f1a] via-[#131328] to-[#0a1628]" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-600/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-accent-500/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-600/20 border border-brand-500/30 text-brand-300 text-sm font-medium mb-8">
            <AndroidIcon className="w-4 h-4" />
            Android App Studio · India
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
            Building Apps
            <br />
            <span className="text-gradient">Loved by Millions</span>
          </h1>

          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Vavy Labs builds practical Android applications for everyday life.
            From engineering tools to system utilities — simple, fast, and useful.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/apps" className="btn-primary text-base px-8 py-4">
              <AndroidIcon className="w-5 h-5" />
              Explore Our Apps
            </Link>
            <Link to="/contact" className="btn-outline text-base px-8 py-4">
              Get in Touch
            </Link>
          </div>

          {/* Scroll hint */}
          <div className="mt-20 flex flex-col items-center gap-2 text-slate-600 text-sm">
            <span>Scroll to explore</span>
            <div className="w-0.5 h-8 bg-gradient-to-b from-slate-600 to-transparent" />
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(({ label, value }) => (
              <div key={label} className="text-center">
                <div className="text-4xl font-extrabold text-gradient mb-1">{value}</div>
                <div className="text-slate-500 text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured apps */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-14">
          <h2 className="section-heading">Our Apps</h2>
          <p className="section-sub">
            Each app is crafted with care — clean design, zero clutter, and built for real people.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {apps.slice(0, 3).map((app) => (
            <AppCard key={app.id} app={app} featured />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/apps" className="btn-outline">
            View All Apps
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Why Vavy */}
      <section className="border-t border-white/10 bg-white/[0.02] py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-heading">Why Vavy Labs?</h2>
            <p className="section-sub">We build apps people actually love to use.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '⚡',
                title: 'Lightning Fast',
                desc: 'Optimized for performance. Our apps load instantly and run smoothly on all Android devices.',
              },
              {
                icon: '🔒',
                title: 'Privacy First',
                desc: 'We collect only what we need. No selling data, no hidden trackers, no surprises.',
              },
              {
                icon: '🎨',
                title: 'Beautiful Design',
                desc: 'Material You-inspired design that feels native to Android while looking distinctly modern.',
              },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="card p-8 text-center">
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="text-white font-semibold text-lg mb-3">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="card p-12 glow">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to try our apps?
            </h2>
            <p className="text-slate-400 mb-8 text-lg">
              Download our apps and experience the difference.
            </p>
            <Link to="/apps" className="btn-primary text-base px-8 py-4">
              <AndroidIcon className="w-5 h-5" />
              Browse All Apps
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
