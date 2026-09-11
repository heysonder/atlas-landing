import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Atlas · Changelog",
  description:
    "Product updates for Atlas, the native iOS client for Piped.",
};

const RELEASES = [
  {
    label: "v1.9",
    date: "September 2026",
    dateTime: "2026-09",
    title: "Your library on every device, only if you ask",
    summary:
      "This beta adds opt-in iCloud sync. Turn it on and your subscriptions, history, playback progress, playlists, feedback, and For You activity merge across the iPhones and iPads signed into the same Apple Account. Leave it off and nothing changes: Atlas still keeps everything on the device, with no account of its own.",
    groups: [
      {
        title: "iCloud sync",
        changes: [
          "Library → Settings → iCloud Sync is off by default. The consent sheet lists exactly what syncs, what stays on the device (downloads, your Piped instance, permissions, diagnostics, the queue), and how encryption works before anything is uploaded.",
          "Enabling merges this device's library with what is already in iCloud rather than replacing either side. Deletions and clears you made earlier still win, so a device that was offline cannot bring back history you cleared.",
          "Everything Atlas writes to iCloud goes into encrypted CloudKit fields, and record names are opaque, so no video ID, search, channel, or playlist name appears in plain text. End-to-end encryption depends on Advanced Data Protection being on for your Apple Account; the app says so plainly and does not pretend to check.",
          "Playback position follows you: watch on the phone, resume on the iPad. A later rewatch from the start replaces an old deep position instead of losing to it.",
          "Progress uploads are batched to one per 30 seconds and on pause, stop, or backgrounding, so watching a long video does not hammer iCloud.",
          "Sync Now, Turn Off Sync on This Device, Reset For You Personalization, and Delete Synced Content from iCloud are separate, clearly worded actions. Turning off keeps both copies; deleting removes the iCloud copy and leaves a small marker so other devices pause instead of re-uploading it.",
          "Items this version of Atlas cannot read are set aside and retried later instead of stopping sync, and a single record iCloud rejects no longer blocks the rest of the queue.",
        ],
      },
      {
        title: "Library",
        changes: [
          "Search history keeps every query. The fifteen most recent are what you see; the rest keep informing For You until you clear them.",
          "Saving a live stream to Favorites or a playlist works. It used to fail silently because live streams report no duration.",
          "Exporting a backup no longer fails when a playlist contains a live stream, and playback position is saved for live and still-loading videos.",
        ],
      },
      {
        title: "Reliability",
        changes: [
          "Libraries created by older builds open normally again. Some installs were silently starting on temporary storage with the library hidden; Atlas now migrates the old store in place and, if it ever cannot, tells you the library is still on the device rather than suggesting a reinstall.",
          "The backup format carries playlist identities, so two playlists with the same name survive an import instead of one being skipped.",
        ],
      },
    ],
  },
  {
    label: "v1.8",
    date: "September 2026",
    dateTime: "2026-09",
    title: "A landscape player card, an iPad library, and thumbnails that land softly",
    summary:
      "This beta rebuilds the landscape Info and Chat panels as a Liquid Glass card, gives the Library a real sidebar on iPad, and makes every thumbnail, avatar, and banner load, size, and reveal the way it should.",
    groups: [
      {
        title: "Player",
        changes: [
          "In landscape, Info and Chat open as a Liquid Glass card docked to the trailing edge over the still-playing video. It runs to the edge of the screen, its corners follow the display, the Done button nests in the corner, and it fades in instead of sliding across live video.",
          "Rotating to portrait with the card open swaps to the regular sheet instead of breaking the layout.",
          "The Info, Chat, and Skip buttons over the video now share one height, one padding, and one inset line from the edge of the screen.",
          "The Watched badge sits in the bottom-left of a thumbnail, opposite the duration.",
          "Live chat no longer flashes the Latest button while you are scrolling toward the newest message.",
        ],
      },
      {
        title: "Thumbnails and artwork",
        changes: [
          "Thumbnails and avatars that had to be fetched land with a soft reveal. Rows already in memory appear instantly, so scrolling back never flickers, and the image cache grew from about twenty full-width thumbnails to a couple of screens in each direction.",
          "While an image loads, its placeholder is the image's own average colour rather than gray, remembered per video even after the picture leaves the cache.",
          "Thumbnails whose border would vanish into the background, a letterboxed video in dark mode or a white logo in light mode, get a hairline edge. Everything else is left alone.",
          "Channel banners and avatars request the size Google actually serves for the view, instead of pulling a 2560px banner on a phone or upscaling a 160px avatar. Banners crop to YouTube's mobile safe band on narrow screens and open up toward the full artwork on iPad, and a layout bug that stretched or zoomed banners is fixed.",
        ],
      },
      {
        title: "iPad and resizable windows",
        changes: [
          "Library is a split view: the sections are a sidebar and the selected one fills the detail column, opening on History so the tab never lands on an empty menu. A Continue Watching shelf leads History with resume bars and time remaining.",
          "History, Playlists, Downloads, and Search decide between the card grid and the plain list from the space actually available, so a narrow window no longer shows a single column of oversized cards. No screen-width breakpoints, per Apple's iPadOS 26 guidance.",
          "Search no longer shows two titles in a resized window, and grid cards no longer leave a blank line under one-line titles.",
        ],
      },
      {
        title: "Library polish",
        changes: [
          "Recent searches are plain rows in the App Store style: one line per query, no counts, no card.",
          "Playlist rows use the same thumbnail as History and playlist detail, History rows show video length, and the duration chip is Liquid Glass with a corner that nests into the thumbnail.",
          "Corners across the app use the concentric-corner API so nested shapes share a centre instead of fighting each other.",
        ],
      },
    ],
  },
  {
    label: "v1.7",
    date: "September 2026",
    dateTime: "2026-09",
    title: "Live chat, on-device diagnostics, and a Piped build you can self-host",
    summary:
      "This beta adds live chat and chat replay to the player, keeps performance diagnostics on the device, and points people toward Piped for Atlas, an open-source Piped deployment tuned for the app and meant to be self-hosted.",
    groups: [
      {
        title: "Piped for Atlas",
        changes: [
          "Atlas now recommends self-hosting Piped for Atlas, an open-source Piped deployment tuned for the app. Running your own instance keeps searches and feed traffic on a server you control instead of a public operator's.",
          "The Atlas build adds AV1 adaptive playback, more reliable related videos for recommendations, creator and collaborator metadata, fallbacks for channel pages and comments, and read-only live chat. Atlas still speaks the standard Piped API, so any instance keeps working.",
          "The site and privacy policy now say plainly that public instances are run by third parties and that you should check what they log before using one. Both link to the Piped self-hosting docs and Privacy Guides' frontends page.",
        ],
      },
      {
        title: "Live chat",
        changes: [
          "Live streams show a live chat transcript that polls the instance while the chat page is open, with channel-owner, moderator, member, and verified badges.",
          "Ended streams get a chat replay that plays in step with the video. Scroll up to pause following, scroll down or tap Latest to resume.",
          "A Chat button in the player opens chat as a glass sheet in portrait or a docked side panel in landscape, with the video still playing.",
          "Chat uses an endpoint that only Piped for Atlas provides. Instances without it fall back to the regular comments section. Polling is clamped to protect small self-hosted instances.",
          "Shortcode emoji like :speaker_high_volume: render as real emoji.",
        ],
      },
      {
        title: "Playback",
        changes: [
          "Locking the phone from the full-screen player no longer stops playback. Audio continues with the screen off and the Lock Screen keeps its Now Playing controls.",
          "Direct and HLS streams use AVFoundation's native loader again, fixing AV1 HLS that sat at waiting or played audio with a black picture on device.",
          "Playback recovers after an iOS media-services reset by swapping in a fresh player instead of retrying on a dead one.",
          "Ended broadcasts no longer carry a LIVE badge in search and channel rows.",
        ],
      },
      {
        title: "Discovery",
        changes: [
          "For You waits for every source before its first paint instead of rendering three times, and later re-ranks animate rows into place.",
          "Search history keeps the fifteen most recent searches.",
          "Missing channel avatars in For You and search rows are resolved from the channel page and remembered per channel. Failed avatars retry with a global budget so a broken image never becomes a request storm.",
          "Landscape iPhone uses a two-column feed whenever two columns fit.",
        ],
      },
      {
        title: "Privacy and diagnostics",
        changes: [
          "Settings gained a Diagnostics page. On iOS 27, Apple MetricKit performance and crash reports are archived on the device for up to 30 days and never leave it unless you share them. A Delete All Reports button clears the archive.",
          "Groundwork for age assurance on comments and chat using Apple's Declared Age Range API. It is not enforced yet. When enabled, Atlas stores only the on-or-off result and its date.",
          "Atlas no longer offers a one-tap default instance. The setup screen opens Instance settings and links to Piped for Atlas, the Piped self-hosting docs, and Privacy Guides instead of pointing at a third-party server.",
          "Spotlight now indexes subscribed channels and playlists alongside history and downloads. Handoff can pass the open video or channel to your other devices.",
          "The privacy policy was updated for live chat, diagnostics reports, Spotlight and Handoff, and the age assurance entitlement. A new section explains what YouTube can still see when you self-host Piped, and the SponsorBlock section now describes the instance as the party that contacts SponsorBlock.",
        ],
      },
      {
        title: "Site",
        changes: [
          "The SponsorBlock feature card now matches the app: Atlas shows a Skip button when you enter a segment and never skips on its own.",
          "The Private by design card now describes where media and images actually load from.",
        ],
      },
    ],
  },
  {
    label: "v1.6",
    date: "July 2026",
    dateTime: "2026-07",
    title: "Playback reliability, privacy hardening, and public screenshots",
    summary:
      "The newest beta is focused on making everyday playback more resilient and making the public project easier to evaluate at a glance.",
    groups: [
      {
        title: "Playback",
        changes: [
          "Atlas now prefers adaptive HLS manifests when they are available, letting AVPlayer handle quality changes instead of pinning playback to a fixed stream too early.",
          "Runtime fallback is more forgiving when a source stalls, fails after startup, or carries an expired signed URL.",
          "AV1 startup was tuned so capable devices can still reach sharper streams without making ordinary playback feel fragile.",
        ],
      },
      {
        title: "Feeds",
        changes: [
          "Home, For You, and Search pagination were tightened so longer browsing sessions can keep loading without feeling like separate pages.",
          "Feed loading does less unnecessary work while scrolling, which helps thumbnail-heavy screens feel steadier.",
        ],
      },
      {
        title: "Privacy and safety",
        changes: [
          "API, media, image, caption, artwork, redirect, and download requests now share stricter destination and response policies.",
          "Backups, downloads, local persistence, instance changes, and recovery behavior were hardened against malformed data and stale work.",
          "The public privacy policy now documents direct media hosts, Apple system surfaces, unencrypted exports, diagnostics, and the app's actual deletion behavior.",
        ],
      },
      {
        title: "Site",
        changes: [
          "The public README and website now show real app screenshots for the For You feed, channel pages, video info sheet, and channel list.",
        ],
      },
    ],
  },
  {
    label: "v1.5",
    date: "June 21, 2026",
    dateTime: "2026-06-21",
    title: "AV1, stream fallback, and player diagnostics",
    summary:
      "This pass made the stream pipeline more explicit: Atlas tries the best source it can, then backs away cleanly when an instance or device cannot support it.",
    groups: [
      {
        title: "AV1 HLS",
        changes: [
          "AV1 HLS is only attempted when the device supports AV1 hardware decode and the selected Piped instance actually reports AV1 streams for the video.",
          "Cold AV1 masters get a longer startup window before fallback, because some Piped instances generate those manifests on demand.",
          "The app avoids stale AV1 manifest responses so old signed media URLs do not poison the next playback attempt.",
        ],
      },
      {
        title: "Fallbacks",
        changes: [
          "HLS can fall back to a composed video/audio pair or a direct source when runtime playback fails.",
          "Composed playback can fall back to direct playback instead of ending in a no-playable-stream state.",
          "Fallback refreshes older stream details before rebuilding the player, reducing failures caused by expired URLs.",
        ],
      },
      {
        title: "Diagnostics",
        changes: [
          "Optional Stats for Nerds helps explain the selected source, quality ceiling, AV1 status, and fallback reason.",
          "Preferred audio-track selection was threaded into the stream builder so dubs and alternate tracks can be handled intentionally.",
        ],
      },
    ],
  },
  {
    label: "v1.4",
    date: "June 19, 2026",
    dateTime: "2026-06-19",
    title: "Search history, richer channels, and smarter For You signals",
    summary:
      "Discovery became more personal without adding an account: Atlas uses local activity and the chosen Piped instance to make browsing feel less blank.",
    groups: [
      {
        title: "Search",
        changes: [
          "Recent searches are stored locally, de-duped, and used as suggestions the next time you open Search.",
          "Remote query suggestions still come from the selected Piped instance after a short debounce.",
          "Successful searches become local signals for For You; failed searches are ignored.",
        ],
      },
      {
        title: "Channels",
        changes: [
          "Channel pages show richer metadata, including banners, avatars, subscriber counts, upload pagination, Shorts tab data, and live metadata.",
          "Watched videos stay visible on channel pages with badges instead of disappearing, preserving the channel's full catalog.",
        ],
      },
      {
        title: "For You",
        changes: [
          "The personalized feed learns from watches, recent searches, playlist saves, subscriptions, and Suggest More / Suggest Less feedback.",
          "Watch completion now matters: a video watched most of the way through carries more weight than one opened briefly.",
          "Subscriptions seed candidates and get a ranking boost, so followed channels can surface even on quieter topic days.",
        ],
      },
    ],
  },
  {
    label: "v1.3",
    date: "June 16-17, 2026",
    dateTime: "2026-06-16",
    title: "Info sheet, queue, chapters, and system playback",
    summary:
      "The player moved from simple video playback toward a full watch surface with native controls, useful context, and local library actions.",
    groups: [
      {
        title: "Player surfaces",
        changes: [
          "Atlas supports both fullscreen and embedded player styles, each backed by AVKit with Picture in Picture, AirPlay, and background audio.",
          "Now Playing controls are owned by AVKit, improving Control Center, Lock Screen, and Dynamic Island behavior.",
          "Captions stay off by default, while downloaded videos can use a saved caption sidecar when one is available.",
        ],
      },
      {
        title: "Info sheet",
        changes: [
          "The info sheet includes the creator row, subscribe toggle, playlist actions, description, comments, chapters, and upcoming queue.",
          "Timestamps in descriptions and comments can seek the current player.",
          "Comments can be previewed from the sheet or expanded into a full paginated view.",
        ],
      },
      {
        title: "Queue and library",
        changes: [
          "Play Next and Add to Queue create a session-only queue that advances when the current video ends.",
          "Videos can be saved into local playlists from card menus, shortcuts, and the player info sheet.",
          "Completed downloads play from disk first, preserving offline playback and resume support.",
        ],
      },
    ],
  },
  {
    label: "v1.2",
    date: "June 15, 2026",
    dateTime: "2026-06-15",
    title: "Explicit instance setup and local-first data",
    summary:
      "Atlas tightened its privacy model around one clear rule: the user chooses the Piped instance, and Atlas does not add an account or server of its own.",
    groups: [
      {
        title: "Instance setup",
        changes: [
          "Atlas does not ship with a default Piped instance. Online features start after the user adds an instance in Settings.",
          "Hosted instances require HTTPS, while local or private-network hosts can use HTTP for self-hosting and development.",
          "The selected endpoint is persisted securely on device.",
        ],
      },
      {
        title: "Local data",
        changes: [
          "Subscriptions, history, playlists, downloads, settings, and search history are stored on device.",
          "There is no Atlas sign-in, no Atlas-hosted watch database, and no Piped account sync requirement.",
          "The app links to a plain-language privacy policy from Settings.",
        ],
      },
    ],
  },
  {
    label: "v1.1",
    date: "June 14, 2026",
    dateTime: "2026-06-14",
    title: "Siri, Shortcuts, Spotlight, and larger-screen layouts",
    summary:
      "Atlas started integrating with the system around the app, making local videos and common actions easier to reach.",
    groups: [
      {
        title: "Shortcuts",
        changes: [
          "Atlas exposes actions for Search, Resume Watching, Open For You, Open Downloads, Play Video, Download Video, Add to Playlist, and Find Videos.",
          "Video and playlist parameters are App Entities, so Shortcuts can chain visible results and create a playlist on demand.",
          "Siri can open search flows and act on selected videos without requiring a Piped account.",
        ],
      },
      {
        title: "Spotlight",
        changes: [
          "Watched videos and completed downloads can be indexed for system search.",
          "When a video exists both online and as a completed download, Atlas prefers the local copy so playback can work offline.",
        ],
      },
      {
        title: "iPad",
        changes: [
          "Video grids adapt into more columns on larger screens.",
          "Multi-creator videos can show an overlapping avatar cluster instead of collapsing every creator into plain text.",
        ],
      },
    ],
  },
  {
    label: "v1.0",
    date: "June 13, 2026",
    dateTime: "2026-06-13",
    title: "Native Piped client for iOS",
    summary:
      "The first public beta established the core shape of Atlas: a native iOS client for watching through Piped without a Google account.",
    groups: [
      {
        title: "Browsing",
        changes: [
          "Home includes local subscriptions, an unauthenticated feed, a For You mode, and Shorts controls.",
          "Search supports videos and channels through the selected Piped instance.",
          "Channel pages include subscribe and unsubscribe controls backed by local data.",
        ],
      },
      {
        title: "Watching",
        changes: [
          "The player supports HLS with progressive fallback, Picture in Picture, AirPlay, background audio, SponsorBlock, and resume from the last saved position.",
          "Offline downloads can be saved and played back locally.",
          "Watch history and core settings live in the Library tab.",
        ],
      },
      {
        title: "Foundation",
        changes: [
          "PipedKit provides the app's Piped API client, Codable models, instance directory, and stream-selection helpers.",
          "The app is built in SwiftUI and designed around native iOS navigation rather than a web wrapper.",
        ],
      },
    ],
  },
] as const;

export default function ChangelogPage() {
  return (
    <main className="shell prose changelog-page">
      <Link href="/" className="back-link">
        ← Back to Atlas
      </Link>

      <p className="eyebrow">Changelog</p>
      <h1>What changed in Atlas</h1>
      <p className="changelog-intro">
        A short history of the beta, focused on the user-facing changes that
        make Atlas calmer, more private, and more useful on iOS.
      </p>
      <p className="changelog-summary-link">
        Too long?{" "}
        <Link href="/changelog/summary">Read the short version →</Link>
      </p>

      <ol className="changelog-list">
        {RELEASES.map((release) => (
          <li className="changelog-entry" key={release.title}>
            <div className="changelog-entry-meta">
              <span>{release.label}</span>
              <time dateTime={release.dateTime}>{release.date}</time>
            </div>

            <div className="changelog-entry-body">
              <h2>{release.title}</h2>
              <p>{release.summary}</p>
              <div className="changelog-groups">
                {release.groups.map((group) => (
                  <section className="changelog-group" key={group.title}>
                    <h3>{group.title}</h3>
                    <ul>
                      {group.changes.map((change) => (
                        <li key={change}>{change}</li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </main>
  );
}
