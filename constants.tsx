import { FBIcon, IGIcon, YTIcon } from "./components/svg";

interface NavigationItem {
  text: string;
  href: string;
}

export const navigationItems: NavigationItem[] = [
  { text: "Portfolio", href: "" },
  { text: "Kontakt", href: "" },
  { text: "O\u00A0mně", href: "/o-mne" },
  { text: "Vybavení", href: "" },
];

interface IconItem {
  svg: React.ReactNode;
  href: string;
}

export const iconItems: IconItem[] = [
  { svg: <IGIcon />, href: "" },
  { svg: <FBIcon />, href: "" },
  { svg: <YTIcon />, href: "" },
];

interface ImageObject {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const imageArray: ImageObject[] = [
  { src: "ct_sport.jpg", alt: "CT Sport", width: 198*0.8, height: 52*0.8 },
  { src: "enteria.jpg", alt: "Enteria", width: 162*0.8, height: 49*0.8 },
  { src: "euro_tour.jpg", alt: "Euro Tour", width: 82*0.8, height: 82*0.8 },
  { src: "kvis.jpg", alt: "Kvis", width: 172*0.8, height: 58*0.8 },
  { src: "ch_and_t.jpg", alt: "CH & T", width: 146*0.8, height: 84*0.8 },
  { src: "padlujte.jpg", alt: "Padlujte", width: 186*0.8, height: 73*0.8 },
];
