import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Atlas · Privacy Policy",
  description:
    "How Atlas stores local data, connects to Piped and media hosts, and uses Apple system services.",
};

const DEVELOPER = "Chase Frazier";
const CONTACT_EMAIL = "contact@cmf.sh";
const LAST_UPDATED = "September 7, 2026";

export default function PrivacyPage() {
  return (
    <main className="shell prose">
      <Link href="/" className="back-link">
        ← Back to Atlas
      </Link>

      <h1>Privacy Policy</h1>
      <p className="updated">Last updated: {LAST_UPDATED}</p>

      <p>
        This policy covers the Atlas iOS app. Atlas is a native client for{" "}
        <a
          href="https://github.com/TeamPiped/Piped"
          target="_blank"
          rel="noreferrer"
          style={{ color: "inherit", fontWeight: 600 }}
        >
          Piped
        </a>
        , an open-source frontend for YouTube. Atlas is built by{" "}
        <a
          href="https://cmf.sh"
          target="_blank"
          rel="noreferrer"
          style={{ color: "inherit", fontWeight: 600 }}
        >
          {DEVELOPER}
        </a>
        . This page explains what remains on your device, what leaves it when
        you use online features, and which other parties may handle those
        requests.
      </p>

      <div className="tldr">
        <span className="tldr-label">TL;DR</span>
        <ul>
          <li>Atlas has no account system, ads, third-party analytics, or tracking.</li>
          <li>
            We do not operate an Atlas backend or keep a database of your
            viewing activity.
          </li>
          <li>
            You choose a Piped instance. It receives searches and identifiers
            needed for feeds, recommendations, playback, comments, and related
            features.
          </li>
          <li>
            Atlas also contacts media, image, artwork, and caption hosts
            referenced by the selected instance. Self-hosting Piped does not
            proxy every connection the app makes.
          </li>
          <li>
            Your library is stored locally, but selected data can appear in
            Apple system surfaces such as Spotlight, Shortcuts, Handoff, and
            Now Playing.
          </li>
        </ul>
      </div>

      <h2>What Atlas Collects</h2>
      <p>
        We do not collect personal data through an Atlas-operated server. The
        app has no Atlas sign-in, advertising SDK, or third-party analytics SDK,
        and its Apple privacy manifest declares no tracking and no collected
        data categories. Apple may separately make diagnostic reports available
        to developers when a user enables Apple&rsquo;s analytics sharing; that
        process is controlled by Apple.
      </p>
      <p>
        The privacy manifest declares{" "}
        <a
          href="https://developer.apple.com/documentation/foundation/userdefaults"
          target="_blank"
          rel="noreferrer"
        >
          UserDefaults
        </a>{" "}
        access under Apple&rsquo;s{" "}
        <a
          href="https://developer.apple.com/documentation/bundleresources/describing-use-of-required-reason-api"
          target="_blank"
          rel="noreferrer"
        >
          CA92.1
        </a>{" "}
        reason and disk-space access under{" "}
        <a
          href="https://developer.apple.com/documentation/bundleresources/describing-use-of-required-reason-api"
          target="_blank"
          rel="noreferrer"
        >
          E174.1
        </a>
        . These are Apple&rsquo;s &ldquo;required reason&rdquo; codes: CA92.1
        means the app reads and writes only its own settings, and E174.1 means it
        checks free space only to decide whether a download can fit. If you
        contact us, we receive the information you choose to provide and use it
        to respond.
      </p>

      <h2>Data Stored on Your Device</h2>
      <p>Atlas stores the data it needs to provide your local library, including:</p>
      <ul>
        <li>Your selected Piped instance and app settings.</li>
        <li>Subscriptions, watch history, resume positions, and search history.</li>
        <li>Playlists, Suggest More / Suggest Less feedback, and recommendation data.</li>
        <li>Completed download metadata and downloaded media, artwork, and captions.</li>
        <li>Cached channel avatar references and small avatar image files.</li>
        <li>On-device performance and crash reports (see Diagnostics).</li>
      </ul>
      <p>
        Most library data is stored in the app&rsquo;s private container. The
        selected Piped instance is also mirrored to the iOS Keychain so the app
        and App Shortcuts can share it. Atlas does not provide cloud sync for
        this library data.
      </p>

      <h2>Network Connections</h2>
      <p>
        Atlas does not ship with a default Piped instance and never selects one
        for you. Online features begin after you add one. The setup screen links
        to Piped for Atlas, the Piped self-hosting documentation, and Privacy
        Guides so you can choose knowingly. Hosted instances must use HTTPS;
        HTTP is accepted only for local or private-network hosts.
      </p>
      <p>
        The selected Piped instance receives your IP address and the requests
        Atlas sends to it. Depending on the feature, those requests can include
        search terms, video or channel identifiers, feed and recommendation
        requests, stream metadata, comments, live chat and chat replay messages,
        channel lookups used to fill in missing avatars, and SponsorBlock
        category IDs. A third-party instance is operated under its own terms and privacy policy;
        Atlas does not control its logs or retention. Before using a public
        instance, review what its operator logs and how long it is kept.
      </p>
      <p>
        We recommend self-hosting{" "}
        <a
          href="https://github.com/heysonder/piped"
          target="_blank"
          rel="noreferrer"
          style={{ color: "inherit", fontWeight: 600 }}
        >
          Piped for Atlas
        </a>
        , our open-source Piped deployment tuned for this app. When you run your
        own instance, API traffic such as searches and feed requests stays on a
        server you control, and no third-party instance operator can log it.
        Atlas works with any standard Piped instance; the Atlas build adds more
        reliable recommendations, creator metadata, AV1 playback, and live chat.
      </p>
      <p>
        Piped responses contain URLs for video and audio streams, HLS playlists,
        thumbnails, avatars, artwork, and captions. Atlas contacts those
        referenced hosts directly for browsing, playback, prefetching, Now
        Playing artwork, and downloads. Those hosts can receive your IP address
        and the requested resource information. A self-hosted Piped instance
        therefore does not hide every runtime request from third-party media or
        asset hosts.
      </p>
      <p>
        Atlas can optionally contact youtube.com to resolve collaborator details
        that are missing from Piped. This is off by default and only runs after
        you enable <em>Resolve Collaborators via YouTube</em> in Atlas&rsquo;s
        Privacy settings.
      </p>

      <h2>What YouTube Can Still See</h2>
      <p>
        Piped works by putting a server between you and YouTube. The Piped
        backend fetches video metadata from YouTube itself, and it rewrites the
        stream, thumbnail, and avatar URLs it returns so they point at the
        instance&rsquo;s own media proxy rather than at Google&rsquo;s servers.
        Piped for Atlas deploys that proxy as part of the standard stack. On a
        correctly configured instance, YouTube therefore sees the
        instance&rsquo;s IP address and the videos and searches it requests. It
        does not see your device&rsquo;s IP address, a Google account, or
        cookies, and Atlas never sends it any of those.
      </p>
      <p>Three limits apply, and we want to be direct about them:</p>
      <ul>
        <li>
          <strong>A one-person instance is still you.</strong> If you self-host
          for yourself alone, every request leaving that server is yours, so
          YouTube can build a picture of what that server watches even without
          knowing who runs it. Privacy Guides notes that self-hosted frontends
          blend in better when other people use the instance too.
        </li>
        <li>
          <strong>Atlas trusts the URLs the instance returns.</strong> If an
          instance is configured without a proxy, or returns direct Google media
          URLs, Atlas will contact those hosts and your IP address reaches
          Google. Piped for Atlas is configured to proxy, but Atlas cannot
          verify how a third-party instance is set up.
        </li>
        <li>
          <strong>One optional feature talks to YouTube directly.</strong> The{" "}
          <em>Resolve Collaborators via YouTube</em> setting described above is
          off by default for exactly this reason.
        </li>
      </ul>
      <p>
        Learn more:{" "}
        <a
          href="https://docs.piped.video/docs/why/"
          target="_blank"
          rel="noreferrer"
        >
          why Piped exists
        </a>
        ,{" "}
        <a
          href="https://docs.piped.video/docs/architecture/"
          target="_blank"
          rel="noreferrer"
        >
          how Piped is built
        </a>
        , and{" "}
        <a
          href="https://www.privacyguides.org/en/frontends/"
          target="_blank"
          rel="noreferrer"
        >
          Privacy Guides on frontends
        </a>
        .
      </p>

      <h2>SponsorBlock</h2>
      <p>
        When SponsorBlock is enabled, Atlas asks your Piped instance for the
        skip segments of the current video, along with the categories you have
        turned on. Atlas never contacts the SponsorBlock service itself. The
        Piped backend makes that request on the instance&rsquo;s behalf, and in
        the upstream Piped code it sends only the first four characters of a
        hash of the video ID rather than the ID itself. SponsorBlock sees the
        instance, not you. Atlas does not automatically skip segments; it
        presents a user-controlled skip button.
      </p>

      <h2>Age Assurance for Social Features</h2>
      <p>
        Comments, live chat, and chat replay are user-generated content. Atlas
        includes Apple&rsquo;s Declared Age Range entitlement so it can ask iOS
        whether the age range declared for your Apple Account is 13 or older
        before showing that content. This check is not currently enforced in
        the app. When it is enabled, Atlas receives only the answer to that one
        question, stores only the on-or-off result and the date it was checked,
        and re-asks after 30 days. No birth date or other account detail is
        received or stored.
      </p>

      <h2>Apple System Surfaces and Caches</h2>
      <p>Atlas can make selected local or derived data available to iOS:</p>
      <ul>
        <li>
          Spotlight can index recent history, completed downloads, subscribed
          channels, and playlists, including titles, creator names, and poster
          or avatar references. Channel avatars are cached as small image files
          so results can show them.
        </li>
        <li>
          Handoff can advertise the video or channel currently open in Atlas to
          your other Apple devices. A device without Atlas continues in Safari
          on the matching youtube.com page. Apple manages that transfer between
          your devices.
        </li>
        <li>
          Siri, Shortcuts, and App Intents can query downloads, recent history,
          playlists, and videos recently visible in the app.
        </li>
        <li>
          Now Playing can show the active title, creator, artwork, and playback
          state on the Lock Screen, Control Center, CarPlay, and connected media
          controls.
        </li>
      </ul>
      <p>
        Atlas also uses temporary in-memory caches and an Apple-managed URL cache
        that may use memory and disk. Cached network responses and system index
        entries can remain until Atlas or iOS refreshes or evicts them.
      </p>

      <h2>Backups and Exports</h2>
      <p>
        <em>Library → Settings → Backup &amp; Data</em> can export history,
        search history, subscriptions, playlists, and Suggest More / Suggest Less
        feedback. Downloads are not included.
      </p>
      <p>
        An export is an ordinary, unencrypted JSON file handed to the iOS share
        sheet. Atlas does not add encryption to it. Its final location and
        protection depend on the app, service, or person you choose to share it
        with, so treat the file as sensitive.
      </p>

      <h2>Diagnostics</h2>
      <p>
        Atlas contains no third-party crash-reporting or telemetry SDK. Playback
        and download diagnostics use Apple&rsquo;s unified logging system. Atlas
        marks video identifiers private and does not intentionally log full media
        URLs, search terms, titles, or backup contents.
      </p>
      <p>
        On iOS 27 and later, Atlas also receives Apple MetricKit reports: daily
        aggregated performance summaries and per-event crash or hang reports.
        They are tagged with the playback path, feed mode, and live chat state
        at the time, contain no personal data, and are saved as files inside the
        app&rsquo;s container. Atlas keeps at most 30 days or 120 reports and
        deletes older ones. These reports never leave your device unless you
        explicitly share them from <em>Settings → Diagnostics</em>, which also
        offers a &ldquo;Delete All Reports&rdquo; button.
      </p>
      <p>
        If you enable Apple&rsquo;s analytics sharing, Apple may provide developers
        with crash and performance reports under Apple&rsquo;s own privacy practices.
        You can review that setting in{" "}
        <em>Settings → Privacy &amp; Security → Analytics &amp; Improvements</em>.
      </p>

      <h2>Retention and Deletion</h2>
      <p>
        We retain no Atlas account or viewing database because the app does not
        send one to us. Data stored by the app remains on your device until you
        remove it. Atlas provides controls for deleting individual library items
        and clearing watch history, but it does not currently provide one global
        &ldquo;erase everything&rdquo; button.
      </p>
      <p>
        Deleting Atlas removes its app container, including its database and
        downloaded files. The selected Piped instance is mirrored to the iOS
        Keychain and may remain available to Atlas if you reinstall it. Apple
        controls the retention of Apple diagnostic reports and system-managed
        caches or indexes.
      </p>

      <h2>Library Recovery</h2>
      <p>
        If Atlas cannot open its persistent library, it starts with an empty,
        temporary store and leaves the existing on-device store untouched. Do
        not export from that recovery session expecting it to contain the
        inaccessible library. Preserve the app container while diagnosing the
        store or restore from a JSON backup created while the library was
        healthy.
      </p>

      <h2>Security</h2>
      <p>
        Atlas validates network destinations, rechecks redirects, requires HTTPS
        for hosted Piped instances, and limits local HTTP to local or private
        networks. Local data is protected by the security of your device and
        operating system. No transmission, device, third-party service, or
        storage method can be guaranteed to be completely secure.
      </p>

      <h2>Children&rsquo;s Privacy</h2>
      <p>
        Atlas does not knowingly collect personal information from children or
        maintain user accounts for them. Content reached through Piped comes from
        YouTube and is not selected, filtered, or moderated by Atlas. Parents and
        guardians should supervise use as appropriate.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this policy when Atlas&rsquo;s behavior or supporting
        services change. The date at the top identifies the latest revision.
      </p>

      <h2>Contact</h2>
      <p>
        Questions or requests about this policy can be sent to the address below.
      </p>

      <div className="contact-box">
        <p>
          Email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
      </div>
    </main>
  );
}
