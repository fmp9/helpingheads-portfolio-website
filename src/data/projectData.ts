import type { categoryPreview } from "@/interfaces/projectInterface";
import GestPrev from "../images/Gestaltungen/adidasmessestand/adidas1.png";
import LichtPrev from "../images/Licht/Lichterweg/IMG_8413.jpg";
import ProjPrev from "../images/Projektionen/Mapping/mapping1.jpg";
import SondPrev from "../images/Sonderkonstruktionen/LaTraviata/2.jpg";
import WatPrev from "../images/Wasser/Wasserwand/ww-2.jpg";

export const categories: categoryPreview[] = [
  {
    category: "Gestaltungen",
    info: "Wir gestalten kreative Events, Landschaften und Ausstellungen mit Kunst, Licht und interaktiven Elementen.",
    src: GestPrev,
    alt: "Adidas Messestand",
  },
  {
    category: "Licht",
    info: "Mit innovativer Lichttechnik schaffen wir stimmungsvolle Inszenierungen, die Menschen begeistern und verbinden.",
    src: LichtPrev,
    alt: "Leuchtturm Podersdorf",
  },
  {
    category: "Projektionen",
    info: "Unsere Projektionen verwandeln Gebäude, Landschaften und Flächen in eindrucksvolle visuelle Erlebnisse.",
    src: ProjPrev,
    alt: "Mapping",
  },
  {
    category: "Sonderkonstruktionen",
    info: "Wir realisieren individuelle Sonderkonstruktionen, die durch Kreativität und Einzigartigkeit überzeugen.",
    src: SondPrev,
    alt: "La Traviata",
  },
  {
    category: "Wasser",
    info: "Mit Wasser als Gestaltungselement erschaffen wir faszinierende Installationen aus Licht, Bewegung und Klang.",
    src: WatPrev,
    alt: "Wasserwand",
  },
];
