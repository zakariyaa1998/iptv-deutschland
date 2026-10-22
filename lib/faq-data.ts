export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqCategory = {
  category: string;
  items: FaqItem[];
};

export const faqCategories: FaqCategory[] = [
  {
    category: "Grundlagen",
    items: [
      {
        question: "Was bedeutet IPTV Deutschland genau?",
        answer:
          "IPTV steht für Internet Protocol Television. Das Fernsehsignal kommt nicht über Satellit, Antenne oder Kabelanschluss, sondern als Datenstrom über Ihre Internetleitung. Mit IPTV Deutschland empfangen Sie Live-Programme, Filme und Serien in einer App auf dem Gerät, das Sie ohnehin schon nutzen.",
      },
      {
        question: "Brauche ich eine Satellitenschüssel oder einen Kabelanschluss?",
        answer:
          "Nein. Sie benötigen nur einen Internetanschluss und ein kompatibles Gerät, zum Beispiel einen Smart TV, einen Streaming-Stick oder ein Smartphone. Schüssel, Receiver oder TV-Dose sind nicht nötig.",
      },
      {
        question: "Kann ich IPTV Deutschland auch außerhalb Deutschlands nutzen?",
        answer:
          "Der Zugang ist an die Internetverbindung gebunden, nicht an einen bestimmten Wohnort. Viele Kundinnen und Kunden nutzen ihn deshalb auch im Urlaub oder an einem Zweitwohnsitz. Wie gut das Bild läuft, hängt von der Leitung vor Ort ab.",
      },
    ],
  },
  {
    category: "Bestellung & Tarife",
    items: [
      {
        question: "Wie bestelle ich ein IPTV Abo?",
        answer:
          "Sie wählen auf der Tarifseite Laufzeit und Geräteanzahl und tippen auf den Bestell-Button. Dadurch öffnet sich WhatsApp mit einer vorbereiteten Nachricht. Wir antworten mit den Zahlungsinformationen und senden nach Zahlungseingang Ihre Zugangsdaten samt Anleitung.",
      },
      {
        question: "Verlängert sich mein Tarif automatisch?",
        answer:
          "Nein. Jeder Tarif endet mit Ablauf der gewählten Laufzeit. Wenn Sie weiterschauen möchten, schreiben Sie uns und wir verlängern den Zugang.",
      },
      {
        question: "Was ist der Unterschied zwischen den Tarifen?",
        answer:
          "Inhalt und Funktionen sind in jedem Tarif gleich. Die Tarife unterscheiden sich nur in der Laufzeit und darin, auf wie vielen Geräten Sie gleichzeitig schauen können.",
      },
      {
        question: "Wie bezahle ich?",
        answer:
          "Die verfügbaren Zahlungswege teilen wir Ihnen bei der Bestellung per WhatsApp mit.",
      },
    ],
  },
  {
    category: "Geräte & Einrichtung",
    items: [
      {
        question: "Auf welchen Geräten funktioniert IPTV Deutschland?",
        answer:
          "Auf Smart TVs von Samsung und LG, auf Geräten mit Android TV oder Google TV, auf dem Amazon Fire TV Stick, auf Apple TV, auf MAG-Boxen sowie auf Smartphones, Tablets und Computern.",
      },
      {
        question: "Welche App brauche ich?",
        answer:
          "Das hängt vom Gerät ab. Mit den Zugangsdaten bekommen Sie eine passende App-Empfehlung und eine Anleitung für genau Ihr Gerät. Einen Überblick finden Sie auf unserer Seite zum Einrichten.",
      },
      {
        question: "Mein Fernseher ist älter. Geht das trotzdem?",
        answer:
          "Ja, in den meisten Fällen. Wenn auf dem Fernseher keine passende App läuft, schließen Sie einfach einen Streaming-Stick oder eine Android-Box an den HDMI-Eingang an.",
      },
    ],
  },
  {
    category: "Wiedergabe & Hilfe",
    items: [
      {
        question: "Das Bild stockt. Was kann ich tun?",
        answer:
          "Verbinden Sie das Gerät nach Möglichkeit per LAN-Kabel statt WLAN, schließen Sie andere Downloads im Heimnetz und starten Sie Router und App neu. Hilft das nicht, schreiben Sie uns kurz, auf welchem Gerät und bei welchem Programm das Problem auftritt.",
      },
      {
        question: "Ein Sender lädt nicht. Woran liegt das?",
        answer:
          "Oft hilft es, die Senderliste in der App neu zu laden oder die App einmal komplett zu schließen. Bleibt der Sender schwarz, melden Sie sich bei uns, damit wir den Eintrag prüfen können.",
      },
      {
        question: "Wie erreiche ich den Support?",
        answer:
          "Per WhatsApp oder E-Mail. Am schnellsten geht es über WhatsApp, weil Sie dort direkt einen Screenshot mitschicken können.",
      },
    ],
  },
];

export const allFaqItems = faqCategories.flatMap((category) => category.items);
