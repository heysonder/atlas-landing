import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Atlas · Privacy Policy",
  description:
    "How Atlas, the native iOS client for Piped, handles your data. Short answer: it never reaches us.",
};

// ── Edit these to match your details ────────────────────────
const DEVELOPER = "Chase Frazier";
const CONTACT_EMAIL = "contact@cmf.sh";
const LAST_UPDATED = "June 15, 2026";

export default function PrivacyPage() {
  return (
    <main className="shell prose">
      <Link href="/" className="back-link">
        ← Back to Atlas
      </Link>

      <h1>Privacy Policy</h1>
      <p className="updated">Last updated: {LAST_UPDATED}</p>

      <p>
        Atlas is a native iOS client for{" "}
        <a
          href="https://github.com/TeamPiped/Piped"
          target="_blank"
          rel="noreferrer"
          style={{ color: "inherit", fontWeight: 600 }}
        >
          Piped
        </a>
        , an open-source, privacy-friendly frontend for YouTube. It is free and
        open source, built by{" "}
        <a
          href="https://cmf.sh"
          target="_blank"
          rel="noreferrer"
          style={{ color: "inherit", fontWeight: 600 }}
        >
          {DEVELOPER}
        </a>
        . This policy explains, plainly, exactly what does and does not happen
        with your data.
      </p>

      <div className="tldr">
        <span className="tldr-label">TL;DR</span>
        <ul>
          <li>No accounts, no ads, no analytics, no tracking.</li>
          <li>
            <strong>The app never sends anything to us.</strong> We run no
            servers and keep no database about you.
          </li>
          <li>
            There is <strong>no preset server.</strong> You add a Piped instance
            yourself, and we recommend hosting your own.
          </li>
          <li>Everything you do stays on your device.</li>
          <li>
            The only data we could ever receive is Apple&rsquo;s opt-in crash
            reports, which you can turn off.
          </li>
        </ul>
      </div>

      <h2>What We Collect</h2>
      <p>
        Nothing about you. Atlas has no sign-in and no accounts, and it includes
        no advertising or analytics code. We have no database and no way to
        identify you.
      </p>

      <h2>How Your Data Is Used</h2>
      <p>
        Because we collect nothing, there is nothing for us to use, sell, or
        share. The only data the app needs to work is created and used locally,
        on your device.
      </p>

      <h2>What Stays on Your Device</h2>
      <p>
        The Piped instance you add, your subscriptions, your watch history, and
        your settings are stored locally so the app can function. They never
        leave your device through us.
      </p>

      <h2>Piped Instances</h2>
      <p>
        Atlas does <strong>not</strong> ship with a default or preset Piped
        instance, and it does not connect to any server until you add one
        yourself. You decide which Piped instance Atlas talks to.
      </p>
      <p>
        Whichever instance you choose receives your requests, including your IP
        address, when you search or play a video. For that reason we strongly
        recommend <strong>hosting your own Piped instance</strong>, so that no
        third party ever sees your activity. If you instead use a public
        instance run by someone else, your requests are handled by whoever
        operates it, under their own privacy policy. Atlas does not run any
        instance and has no control over, or visibility into, how a third-party
        instance handles your data.
      </p>

      <h2>Diagnostics</h2>
      <p>
        Atlas contains no third-party crash reporting or telemetry and never
        phones home to us. The only exception is Apple&rsquo;s own system: if you
        have opted in to sharing app diagnostics with developers in your iOS
        settings, Apple may give us anonymized, aggregated crash and performance
        reports through the App Store. This is Apple&rsquo;s mechanism, not ours,
        it contains no personal information, and you can turn it off any time in{" "}
        <em>Settings → Privacy &amp; Security → Analytics &amp; Improvements</em>
        .
      </p>

      <h2>Data Retention and Deletion</h2>
      <p>
        We keep nothing because we receive nothing. To erase everything Atlas
        stores, delete the app or clear its data from within the app&rsquo;s
        settings.
      </p>

      <h2>Your Choices</h2>
      <p>
        You stay in control of everything: which Piped instance you connect to,
        whether to share diagnostics with Apple, and whether to keep the app at
        all. Since we hold no personal data, there is nothing for you to request
        from, or have deleted by, us.
      </p>

      <h2>Security</h2>
      <p>
        Because Atlas keeps everything on your own device and collects nothing,
        there is essentially nothing to take from us. Connections to the Piped
        instance you choose are made over HTTPS where that instance supports it.
        No method of transmission or storage is ever fully secure, so absolute
        security can never be guaranteed.
      </p>

      <h2>Children&rsquo;s Privacy</h2>
      <p>
        Atlas collects no personal information from anyone, including children
        under the age of 13. Any content reached through a Piped instance comes
        from YouTube and is not filtered or moderated by Atlas.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this policy from time to time. When we do, we will revise
        the &ldquo;Last updated&rdquo; date above. Please review it
        periodically.
      </p>

      <h2>Contact</h2>
      <p>
        Have a question or suggestion about this policy? We are happy to hear
        from you.
      </p>

      <div className="contact-box">
        <p>
          Email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
      </div>
    </main>
  );
}
