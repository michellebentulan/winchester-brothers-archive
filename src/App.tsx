import { useEffect, useState } from "react";

const profiles = {
  dean: {
    name: "DEAN",
    actor: "JENSEN ACKLES",
    label: "THE HEART / DRIVER",
    image: "https://c2.staticflickr.com/4/3002/2951727620_110d157ba1_b.jpg",
    quote:
      "If it has four wheels, a cassette deck, or comes with pie, Dean has already called dibs.",
    likes: [
      "Classic rock at structurally questionable volume",
      "Keeping Baby cleaner than most hospital rooms",
      "Pie. Not cake. This is important.",
      "Pool hustling, old westerns & fixing engines",
    ],
    stats: [
      ["DEFAULT ORDER", "BURGER + PIE"],
      ["LOVE LANGUAGE", "CAR MAINTENANCE"],
      ["RESEARCH STYLE", "ASK SAM"],
    ],
  },
  sam: {
    name: "SAM",
    actor: "JARED PADALECKI",
    label: "THE BRAIN / NAVIGATOR",
    image:
      "https://i.pinimg.com/originals/57/e6/65/57e665fda5a05031bc02585b7ecd8270.jpg",
    quote:
      "Sam will find the obscure Latin footnote that saves everyone—after reminding Dean that vegetables exist.",
    likes: [
      "Lore, languages & aggressively thorough research",
      "Books with more than one thousand pages",
      "Running, salads & trying to make healthy choices",
      "Law, ethics & keeping 47 browser tabs open",
    ],
    stats: [
      ["DEFAULT ORDER", "SALAD, PROBABLY"],
      ["LOVE LANGUAGE", "RESEARCH"],
      ["HAIR STATUS", "SEASON 1 FLOP"],
    ],
  },
};
const tracks = [
  [
    "01",
    "Carry On Wayward Son",
    "Kansas",
    "https://open.spotify.com/search/Carry%20On%20Wayward%20Son%20Kansas",
  ],
  [
    "02",
    "Back in Black",
    "AC/DC",
    "https://open.spotify.com/search/Back%20in%20Black%20ACDC",
  ],
  ["03", "Renegade", "Styx", "https://open.spotify.com/search/Renegade%20Styx"],
  [
    "04",
    "Heat of the Moment",
    "Asia",
    "https://open.spotify.com/search/Heat%20of%20the%20Moment%20Asia",
  ],
  [
    "05",
    "Wanted Dead or Alive",
    "Bon Jovi",
    "https://open.spotify.com/search/Wanted%20Dead%20or%20Alive%20Bon%20Jovi",
  ],
  [
    "06",
    "Ramble On",
    "Led Zeppelin",
    "https://open.spotify.com/search/Ramble%20On%20Led%20Zeppelin",
  ],
];
const cases = [
  "VAMPIRE NEST — bring machetes, not monologues.",
  "HAUNTED MOTEL — reviews mention cold spots and bad Wi-Fi.",
  "DEMON OMEN — sulfur, static, and one deeply suspicious crossroads.",
  "WEREWOLF — silver packed. Dean still packed snacks first.",
  "WOMAN IN WHITE — avoid bridges, unfaithful drivers, and awkward confessions.",
  "POLTERGEIST — pack rock salt and prepare for aggressive furniture.",
  "WENDIGO — flares ready. Camping enthusiasm remains critically low.",
  "SHAPESHIFTER — confirm everyone has the correct face before trusting them.",
  "ROUGAROU — ordinary appetite or monster hunger? Bring a flamethrower just in case.",
  "TULPA — somebody believed the internet again. Burn the symbol.",
  "DJINN — if life suddenly feels perfect, start looking for the lamp.",
  "SIREN — separate the brothers before the argument becomes armed.",
  "HELLHOUND — invisible, fast, and definitely not available for belly rubs.",
  "CROATOAN VIRUS — test the blood and cancel all group activities.",
  "RAKSHAKA — clown sighting reported. Sam is already unhappy.",
  "PAGAN GOD — charming small town, excellent pie, deeply suspicious orchard.",
  "GHOST SICKNESS — forty-eight hours until fear wins. Hide the tiny dogs.",
  "WITCH COVEN — hex bags located. Laundry inspection now mandatory.",
  "ANGEL BUSINESS — lights flickering, ears ringing, cosmic family drama incoming.",
  "LEVIATHAN — borax packed. Keep them away from fast-food management.",
];
const introNotes = [
  "PROTECT THE INNOCENT — even when nobody knows their names.",
  "SALT. IRON. LORE. FIRE. REPEAT UNTIL THE MONSTER STAYS DEAD.",
  "FAMILY BUSINESS — the road always leads them back to each other.",
];
const disposalNotes: Record<string, string> = {
  "VENGEFUL SPIRIT": "FIND THE REMAINS. SALT AND BURN THE BONES.",
  VANIR: "DESTROY THE SACRED TREE. FIRE ENDS THE CYCLE.",
  TRICKSTER: "QUESTION THE REALITY. FIND WHAT THE LESSON IS HIDING.",
  "GHOST SICKNESS": "IDENTIFY THE BURUBURU. RECREATE ITS DEATH.",
  SHAPESHIFTER: "SILVER TO THE HEART. CHECK EVERY FACE TWICE.",
  "DEMON SIEGE": "DEVIL'S TRAP. HOLY WATER. EXORCISM ON STANDBY.",
  ANGEL: "WARD THE ROOM. NEVER LOOK AT ITS TRUE FORM.",
  PROPHET: "PROTECT THE WITNESS. VERIFY EVERY VISION.",
  GABRIEL: "DO NOT TRUST THE SET. BREAK THE ILLUSION.",
  LUCIFER: "NO CLEAN KILL. REACH THE VESSEL BEFORE THE DEVIL DOES.",
  WITCHCRAFT: "LOCATE THE HEX BAG. BURN IT. REVERSE THE SPELL.",
  "PHANTOM GHOST": "FOLLOW THE COLD SPOTS. UNMASK THE HUMAN HAND.",
  GOD: "REFUSE THE SCRIPT. KEEP WRITING YOUR OWN ENDING.",
};
const getDisposal = (entity: string) =>
  disposalNotes[entity] ||
  "VERIFY THE LORE. ISOLATE THE SOURCE. DO NOT HUNT ALONE.";
