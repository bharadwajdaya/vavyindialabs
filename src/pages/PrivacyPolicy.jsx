import { useEffect } from 'react';

function Section({ title, children }) {
  return (
    <div className="mb-10">
      <h2 className="text-xl font-semibold text-white mb-4 pb-2 border-b border-white/10">{title}</h2>
      <div className="text-slate-400 leading-relaxed space-y-3">{children}</div>
    </div>
  );
}

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = 'Privacy Policy - Vavy Labs';
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-600/20 border border-brand-500/30 text-brand-300 text-sm font-medium mb-6">
            Legal Document
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-slate-500 text-sm">
            Last updated: <span className="text-slate-400">May 2025</span> · Effective: May 2025
          </p>
          <p className="text-slate-400 mt-4 leading-relaxed">
            At Vavy Labs, your privacy is our highest priority. This policy explains how we handle your
            information across all of our Android applications.
          </p>
        </div>

        {/* Content */}
        <div className="card p-8">
          <Section title="1. Who We Are">
            <p>
              Vavy Labs is an Android application development company based in India. We develop and
              publish mobile applications available on the Google Play Store. This Privacy Policy applies
              to all applications published under the Vavy Labs developer account.
            </p>
            <p>
              If you have questions about this policy, please contact us at{' '}
              <a href="mailto:privacy@vavylabs.com" className="text-brand-400 hover:text-brand-300 transition-colors">
                privacy@vavylabs.com
              </a>
              .
            </p>
          </Section>

          <Section title="2. Information We Collect">
            <p>We collect the minimum information necessary to operate our applications:</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>
                <strong className="text-slate-300">Usage Data:</strong> Anonymous, aggregated app usage
                statistics (screens visited, features used) to improve our products.
              </li>
              <li>
                <strong className="text-slate-300">Crash Reports:</strong> Anonymized error reports to
                help us identify and fix bugs.
              </li>
              <li>
                <strong className="text-slate-300">Device Information:</strong> Basic device metadata
                (OS version, screen size) for compatibility testing only.
              </li>
            </ul>
            <p className="mt-3 p-3 bg-accent-500/10 border border-accent-500/20 rounded-lg text-accent-400 text-sm">
              We do NOT collect your name, email address, phone number, or any personally
              identifiable information unless you explicitly provide it when contacting us.
            </p>
          </Section>

          <Section title="3. Information We Do NOT Collect">
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>No contact lists or address books</li>
              <li>No location data</li>
              <li>No camera or microphone data</li>
              <li>No financial information</li>
              <li>No social media profiles</li>
              <li>No browsing history outside our apps</li>
            </ul>
          </Section>

          <Section title="4. How We Use Your Information">
            <p>The limited data we collect is used exclusively to:</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Fix bugs and improve app stability</li>
              <li>Understand which features are most useful</li>
              <li>Ensure compatibility across Android devices</li>
              <li>Respond to support requests you initiate</li>
            </ul>
            <p>
              We never use your data for advertising targeting, profiling, or selling to third parties.
            </p>
          </Section>

          <Section title="5. Third-Party Services">
            <p>
              Some of our apps integrate with third-party services to provide specific functionality.
              These may include:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>
                <strong className="text-slate-300">Firebase (Google):</strong> Used for crash
                reporting and anonymous analytics. Subject to Google's Privacy Policy.
              </li>
              <li>
                <strong className="text-slate-300">Google Play Services:</strong> Required for app
                distribution. Subject to Google's Terms of Service.
              </li>
            </ul>
            <p>
              Each app's specific third-party integrations are listed on its Google Play Store page.
            </p>
          </Section>

          <Section title="6. Data Storage and Security">
            <p>
              Most data processed by our apps stays on your device and is never transmitted to our
              servers. Where data is transmitted (e.g., crash reports), it is:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Encrypted in transit using TLS</li>
              <li>Anonymized before storage</li>
              <li>Retained for no longer than 90 days</li>
            </ul>
          </Section>

          <Section title="7. Your Rights">
            <p>You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Request access to any personal data we hold about you</li>
              <li>Request deletion of your data</li>
              <li>Opt out of analytics collection (via app settings where available)</li>
              <li>Uninstall any of our apps at any time</li>
            </ul>
            <p>
              To exercise these rights, contact us at{' '}
              <a href="mailto:privacy@vavylabs.com" className="text-brand-400 hover:text-brand-300 transition-colors">
                privacy@vavylabs.com
              </a>
              .
            </p>
          </Section>

          <Section title="8. Children's Privacy">
            <p>
              Our applications are not directed at children under 13 years of age. We do not knowingly
              collect any information from children. If you believe a child has provided us personal
              information, contact us immediately and we will delete it.
            </p>
          </Section>

          <Section title="9. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. When we do, we will revise the
              "Last updated" date at the top of this page. We encourage you to review this policy
              periodically. Continued use of our apps after changes constitutes acceptance of the
              updated policy.
            </p>
          </Section>

          <Section title="10. Contact Us">
            <p>For privacy-related questions or requests:</p>
            <div className="mt-3 p-4 bg-white/5 rounded-xl border border-white/10 space-y-1 text-sm">
              <p><span className="text-slate-500">Company:</span> <span className="text-slate-300">Vavy Labs</span></p>
              <p>
                <span className="text-slate-500">Email:</span>{' '}
                <a href="mailto:privacy@vavylabs.com" className="text-brand-400 hover:text-brand-300 transition-colors">
                  privacy@vavylabs.com
                </a>
              </p>
              <p><span className="text-slate-500">Location:</span> <span className="text-slate-300">India</span></p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
}
