import { useEffect, useState } from 'react';

function ContactCard({ icon, title, value, href, sub }) {
  const content = (
    <div className="card p-6 flex items-start gap-4 hover:scale-105 transition-transform duration-300">
      <div className="w-12 h-12 rounded-xl bg-brand-600/20 flex items-center justify-center flex-shrink-0 text-brand-400 text-xl">
        {icon}
      </div>
      <div>
        <p className="text-slate-500 text-xs font-medium uppercase tracking-wider mb-1">{title}</p>
        <p className="text-white font-semibold">{value}</p>
        {sub && <p className="text-slate-500 text-sm mt-0.5">{sub}</p>}
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
        {content}
      </a>
    );
  }
  return content;
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  useEffect(() => {
    document.title = 'Contact - Vavy Labs';
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = form;
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );
    const mailtoLink = `mailto:contact@vavylabs.com?subject=${encodeURIComponent(subject || 'Contact from Vavy Labs Website')}&body=${body}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-600/20 border border-brand-500/30 text-brand-300 text-sm font-medium mb-6">
            We're friendly!
          </div>
          <h1 className="section-heading mb-4">Get in Touch</h1>
          <p className="section-sub">
            Have a question, feedback, or a business inquiry? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left: Info */}
          <div className="space-y-4">
            <h2 className="text-white font-semibold text-lg mb-6">Contact Information</h2>

            <ContactCard
              icon="✉️"
              title="General Inquiries"
              value="contact@vavylabs.com"
              href="mailto:contact@vavylabs.com"
              sub="We reply within 24 hours"
            />
            <ContactCard
              icon="🔒"
              title="Privacy Concerns"
              value="privacy@vavylabs.com"
              href="mailto:privacy@vavylabs.com"
              sub="Data requests and policy questions"
            />
            <ContactCard
              icon="📍"
              title="Location"
              value="India"
              sub="Operating across India"
            />
            <ContactCard
              icon="📱"
              title="Play Store"
              value="Vavy Labs Apps"
              href="https://play.google.com/store"
              sub="View all our published apps"
            />

            {/* Response time */}
            <div className="card p-5 mt-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent-400 animate-pulse" />
                <p className="text-slate-400 text-sm">
                  Typical response time: <span className="text-white font-medium">within 24 hours</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            <h2 className="text-white font-semibold text-lg mb-6">Send a Message</h2>

            {submitted ? (
              <div className="card p-10 text-center">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-white font-semibold text-xl mb-2">Email client opened!</h3>
                <p className="text-slate-400 text-sm">
                  Your default email app should have opened with a pre-filled message.
                  If not, email us directly at{' '}
                  <a href="mailto:contact@vavylabs.com" className="text-brand-400 hover:underline">
                    contact@vavylabs.com
                  </a>
                  .
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm text-brand-400 hover:text-brand-300 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-400 text-xs font-medium mb-1.5 uppercase tracking-wider">
                      Name *
                    </label>
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-brand-500 focus:bg-white/8 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 text-xs font-medium mb-1.5 uppercase tracking-wider">
                      Email *
                    </label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-brand-500 focus:bg-white/8 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-400 text-xs font-medium mb-1.5 uppercase tracking-wider">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    placeholder="What's this about?"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-brand-500 focus:bg-white/8 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 text-xs font-medium mb-1.5 uppercase tracking-wider">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us more..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-brand-500 focus:bg-white/8 transition-all resize-none"
                  />
                </div>

                <button type="submit" className="btn-primary w-full justify-center py-4">
                  Send Message
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>

                <p className="text-slate-600 text-xs text-center">
                  This opens your email client. Alternatively, email us directly.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