const caseFiles = [
  {
    id: "001",
    episode: "S01 / E01",
    title: "WOMAN IN WHITE",
    place: "JERICHO, CALIFORNIA",
    entity: "VENGEFUL SPIRIT",
    summary:
      "A string of disappearances along Highway 41 leads the newly reunited brothers to Constance Welch. Salt, fire, unfinished business—and the road trip begins.",
    status: "CLOSED",
    link: "https://supernaturalwiki.com/1.01_Pilot",
  },
  {
    id: "005",
    episode: "S01 / E05",
    title: "BLOODY MARY",
    place: "TOLEDO, OHIO",
    entity: "VENGEFUL SPIRIT",
    summary:
      "Mirror deaths expose buried guilt. The brothers trace the legend to Mary Worthington and weaponize a mirror against the spirit. Seven years of bad luck feels manageable by comparison.",
    status: "CLOSED",
    link: "https://supernaturalwiki.com/1.05_Bloody_Mary",
  },
  {
    id: "011",
    episode: "S01 / E11",
    title: "SCARECROW",
    place: "BURKITTSVILLE, INDIANA",
    entity: "VANIR",
    summary:
      "Perfect crops, overly friendly locals, and one extremely sinister orchard. Dean investigates a pagan god while Sam briefly tries the whole separate-road thing.",
    status: "BURNED",
    link: "https://supernaturalwiki.com/1.11_Scarecrow",
  },
  {
    id: "311",
    episode: "S03 / E11",
    title: "MYSTERY SPOT",
    place: "BROWARD COUNTY, FLORIDA",
    entity: "TRICKSTER",
    summary:
      "Tuesday repeats. Dean dies. Tuesday repeats again. Sam learns every detail of the loop; Dean learns absolutely nothing because he keeps dying before lunch.",
    status: "TUESDAY",
    link: "https://supernaturalwiki.com/3.11_Mystery_Spot",
  },
  {
    id: "406",
    episode: "S04 / E06",
    title: "YELLOW FEVER",
    place: "ROCK RIDGE, COLORADO",
    entity: "GHOST SICKNESS",
    summary:
      "Dean contracts a supernatural fear sickness with a 48-hour deadline. The cure works. His dignity does not survive the tiny dog encounter.",
    status: "CURED",
    link: "https://supernaturalwiki.com/4.06_Yellow_Fever",
  },
  {
    id: "215",
    episode: "S02 / E12",
    title: "NIGHTSHIFTER",
    place: "MILWAUKEE, WISCONSIN",
    entity: "SHAPESHIFTER",
    summary:
      "A bank siege, a shapeshifter, and one very committed conspiracy theorist. The brothers escape the SWAT team just in time for Renegade to hit the soundtrack.",
    status: "ESCAPED",
    link: "https://supernaturalwiki.com/2.12_Nightshifter",
  },
  {
    id: "312",
    episode: "S03 / E12",
    title: "JUS IN BELLO",
    place: "MONUMENT, COLORADO",
    entity: "DEMON SIEGE",
    summary:
      "Trapped inside a police station with demons closing in, the brothers, Ruby, and Agent Henriksen make a last stand behind salt lines and an improvised exorcism.",
    status: "COSTLY",
    link: "https://supernaturalwiki.com/3.12_Jus_In_Bello",
  },
  {
    id: "401",
    episode: "S04 / E01",
    title: "LAZARUS RISING",
    place: "PONTIAC, ILLINOIS",
    entity: "ANGEL",
    summary:
      "Dean claws out of his grave and follows a trail of burned-out eyes, shattered glass, and impossible power to Castiel's unforgettable entrance.",
    status: "RAISED",
    link: "https://supernaturalwiki.com/4.01_Lazarus_Rising",
  },
  {
    id: "418",
    episode: "S04 / E18",
    title: "THE MONSTER AT THE END",
    place: "SUPERNATURAL BOOKS",
    entity: "PROPHET",
    summary:
      "Sam and Dean discover a book series documenting their lives, meet author Chuck Shurley, and react exactly as anyone would to finding their trauma in paperback.",
    status: "PUBLISHED",
    link: "https://supernaturalwiki.com/4.18_The_Monster_at_the_End_of_This_Book",
  },
  {
    id: "508",
    episode: "S05 / E08",
    title: "CHANGING CHANNELS",
    place: "WELLINGTON, OHIO",
    entity: "GABRIEL",
    summary:
      "A case becomes a television marathon when Gabriel traps the brothers in hospital drama, sitcom, commercial, game show, and procedural worlds.",
    status: "OFF AIR",
    link: "https://supernaturalwiki.com/5.08_Changing_Channels",
  },
  {
    id: "522",
    episode: "S05 / E22",
    title: "SWAN SONG",
    place: "STULL CEMETERY, KANSAS",
    entity: "LUCIFER",
    summary:
      "The apocalypse narrows to two brothers, one impossible choice, and a lifetime of memories inside the Impala. Family proves stronger than destiny.",
    status: "APOCALYPSE PAUSED",
    link: "https://supernaturalwiki.com/5.22_Swan_Song",
  },
  {
    id: "615",
    episode: "S06 / E15",
    title: "THE FRENCH MISTAKE",
    place: "VANCOUVER, CANADA",
    entity: "PARALLEL REALITY",
    summary:
      "The brothers land in a world where they are actors named Jared and Jensen filming a show called Supernatural. Acting skills: deeply concerning.",
    status: "BACK IN CHARACTER",
    link: "https://supernaturalwiki.com/6.15_The_French_Mistake",
  },
  {
    id: "1114",
    episode: "S11 / E04",
    title: "BABY",
    place: "ON THE ROAD",
    entity: "NACHZEHRER",
    summary:
      "One entire case from the Impala's point of view: motel parking lots, a monster ambush, brotherly conversations, and proof that Baby sees everything.",
    status: "MILES ADDED",
    link: "https://supernaturalwiki.com/11.04_Baby",
  },
  {
    id: "1211",
    episode: "S12 / E11",
    title: "REGARDING DEAN",
    place: "EUREKA SPRINGS, ARKANSAS",
    entity: "WITCHCRAFT",
    summary:
      "A witch's spell erases Dean's memory piece by piece. Sam races for a cure while Dean leaves himself notes and briefly finds the bunny deeply suspicious.",
    status: "MEMORY RESTORED",
    link: "https://supernaturalwiki.com/12.11_Regarding_Dean",
  },
  {
    id: "1316",
    episode: "S13 / E16",
    title: "SCOOBYNATURAL",
    place: "CRYSTAL COVE",
    entity: "PHANTOM GHOST",
    summary:
      "The Winchesters are pulled into Scooby-Doo. Dean loves it, Sam questions reality, and the Scooby Gang learns that monsters can unfortunately be real.",
    status: "JINKIES",
    link: "https://supernaturalwiki.com/13.16_Scoobynatural",
  },
  {
    id: "1420",
    episode: "S14 / E20",
    title: "MORIAH",
    place: "LEBANON, KANSAS",
    entity: "GOD",
    summary:
      "The truth behind Jack's fate turns a confrontation into open rebellion. Dean and Sam refuse the ending written for them—and Chuck responds badly.",
    status: "TO BE CONTINUED",
    link: "https://supernaturalwiki.com/14.20_Moriah",
  },
];

