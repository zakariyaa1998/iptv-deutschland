import type { FaqItem } from "./faq-data";

export type BlogSection = {
  /** Anchor id for the table of contents. */
  id: string;
  heading: string;
  paragraphs: string[];
  list?: string[];
};

export type BlogPost = {
  slug: string;
  /** Primary search term — must appear in title, H1, description and intro. */
  keyword: string;
  title: string;
  /** Short <title> for search results (brand suffix is added by the layout). */
  metaTitle: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  image: { src: string; alt: string };
  intro: string;
  sections: BlogSection[];
  faq: FaqItem[];
  /** Landing page that best continues the topic. */
  related: { href: string; label: string };
};

// Three long-form articles, each targeting one search term that no landing page
// owns (see docs/seo/keyword-map.md) and that the operator's other sites don't cover
// with the same angle. No invented numbers, no superiority claims.
export const blogPosts: BlogPost[] = [
  {
    slug: "kabelfernsehen-alternative",
    keyword: "Kabelfernsehen Alternative",
    title: "Kabelfernsehen-Alternative: Fernsehen ohne Kabelanschluss im Überblick",
    metaTitle: "Kabelfernsehen-Alternative: 4 Wege im Vergleich",
    description:
      "Kabelfernsehen-Alternative nach dem Ende des Nebenkostenprivilegs: Antenne, Satellit, eigener Kabelvertrag oder IPTV im Vergleich.",
    publishedAt: "2026-10-23",
    image: {
      src: "/images/tv-box-wohnwand.jpg",
      alt: "TV-Box als Kabelfernsehen-Alternative auf einem Lowboard unter dem Fernseher",
    },
    intro:
      "Viele Mieter haben jahrelang Kabelfernsehen über die Nebenkosten bezahlt, ohne sich darum zu kümmern. Seit Juli 2024 ist das in der Regel vorbei, und die Frage nach einer Kabelfernsehen-Alternative landet bei jedem Haushalt selbst. Dieser Überblick zeigt die vier gängigen Wege zum Fernsehbild und für wen sich welcher eignet.",
    sections: [
      {
        id: "nebenkostenprivileg",
        heading: "Warum plötzlich alle eine Kabelfernsehen-Alternative suchen",
        paragraphs: [
          "Bis Mitte 2024 durften Vermieter die Kosten für einen Kabel-TV-Sammelvertrag auf die Mieter umlegen. Mit der Reform des Telekommunikationsgesetzes ist dieses sogenannte Nebenkostenprivileg nach einer Übergangsfrist zum 30. Juni 2024 ausgelaufen.",
          "Seitdem entscheidet jeder Haushalt selbst, wie er fernsieht. Wer nichts unternimmt, hat unter Umständen gar keinen Empfang mehr oder zahlt einen neuen Einzelvertrag, ohne Alternativen geprüft zu haben. Ein kurzer Vergleich lohnt sich deshalb.",
        ],
      },
      {
        id: "antenne",
        heading: "Option 1: Antennenfernsehen über DVB-T2 HD",
        paragraphs: [
          "Über eine Zimmer- oder Dachantenne empfangen Sie Programme terrestrisch. Die öffentlich-rechtlichen Sender sind dabei frei empfangbar, private Sender in HD erfordern in der Regel ein kostenpflichtiges Zusatzpaket.",
          "Der Vorteil ist die einfache Technik. Der Nachteil: Die Programmauswahl ist begrenzter als bei anderen Wegen, und in manchen Regionen oder in Innenräumen ist der Empfang schwach.",
        ],
      },
      {
        id: "satellit",
        heading: "Option 2: Satellitenfernsehen",
        paragraphs: [
          "Mit einer Satellitenschüssel und einem Receiver empfangen Sie eine große Zahl an Programmen. Die öffentlich-rechtlichen Sender gibt es auch hier frei in HD, private Sender in HD meist nur gegen Aufpreis.",
          "In Mietwohnungen scheitert Satellit allerdings oft an der Praxis: Die Schüssel braucht freie Sicht nach Süden, und für die Montage an Fassade oder Balkon ist häufig die Zustimmung des Vermieters nötig.",
        ],
      },
      {
        id: "kabelvertrag",
        heading: "Option 3: Ein eigener Kabelvertrag",
        paragraphs: [
          "Wenn die Kabeldose in der Wohnung weiter aktiv ist, können Sie direkt beim Kabelnetzbetreiber einen Einzelvertrag abschließen. Technisch ändert sich dann nichts, Sie zahlen nur selbst statt über die Nebenkosten.",
          "Achten Sie dabei auf Mindestlaufzeit und Kündigungsfristen. Bei einem Umzug ist der Vertrag außerdem an die Verfügbarkeit an der neuen Adresse gebunden.",
        ],
      },
      {
        id: "iptv",
        heading: "Option 4: IPTV über die Internetleitung",
        paragraphs: [
          "Bei IPTV kommt das Fernsehbild als Datenstrom über den Internetanschluss, den die meisten Haushalte ohnehin haben. Sie brauchen weder Schüssel noch Antenne noch eine aktive Kabeldose. Eine App auf Smart TV, Streaming-Stick oder TV-Box genügt.",
          "Neben dem Live-Programm stehen meist auch Filme und Serien zum Abrufen bereit. Und weil der Zugang am Internet hängt und nicht an der Wohnung, nehmen Sie ihn bei einem Umzug einfach mit.",
          "Die wichtigste Voraussetzung ist eine stabile Internetverbindung. Wie Sie Ihr Heimnetz dafür vorbereiten, erklärt unser Artikel zum WLAN für IPTV.",
        ],
      },
      {
        id: "vergleich",
        heading: "Welche Kabelfernsehen-Alternative passt zu wem?",
        paragraphs: ["Eine grobe Orientierung, je nach Wohnsituation:"],
        list: [
          "Wenig Programme, einfache Technik, keine Internetleitung: Antenne über DVB-T2 HD.",
          "Eigenes Haus oder Balkon mit freier Südsicht: Satellit.",
          "Alles soll bleiben wie bisher und die Kabeldose ist aktiv: eigener Kabelvertrag.",
          "Internetanschluss vorhanden, mehrere Bildschirme, Filme und Serien gewünscht, häufige Umzüge: IPTV.",
        ],
      },
      {
        id: "kosten",
        heading: "Worauf es bei den Kosten ankommt",
        paragraphs: [
          "Die Kosten einer Kabelfernsehen-Alternative bestehen meist aus zwei Teilen: einmaliger Technik und laufenden Gebühren. Bei Antenne und Satellit fallen Geräte und gegebenenfalls Montage an, für private Sender in HD kommt ein Zusatzpaket hinzu. Beim eigenen Kabelvertrag zahlen Sie eine monatliche Gebühr, oft mit Mindestlaufzeit.",
          "Bei IPTV entfallen Schüssel, Antenne und Kabeldose. Sie zahlen für die gewählte Laufzeit, und wenn Ihr Fernseher keine passende App hat, kommt einmalig ein Streaming-Stick dazu. Vergleichen Sie am besten die Gesamtkosten über ein bis zwei Jahre und nicht nur den Monatspreis.",
        ],
      },
      {
        id: "fehler",
        heading: "Häufige Fehler beim Wechsel",
        paragraphs: [
          "Diese Punkte sorgen beim Umstieg am häufigsten für Ärger:",
        ],
        list: [
          "Den alten Vertrag kündigen, bevor der neue Empfangsweg getestet ist.",
          "Die Zahl der Fernseher im Haushalt vergessen und nur für ein Gerät planen.",
          "Bei Satellit die Montage ohne Rücksprache mit dem Vermieter beginnen.",
          "Bei IPTV den Fernseher in einem Raum mit schwachem WLAN aufstellen, ohne das vorher zu prüfen.",
        ],
      },
      {
        id: "umstieg",
        heading: "So gelingt der Umstieg ohne Fernsehpause",
        paragraphs: [
          "Wenn Sie den Wechsel planen, prüfen Sie zuerst, ob Ihr Fernseher die nötige App unterstützt oder ob ein Streaming-Stick sinnvoll ist. Danach können Sie den neuen Empfangsweg in Ruhe ausprobieren, bevor Sie einen alten Vertrag kündigen.",
          "Bei IPTV Deutschland ist das unkompliziert: Sie wählen Laufzeit und Geräteanzahl, bestellen per WhatsApp und erhalten Zugangsdaten samt Anleitung für Ihr Gerät.",
        ],
      },
    ],
    faq: [
      {
        question: "Muss ich nach dem Ende des Nebenkostenprivilegs etwas tun?",
        answer:
          "Wenn Ihr Kabelfernsehen bisher über die Nebenkosten lief, sollten Sie prüfen, ob Ihr Anschluss noch aktiv ist und wie Sie künftig fernsehen möchten. Ohne eigene Entscheidung kann der Empfang wegfallen.",
      },
      {
        question: "Brauche ich für IPTV einen besonderen Internetvertrag?",
        answer:
          "Nein. Ein gewöhnlicher Breitbandanschluss genügt in den meisten Fällen. Wichtiger als die maximale Geschwindigkeit ist eine gleichmäßig stabile Verbindung.",
      },
      {
        question: "Entfällt mit einer Kabelfernsehen-Alternative der Rundfunkbeitrag?",
        answer:
          "Nein. Der Rundfunkbeitrag wird pro Wohnung erhoben, unabhängig vom Empfangsweg und davon, ob Sie überhaupt fernsehen.",
      },
    ],
    related: { href: "/deutsches-fernsehen-iptv", label: "Deutsches Fernsehen per IPTV im Detail" },
  },
  {
    slug: "deutsches-fernsehen-im-ausland",
    keyword: "deutsches Fernsehen im Ausland",
    title: "Deutsches Fernsehen im Ausland: so schauen Sie TV aus der Heimat",
    metaTitle: "Deutsches Fernsehen im Ausland schauen",
    description:
      "Deutsches Fernsehen im Ausland schauen, im Urlaub, im Ferienhaus oder nach dem Auswandern: welche Wege es gibt und wo die Grenzen liegen.",
    publishedAt: "2026-10-23",
    image: {
      src: "/images/mediathek-fernseher.jpg",
      alt: "Fernseher in einer Ferienwohnung, auf dem deutsches Fernsehen im Ausland läuft",
    },
    intro:
      "Ob Wintermonate in Spanien, Ferienhaus in Dänemark oder ein neuer Job im Ausland: Viele möchten ihre gewohnten Sendungen nicht missen. Deutsches Fernsehen im Ausland zu schauen ist heute einfacher als früher. Es gibt aber Unterschiede, die Sie kennen sollten, bevor die Koffer gepackt sind.",
    sections: [
      {
        id: "warum-schwierig",
        heading: "Warum deutsches Fernsehen im Ausland nicht automatisch funktioniert",
        paragraphs: [
          "Sender und Streamingdienste besitzen ihre Übertragungsrechte oft nur für bestimmte Länder. Deshalb sind manche Inhalte außerhalb Deutschlands gesperrt, auch in den Mediatheken der öffentlich-rechtlichen Sender. Das betrifft vor allem Spielfilme, ausländische Serien und viele Sportübertragungen.",
          "Antennenfernsehen endet ohnehin an der Grenze, und ein deutscher Kabelanschluss lässt sich nicht mitnehmen. Es bleiben also vor allem Satellit, Mediatheken und IPTV.",
        ],
      },
      {
        id: "satellit",
        heading: "Weg 1: Satellit im Ausland",
        paragraphs: [
          "In vielen Teilen Europas lassen sich deutsche Programme per Satellit empfangen. Je weiter Sie sich von Mitteleuropa entfernen, desto größer muss die Schüssel sein, und in manchen Regionen klappt es gar nicht.",
          "Für ein Ferienhaus kann Satellit eine Lösung sein. Für kurze Reisen oder eine Mietwohnung ist der Aufwand mit Schüssel, Ausrichtung und Receiver meist zu groß.",
        ],
      },
      {
        id: "mediatheken",
        heading: "Weg 2: Mediatheken und Streamingdienste",
        paragraphs: [
          "Die Mediatheken der Sender sind auch im Ausland erreichbar, zeigen dort aber nicht alle Inhalte. Nachrichten und viele Eigenproduktionen laufen meist, lizenzierte Filme oder Sportrechte oft nicht.",
          "Für kostenpflichtige Streaming-Abos gilt innerhalb der EU die Portabilitätsverordnung: Wer sich vorübergehend in einem anderen EU-Land aufhält, darf seine bezahlten Abos in der Regel weiter nutzen. Für dauerhaft im Ausland lebende Personen gilt das nicht.",
        ],
      },
      {
        id: "iptv",
        heading: "Weg 3: IPTV über das Internet",
        paragraphs: [
          "Bei IPTV ist der Zugang an Ihre Zugangsdaten gebunden, nicht an eine Schüssel oder eine Kabeldose. Viele nehmen deshalb ihren Stick einfach mit oder installieren die App auf dem Fernseher in der Ferienwohnung.",
          "Live-Programm und Abruf-Inhalte liegen dabei in einer App. Ob das Bild ruhig läuft, hängt allerdings stark vom Internet vor Ort ab, und das ist in Ferienunterkünften sehr unterschiedlich.",
        ],
      },
      {
        id: "checkliste",
        heading: "Checkliste vor der Abreise",
        paragraphs: ["Damit deutsches Fernsehen im Ausland am ersten Abend funktioniert:"],
        list: [
          "Streaming-Stick, Netzteil und Fernbedienung einpacken. Ein Stick ist unabhängig vom Fernseher vor Ort.",
          "Zugangsdaten und WLAN-Zugang der Unterkunft griffbereit haben.",
          "Bei der Buchung nach der Internetverbindung fragen, wenn Fernsehen wichtig ist.",
          "Einen Reiseadapter für die Steckdose mitnehmen, falls nötig.",
          "Bei mobilem Internet das Datenvolumen im Blick behalten und notfalls die Bildqualität reduzieren.",
        ],
      },
      {
        id: "zeitverschiebung",
        heading: "Live-Sendungen und Zeitverschiebung",
        paragraphs: [
          "Wer weit reist, landet schnell in einer anderen Zeitzone. Die Abendnachrichten laufen dann am Nachmittag oder mitten in der Nacht. Hier zeigt sich der Vorteil von Abruf-Inhalten: Filme und Serien starten Sie, wann es zu Ihrem Tag passt.",
          "Für Live-Sport lohnt sich ein Blick in den Programmführer der App. Dort sehen Sie die Startzeiten und können den Abend entsprechend planen.",
        ],
      },
      {
        id: "auswandern",
        heading: "Deutsches Fernsehen nach dem Auswandern",
        paragraphs: [
          "Wer dauerhaft ins Ausland zieht, hat andere Bedürfnisse als ein Urlauber. Der Fernseher bleibt nicht für zwei Wochen, sondern für Jahre in der neuen Wohnung. Ein fest eingerichteter Streaming-Stick mit stabilem Internetanschluss ist dann die bequemste Lösung.",
          "Beachten Sie, dass die EU-Portabilitätsverordnung nur für vorübergehende Aufenthalte gilt. Für dauerhaft im Ausland lebende Menschen kommt es auf die Bedingungen des jeweiligen Angebots an. Fragen Sie im Zweifel vor der Bestellung nach.",
        ],
      },
      {
        id: "internet-vor-ort",
        heading: "Wenn das Internet in der Unterkunft schwach ist",
        paragraphs: [
          "Hotel- und Ferienhaus-WLANs teilen sich viele Gäste. Abends, wenn alle streamen, wird es oft eng. Ein Platz näher am Router, ein kurzes LAN-Kabel oder eine niedrigere Qualitätsstufe in der App helfen oft schon.",
          "Weitere Tipps zur Verbindung finden Sie in unserem Artikel zum WLAN für IPTV, der auch unterwegs gilt.",
        ],
      },
    ],
    faq: [
      {
        question: "Kann ich mein IPTV Abo im Urlaub nutzen?",
        answer:
          "Der Zugang ist an Ihre Zugangsdaten gebunden, nicht an einen Ort. Entscheidend ist, dass vor Ort eine ausreichend stabile Internetverbindung zur Verfügung steht.",
      },
      {
        question: "Warum sind manche Sendungen in der Mediathek im Ausland gesperrt?",
        answer:
          "Die Sender haben für viele Filme, Serien und Sportereignisse nur Rechte für Deutschland erworben. Außerhalb des Lizenzgebiets dürfen sie diese Inhalte nicht zeigen.",
      },
      {
        question: "Brauche ich im Ausland ein anderes Gerät?",
        answer:
          "Nein. Am einfachsten ist ein Streaming-Stick, den Sie zu Hause schon eingerichtet haben. Er funktioniert an jedem Fernseher mit HDMI-Anschluss.",
      },
    ],
    related: { href: "/iptv-einrichten", label: "Stick und App vor der Reise einrichten" },
  },
  {
    slug: "wlan-fuer-iptv",
    keyword: "WLAN für IPTV",
    title: "WLAN für IPTV verbessern: Checkliste für ein ruhiges Fernsehbild",
    metaTitle: "WLAN für IPTV verbessern: Checkliste",
    description:
      "Das Bild stockt? So machen Sie Ihr WLAN fit für IPTV: Router-Standort, 2,4 oder 5 GHz, Mesh, Powerline und LAN-Kabel. Eine praktische Checkliste für zu Hause.",
    publishedAt: "2026-10-23",
    image: {
      src: "/images/fernbedienung-streaming.jpg",
      alt: "Fernbedienung vor einem Fernseher, der über WLAN für IPTV verbunden ist",
    },
    intro:
      "Bleibt das Bild hängen oder wird plötzlich unscharf, liegt das selten am Fernseher. Meist ist das WLAN der Engpass, also die Strecke zwischen Router und Gerät. Gutes WLAN für IPTV ist kein Hexenwerk. Mit dieser Checkliste prüfen Sie Schritt für Schritt, wo es hakt.",
    sections: [
      {
        id: "warum-wlan",
        heading: "Warum das WLAN für IPTV so wichtig ist",
        paragraphs: [
          "Live-Fernsehen verzeiht keine Pausen. Beim Surfen fällt eine kurze Unterbrechung kaum auf, beim Fußballspiel sofort. IPTV braucht deshalb vor allem eine gleichmäßige Verbindung ohne Aussetzer, nicht unbedingt die höchste Geschwindigkeit.",
          "Viele Störungen entstehen im eigenen Zuhause: durch Wände, Entfernung, Nachbarnetze oder viele Geräte gleichzeitig. Genau dort können Sie selbst ansetzen.",
        ],
      },
      {
        id: "standort",
        heading: "1. Den Router-Standort prüfen",
        paragraphs: [
          "Ein Router im Flurschrank, hinter dem Fernseher oder auf dem Boden muss durch Möbel und Wände funken. Jede Hürde schwächt das Signal, Beton und Metall besonders stark.",
          "Besser ist ein freier, erhöhter Platz, möglichst zentral in der Wohnung. Schon ein Umzug des Routers um wenige Meter kann viel bewirken.",
        ],
      },
      {
        id: "funkband",
        heading: "2. Das passende Funkband wählen",
        paragraphs: [
          "Die meisten Router funken auf 2,4 GHz und 5 GHz, neuere auch auf 6 GHz. Das 2,4-GHz-Band reicht weit, ist in Mehrfamilienhäusern aber oft durch viele Nachbarnetze belegt. Das 5-GHz-Band ist meist schneller und ruhiger, hat aber eine geringere Reichweite.",
          "Steht der Fernseher im selben Raum oder nebenan, ist 5 GHz in der Regel die bessere Wahl. Viele Router erlauben getrennte Netznamen für beide Bänder, damit Sie Fernseher oder Stick gezielt verbinden können.",
        ],
      },
      {
        id: "reichweite",
        heading: "3. Wenn das Signal nicht bis zum Fernseher reicht",
        paragraphs: ["Für entfernte Räume gibt es drei bewährte Wege:"],
        list: [
          "LAN-Kabel: die stabilste Verbindung. Flachkabel lassen sich unauffällig an der Fußleiste verlegen.",
          "Mesh-WLAN: mehrere Zugangspunkte bilden ein gemeinsames Netz und versorgen auch größere Wohnungen und mehrere Etagen.",
          "Powerline-Adapter: Das Netzwerksignal läuft über die Stromleitung. Wie gut das funktioniert, hängt von der Elektroinstallation ab.",
        ],
      },
      {
        id: "last",
        heading: "4. Die Last im Heimnetz verringern",
        paragraphs: [
          "Wenn parallel große Downloads, Cloud-Backups oder Konsolen-Updates laufen, bleibt für das Fernsehbild weniger übrig. Viele Router bieten eine Priorisierung, mit der Sie Fernseher oder Stick bevorzugen können.",
          "Melden Sie außerdem Geräte ab, die Sie nicht nutzen, und halten Sie die Router-Firmware aktuell.",
        ],
      },
      {
        id: "geraet",
        heading: "5. Das Streaming-Gerät nicht vergessen",
        paragraphs: [
          "Auch das Gerät selbst spielt eine Rolle. Ältere Smart TVs haben oft schwächere WLAN-Module als aktuelle Streaming-Sticks. Ein Neustart von Router und Gerät räumt außerdem den Zwischenspeicher auf.",
          "Läuft das Bild per LAN-Kabel direkt am Router ruhig, über WLAN aber nicht, wissen Sie sicher: Das WLAN ist die Ursache.",
        ],
      },
      {
        id: "router-einstellungen",
        heading: "Router-Einstellungen, die oft helfen",
        paragraphs: [
          "Ein Blick in die Benutzeroberfläche des Routers lohnt sich. Diese Einstellungen gibt es bei vielen Modellen:",
        ],
        list: [
          "Automatische Kanalwahl: Der Router sucht selbst einen weniger belegten Funkkanal.",
          "Band Steering: Geräte werden automatisch auf das passendere Funkband gelenkt. Wenn ein Gerät damit Probleme hat, kann es helfen, die Funktion abzuschalten und das Band manuell zu wählen.",
          "Priorisierung (QoS): Fernseher oder Stick bekommen Vorrang vor anderen Geräten.",
          "Firmware-Updates: Neue Versionen beheben oft Fehler und verbessern die Stabilität.",
        ],
      },
      {
        id: "mesh-repeater",
        heading: "Mesh oder Repeater: was ist der Unterschied?",
        paragraphs: [
          "Ein einfacher Repeater empfängt das WLAN-Signal und sendet es weiter. Das erhöht die Reichweite, halbiert bei vielen Modellen aber die verfügbare Datenrate, weil das Gerät gleichzeitig empfängt und sendet.",
          "Ein Mesh-System besteht aus aufeinander abgestimmten Zugangspunkten, die untereinander oft eine eigene Funkverbindung nutzen. Ihre Geräte wechseln automatisch zum stärksten Punkt. Für Wohnungen mit mehreren Räumen oder Etagen ist Mesh meist die angenehmere Lösung, für einen einzelnen Funkloch-Raum reicht oft ein Repeater oder ein LAN-Kabel.",
        ],
      },
      {
        id: "test",
        heading: "So testen Sie, wo das Problem liegt",
        paragraphs: [
          "Schauen Sie dasselbe Programm einmal per WLAN im gewohnten Raum und einmal direkt neben dem Router. Hängt es nur im Wohnzimmer, liegt es an der Reichweite. Hängt es überall, liegt die Ursache vermutlich nicht im Heimnetz.",
          "In diesem Fall schreiben Sie uns kurz, auf welchem Gerät und bei welchem Programm es passiert. Dann können wir gezielt nachsehen.",
        ],
      },
    ],
    faq: [
      {
        question: "Ist LAN für IPTV besser als WLAN?",
        answer:
          "Ein LAN-Kabel ist unempfindlicher gegen Störungen und deshalb die stabilste Wahl. Gut eingerichtetes WLAN reicht in vielen Wohnungen aber ebenfalls aus.",
      },
      {
        question: "Hilft ein schnellerer Internetvertrag gegen ein stockendes Bild?",
        answer:
          "Nicht unbedingt. Oft liegt das Problem im Heimnetz zwischen Router und Fernseher. Prüfen Sie zuerst Standort, Funkband und Reichweite, bevor Sie den Vertrag wechseln.",
      },
      {
        question: "Sollte ich 2,4 GHz oder 5 GHz für IPTV nutzen?",
        answer:
          "Bei kurzer Entfernung zum Router ist 5 GHz meist stabiler und schneller. Bei großer Entfernung oder vielen Wänden kann 2,4 GHz besser durchkommen.",
      },
    ],
    related: { href: "/fragen-antworten", label: "Weitere Antworten zu Bild und Wiedergabe" },
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

/** Rough reading time from the article's word count (~200 words per minute). */
export function readingMinutes(post: BlogPost): number {
  const text = [post.intro, ...post.sections.flatMap((s) => [s.heading, ...s.paragraphs, ...(s.list ?? [])])].join(" ");
  return Math.max(1, Math.round(text.split(/\s+/).length / 200));
}
