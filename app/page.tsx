import Image from "next/image";
import { AppleIcon } from "./components/icons";
import Bento from "./components/Bento";

// ── Currently in beta on TestFlight (pre App Store) ─────────
const TESTFLIGHT_URL = "https://testflight.apple.com/join/2zHJdMdA";
const PIPED_GITHUB = "https://github.com/TeamPiped/Piped";
const ATLAS_PIPED_GITHUB = "https://github.com/heysonder/piped";
const PIPED_SELF_HOSTING_DOCS = "https://docs.piped.video/docs/self-hosting/";
const PRIVACY_GUIDES_FRONTENDS = "https://www.privacyguides.org/en/frontends/";

function DownloadButton({ small = false }: { small?: boolean }) {
  return (
    <a
      href={TESTFLIGHT_URL}
      className={small ? "cta-sm" : "cta"}
      target="_blank"
      rel="noreferrer"
    >
      <AppleIcon size={small ? 15 : 18} />
      Download on TestFlight
    </a>
  );
}

function PipedLink() {
  return (
    <a
      className="piped-link"
      href={PIPED_GITHUB}
      target="_blank"
      rel="noreferrer"
    >
      Piped
    </a>
  );
}

export default function Home() {
  return (
    <>
      <header className="topbar">
        <div className="topbar-inner">
          <a href="#" className="topbar-brand">
            Atlas
          </a>
          <DownloadButton small />
        </div>
      </header>

      <main className="shell">
        <Image
          className="app-icon"
          src="/app-icon.png"
          width={80}
          height={80}
          alt="Atlas app icon"
          priority
        />

        <h1 className="headline">A calmer way to watch YouTube.</h1>
        <p className="subhead">
          Atlas is a native iOS client for <PipedLink />. Ad-free, private, and
          account-free. Watch what you want, without being watched.
        </p>

        <div className="cta-wrap hero-cta">
          <DownloadButton />
        </div>
        <p className="hero-note">Free and open beta, via Apple TestFlight.</p>

        <Bento />

        <section className="setup-note">
          <p>
            <strong>Bring your own Piped API.</strong> For full privacy, self-host{" "}
            <a
              className="piped-link"
              href={ATLAS_PIPED_GITHUB}
              target="_blank"
              rel="noreferrer"
            >
              Piped for Atlas
            </a>
            , our open-source build of Piped tuned for this app. Then your
            searches and watch traffic never leave a server you control.
          </p>
          <p>
            Atlas ships with no default instance. Any standard Piped instance
            works, but a public one is run by someone else, so check what they
            log before you use it.
          </p>
          <div className="setup-links">
            <a
              className="setup-link"
              href={ATLAS_PIPED_GITHUB}
              target="_blank"
              rel="noreferrer"
            >
              Self-host Piped for Atlas →
            </a>
            <a
              className="setup-link"
              href={PIPED_SELF_HOSTING_DOCS}
              target="_blank"
              rel="noreferrer"
            >
              Piped self-hosting docs →
            </a>
            <a
              className="setup-link"
              href={PRIVACY_GUIDES_FRONTENDS}
              target="_blank"
              rel="noreferrer"
            >
              Privacy Guides on frontends →
            </a>
          </div>
        </section>

        <section className="pitch">
          <p>
            Atlas brings the open-source <PipedLink /> project to iOS as a fast,
            native app, with its own open-source Piped build you can run
            yourself. The videos you love, without the ads, tracking, or a
            Google account in the way.
          </p>
        </section>

        <div className="cta-wrap closing-cta">
          <DownloadButton />
        </div>
      </main>
    </>
  );
}