export default function Home() {
  const [menu, setMenu] = useState(false),
    [active, setActive] = useState<"dean" | "sam">("dean"),
    [playing, setPlaying] = useState(false),
    [caseNo, setCaseNo] = useState(0),
    [openCase, setOpenCase] = useState<number | null>(0),
    [casePage, setCasePage] = useState(0),
    [tape, setTape] = useState(0),
    [introNote, setIntroNote] = useState(0);
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    const o = new IntersectionObserver(
      (es) =>
        es.forEach((e) => e.isIntersecting && e.target.classList.add("seen")),
      { threshold: 0.12 },
    );
    els.forEach((e) => o.observe(e));
    return () => o.disconnect();
  }, []);
  const p = profiles[active];
  const pageCases = caseFiles.slice(casePage * 4, casePage * 4 + 4);
  const changeCasePage = (page: number) => {
    setCasePage(page);
    setOpenCase(page * 4);
  };
  return (
    <main id="top">
      <header>
        <a className="brand" href="#top">
          THE WINCHESTER FILES
        </a>
        <button onClick={() => setMenu(!menu)} aria-expanded={menu}>
          INDEX {menu ? "×" : "+"}
        </button>
        <nav className={menu ? "open" : ""}>
          <a href="#brothers" onClick={() => setMenu(false)}>
            BROTHERS
          </a>
          <a href="#baby" onClick={() => setMenu(false)}>
            BABY
          </a>
          <a href="#case-files" onClick={() => setMenu(false)}>
            CASES
          </a>
          <a href="#mixtape" onClick={() => setMenu(false)}>
            MIXTAPE
          </a>
        </nav>
        <span>CASE NO. 13-09-05</span>
      </header>
      <section className="hero">
        <img
          src="https://w-dog.ru/wallpapers/6/16/450544589287577/sverxestestvennoe-dzhensen-ekls-din-vinchester-dzhared-padaleki-sem-vinchester.jpg"
          alt="Dean and Sam Winchester showing their FBI badges"
        />
        <div className="hero-shade" />
        <p className="eyebrow">
          A FAN-MADE HUNTER'S ARCHIVE / LAWRENCE, KANSAS
        </p>
        <h1>
          <span>THE FAMILY</span>
          <em>business.</em>
        </h1>
        <p className="hero-copy">
          TWO BROTHERS. ONE BLACK IMPALA.
          <br />
          AN ABSURD NUMBER OF APOCALYPSES.
        </p>
        <a className="enter" href="#brothers">
          OPEN THE FILE ↓
        </a>
      </section>
      <section className="intro" id="brothers">
        <div className="route-map" aria-hidden="true">
          <span className="road r1" />
          <span className="road r2" />
          <span className="road r3" />
          <i className="route-dot d1" />
          <i className="route-dot d2" />
          <b className="route-city c1">
            LAWRENCE
            <br />
            KS / START
          </b>
          <b className="route-city c2">
            EVERYWHERE, USA
            <br />
            3,294 MI
          </b>
          <strong className="route-car">
            ▰<small>67</small>
          </strong>
          <div className="road-log">
            <span>ROAD LOG / 2005—2020</span>
            <b>KAZ 2Y5</b>
            <span>2 BROTHERS / 1 IMPALA</span>
            <em>DESTINATION: THE NEXT CASE →</em>
          </div>
        </div>
        <p>
          SUBJECTS / 001—002
          <br />
          <span className="tap-note">TAP THE HEADLINE →</span>
        </p>
        <div className="intro-title" data-reveal>
          <h2>
            <button
              className={introNote === 0 ? "active" : ""}
              onClick={() => setIntroNote(0)}
            >
              SAVING PEOPLE.
            </button>
            <button
              className={introNote === 1 ? "active" : ""}
              onClick={() => setIntroNote(1)}
            >
              HUNTING THINGS.
            </button>
            <button
              className={introNote === 2 ? "active italic" : "italic"}
              onClick={() => setIntroNote(2)}
            >
              YOU KNOW THE REST.
            </button>
          </h2>
          <p className="headline-note" key={introNote}>
            <span>0{introNote + 1}</span>
            {introNotes[introNote]}
          </p>
        </div>
        <div className="intro-story" data-reveal>
          <div className="route-card">
            <div className="mini-shield">
              <small>U.S.</small>
              <b>67</b>
            </div>
            <div>
              <span>CURRENT ROUTE</span>
              <strong>
                LAWRENCE, KS
                <br />→ EVERYWHERE, USA
              </strong>
            </div>
            <em>3,294 MI</em>
          </div>
          <p>
            Dean and Sam Winchester grew up on the road, trained by their father
            to track what goes bump in the night. Fifteen seasons later, the
            monsters changed—but the center held: two brothers choosing each
            other, again and again.
          </p>
          <p className="red-note">
            OFFICIAL STATUS:
            <br />
            LEGENDS, MENACES,
            <br />
            CO-DEPENDENT ICONS.
          </p>
        </div>
      </section>

      <section className="profiles">
        <div className="profile-tabs">
          <button
            className={active === "dean" ? "active" : ""}
            onClick={() => setActive("dean")}
          >
            01 / DEAN
          </button>
          <button
            className={active === "sam" ? "active" : ""}
            onClick={() => setActive("sam")}
          >
            02 / SAM
          </button>
        </div>
        <div className="profile-card" key={active}>
          <div className="portrait">
            <img src={p.image} alt={`${p.name} Winchester portrait`} />
            <span>{p.actor}</span>
          </div>
          <div className="profile-copy">
            <p className="file-label">{p.label}</p>
            <h2>
              {p.name}
              <br />
              <i>WINCHESTER.</i>
            </h2>
            <p className="profile-quote">{p.quote}</p>
            <h3>KNOWN INTERESTS</h3>
            <ul>
              {p.likes.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
            <div className="stats">
              {p.stats.map((s) => (
                <p key={s[0]}>
                  <span>{s[0]}</span>
                  <b>{s[1]}</b>
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="baby" id="baby">
        <img
          src="https://zefirka.club/uploads/posts/2023-01/1672668657_32-zefirka-club-p-impala-sverkhestestvennoe-32.jpg"
          alt="Black 1967 Chevrolet Impala at night"
        />
        <div className="baby-overlay" />
        <p className="file-label">SUBJECT / 003 — THE REAL STAR</p>
        <h2 data-reveal>BABY.</h2>
        <div className="car-specs" data-reveal>
          <p>
            <span>MAKE / MODEL</span>1967 CHEVROLET IMPALA
          </p>
          <p>
            <span>COLOR</span>BLACK. OBVIOUSLY.
          </p>
          <p>
            <span>PLATE</span>KAZ 2Y5 / CNK 80Q3
          </p>
          <p>
            <span>TRUNK</span>DO NOT OPEN AT A TRAFFIC STOP.
          </p>
        </div>
        <p className="car-copy">
          Passed from John to Dean, rebuilt more than once, and home to the
          brothers for thousands of miles. The Impala is transport, armory,
          sanctuary—and the only member of the team with consistently excellent
          taste in music.
        </p>
      </section>

      <section className="case-files" id="case-files">
        <div className="case-heading">
          <p>JOHN WINCHESTER'S JOURNAL / VOL. II</p>
          <h2 data-reveal>
            CASE
            <br />
            <i>FILES.</i>
          </h2>
          <span>
            Sixteen hunts recovered from the family archive. Click an entry to
            open the field notes.
          </span>
          <div className="john-note">
            If it bleeds, you can kill it.
            <br />
            If it doesn't—check the lore.
          </div>
        </div>
        <div className="journal">
          <div className="journal-spine" aria-hidden="true">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <i key={n} />
            ))}
          </div>
          <div className="journal-head">
            <span>WINCHESTER, JOHN / HUNTER'S LOG</span>
            <b>PAGE {(casePage + 1).toString().padStart(2, "0")} OF 04</b>
            <em>PROPERTY OF J.W.</em>
          </div>
          <div className="case-list">
            {pageCases.map((c, i) => {
              const absoluteIndex = casePage * 4 + i;
              return (
                <article
                  className={openCase === absoluteIndex ? "case-open" : ""}
                  key={c.id}
                >
                  <button
                    onClick={() =>
                      setOpenCase(
                        openCase === absoluteIndex ? null : absoluteIndex,
                      )
                    }
                    aria-expanded={openCase === absoluteIndex}
                  >
                    <span>{c.id}</span>
                    <strong>{c.title}</strong>
                    <em>{c.entity}</em>
                    <b>{openCase === absoluteIndex ? "CLOSE" : "OPEN"}</b>
                  </button>
                  {openCase === absoluteIndex && (
                    <div className="case-detail">
                      <div className="case-meta">
                        <p>
                          EPISODE
                          <br />
                          <b>{c.episode}</b>
                        </p>
                        <p>
                          LOCATION
                          <br />
                          <b>{c.place}</b>
                        </p>
                        <p>
                          STATUS
                          <br />
                          <b>{c.status}</b>
                        </p>
                      </div>
                      <div className="case-report">
                        <span>FIELD REPORT / J.W.</span>
                        <p>{c.summary}</p>
                        <small>ENTRY {c.id} — TRANSCRIBED FROM THE FAMILY ARCHIVE</small>
                      </div>
                      <div className="entity-sketch" aria-hidden="true">
                        <div className="sigil"><i /><i /><i /></div>
                        <b>{c.entity}</b>
                        <span>ENTITY / CONFIRMED</span>
                      </div>
                      <div className="evidence-strip">
                        <b>EVIDENCE BAG</b>
                        <span>01 / EMF SPIKE</span><span>02 / WITNESS ACCOUNT</span><span>03 / LORE MATCH</span>
                      </div>
                      <div className="disposal-note">
                        <span>METHOD OF DISPOSAL</span>
                        <b>{getDisposal(c.entity)}</b>
                      </div>
                      <div className="lore-scribble">
                        SALT? IRON? FIRE?
                        <br />— verify before hunting
                      </div>
                      <a href={c.link} target="_blank" rel="noreferrer">
                        SOURCE / FULL RECORD ↗
                      </a>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
          <div className="case-pagination">
            <button onClick={() => changeCasePage((casePage + 3) % 4)}>
              ← PREV
            </button>
            {[0, 1, 2, 3].map((n) => (
              <button
                className={casePage === n ? "active" : ""}
                onClick={() => changeCasePage(n)}
                key={n}
              >
                {n + 1}
              </button>
            ))}
            <button onClick={() => changeCasePage((casePage + 1) % 4)}>
              NEXT →
            </button>
          </div>
          <div className="journal-stamp">
            CLASSIFIED
            <br />
            FAMILY BUSINESS
          </div>
        </div>
      </section>

      <section className="mixtape" id="mixtape">
        <div className="tape-head" data-reveal>
          <p>DEAN'S CASSETTE / VOL. 01</p>
          <h2>
            DRIVER PICKS
            <br />
            <i>THE MUSIC.</i>
          </h2>
          <div
            className={`cassette ${playing ? "spinning" : ""}`}
            role="button"
            tabIndex={0}
            onClick={() => setPlaying(!playing)}
            onKeyDown={(e) =>
              (e.key === "Enter" || e.key === " ") && setPlaying(!playing)
            }
            aria-label={playing ? "Pause cassette" : "Play cassette"}
          >
            <div className="tape-label">
              <span>WINCHESTER ROAD MIX</span>
              <strong>{tracks[tape][1]}</strong>
              <em>{tracks[tape][2]}</em>
            </div>
            <div className="tape-window">
              <i />
              <i />
            </div>
            <div className="tape-screws">• &nbsp; • &nbsp; • &nbsp; •</div>
          </div>
          <div className="tape-controls">
            <button
              onClick={() =>
                setTape((tape - 1 + tracks.length) % tracks.length)
              }
            >
              ← PREV
            </button>
            <button onClick={() => setPlaying(!playing)}>
              {playing ? "Ⅱ PAUSE" : "▶ PLAY"}
            </button>
            <button onClick={() => setTape((tape + 1) % tracks.length)}>
              NEXT →
            </button>
          </div>
          <div
            className={`equalizer ${playing ? "playing" : ""}`}
            aria-hidden="true"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <i key={n} />
            ))}
          </div>
        </div>
        <div className="tracks">
          {tracks.map((t, i) => (
            <button
              className={tape === i ? "selected" : ""}
              onClick={() => {
                setTape(i);
                setPlaying(true);
              }}
              key={t[0]}
            >
              <span>{t[0]}</span>
              <strong>{t[1]}</strong>
              <em>{t[2]}</em>
              <a
                href={t[3]}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                aria-label={`Open ${t[1]} in Spotify`}
              >
                ↗
              </a>
            </button>
          ))}
          <p>
            The cassette and reels are interactive. Spotify links open the real
            tracks—because licensing demons remain undefeated.
          </p>
        </div>
      </section>

      <section className="case-generator">
        <p>BORED BETWEEN HUNTS? / 20 POSSIBLE CASES</p>
        <h2>DRAW A CASE.</h2>
        <div className="case-count">
          CASE {(caseNo + 1).toString().padStart(2, "0")} / 20
        </div>
        <div className="case-slip" key={caseNo}>
          {cases[caseNo]}
        </div>
        <button onClick={() => setCaseNo((caseNo + 1) % cases.length)}>
          DRAW ANOTHER CASE ↻
        </button>
      </section>

      <section className="brother-code">
        <img
          src="https://www.tvguide.com/a/img/hub/2019/07/30/73b3ef6e-a645-47a6-9b9a-bad37c26aceb/190730-supernatural.jpg"
          alt="Dean and Sam Winchester leaning against the Impala"
        />
        <div>
          <p className="file-label">THE WINCHESTER RULEBOOK</p>
          <h2 data-reveal>
            FAMILY
            <br />
            DON'T END
            <br />
            <i>WITH BLOOD.</i>
          </h2>
          <ol>
            <li>
              <b>01</b>Always answer the phone.
            </li>
            <li>
              <b>02</b>Never trust a crossroads deal.
            </li>
            <li>
              <b>03</b>Salt first. Questions later.
            </li>
            <li>
              <b>04</b>If one brother dies, give it an episode.
            </li>
          </ol>
        </div>
      </section>

      <section className="sources" id="sources">
        <h2>SOURCES & IMAGE CREDITS</h2>
        <p>
          This is a non-commercial fan concept. Supernatural and its characters
          belong to their respective rights holders. Character and case notes
          synthesize on-screen canon and the sources linked throughout the
          archive; jokes and “stats” are fan-written.
        </p>
        <div>
          <a
            href="https://www.warnerbros.com/tv/supernatural-season-4"
            target="_blank"
            rel="noreferrer"
          >
            Warner Bros. — series overview ↗
          </a>
          <a
            href="https://en.wikipedia.org/wiki/Supernatural_(American_TV_series)"
            target="_blank"
            rel="noreferrer"
          >
            Series & Impala references ↗
          </a>
          <a
            href="https://en.wikipedia.org/wiki/Dean_Winchester"
            target="_blank"
            rel="noreferrer"
          >
            Dean skills & interests ↗
          </a>
          <a
            href="https://en.wikipedia.org/wiki/Sam_Winchester"
            target="_blank"
            rel="noreferrer"
          >
            Sam history & research skills ↗
          </a>
          <a
            href="https://www.pinterest.com/pin/855824735414553887/"
            target="_blank"
            rel="noreferrer"
          >
            Season 1 Sam promotional portrait ↗
          </a>
        <a
          href="https://nerdist.com/article/going-under-the-hood-of-supernaturals-impala/"
            target="_blank"
            rel="noreferrer"
          >
          Nerdist — Impala feature ↗
        </a>
        <a
          href="https://www.tvguide.com/news/supernatural-season-15-guide-cw/"
          target="_blank"
          rel="noreferrer"
        >
          TV Guide — Winchester brothers photo ↗
        </a>
        </div>
      </section>
      <footer>
        <div>THE WINCHESTER FILES</div>
        <p>MADE BY A FAN. PROTECTED BY A DEVIL'S TRAP.</p>
        <a href="#top">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}
