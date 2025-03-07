import { FBIcon, IGIcon, YTIcon } from "./components/svg";


interface NavigationItem {
  text: string;
  href: string;
}

export const navigationItems: NavigationItem[] = [
  { text: "Domů", href: "/" },
  { text: "O\u00A0mně", href: "/o-mne" },
  { text: "Portfolio", href: "/portfolio" },
  { text: "Reference", href: "/#reference" },
  { text: "Vybavení", href: "/vybaveni" },
  { text: "Kontakt", href: "/#kontaktovat" },
];

interface IconItem {
  svg: React.ReactNode;
  href: string;
  label: string
}

export const iconItems: IconItem[] = [
  { svg: <IGIcon />, href: "https://www.instagram.com/vitek_petrzilek/", label: 'Instagram'},
  { svg: <YTIcon />, href: "https://www.youtube.com/channel/UCC4sSRYI8zxYVosNZUDJBQA", label: 'Youtube'},
  { svg: <FBIcon />, href: "https://www.facebook.com/profile.php?id=61554820498497&is_tour_dismissed=true", label: 'Facebook'},
];

interface ImageObject {
  component: StaticImageData;
  href: string
  alt: string;
  width: number;
  height: number;
}

import ctSportImage from "./public/ct_sport.jpg";
import enteriaImage from "./public/enteria.jpg";
import euroTourImage from "./public/euro_tour.jpg";
import kvisImage from "./public/kvis.jpg";
import chAndTImage from "./public/ch_and_t.jpg";
import padlujteImage from "./public/padlujte.jpg";

export const imageArray: ImageObject[] = [
  { component: ctSportImage, href: 'https://sport.ceskatelevize.cz/', alt: "CT Sport", width: 198 * 0.8, height: 52 * 0.8 },
  { component: enteriaImage, href: 'https://www.enteria.cz/', alt: "Enteria", width: 162 * 0.8, height: 49 * 0.8 },
  { component: euroTourImage, href: 'https://www.eurotoursup.net/', alt: "Euro Tour", width: 82 * 0.8, height: 82 * 0.8 },
  { component: kvisImage, href: 'https://www.kvis.cz/', alt: "Kvis", width: 172 * 0.8, height: 58 * 0.8 },
  { component: chAndTImage, href: 'https://www.cht-pce.cz/', alt: "CH & T", width: 146 * 0.8, height: 84 * 0.8 },
  { component: padlujteImage, href: 'https://www.padlujte.cz/', alt: "Padlujte", width: 186 * 0.8, height: 73 * 0.8 },
];



import image1 from "./public/equipment/1.jpg";
import image2 from "./public/equipment/2.jpg";
import image3 from "./public/equipment/3.jpg";
import image4 from "./public/equipment/4.jpg";
import image5 from "./public/equipment/5.jpg";
import image6 from "./public/equipment/6.jpg";
import image7 from "./public/equipment/7.jpg";
import image8 from "./public/equipment/8.jpg";
import image9 from "./public/equipment/9.jpg";
import image10 from "./public/equipment/10.jpg";
import image11 from "./public/equipment/11.jpg";
import image12 from "./public/equipment/12.jpg";
import image13 from "./public/equipment/13.jpg";
import image14 from "./public/equipment/14.jpg";
import image15 from "./public/equipment/15.jpg";
import image16 from "./public/equipment/16.jpg";
import amaran_f22c from "./public/equipment/amaran_f22.jpg";
import nanlite_pavotube_6c_ii from "./public/equipment/Nanlite_Pavotube_6c_ii.jpg";
import rode_lavalier_2 from "./public/equipment/rode_lavalier_2.jpg";
import { StaticImageData } from "next/image";

export const pieces = [
  {
    title: "Sony A7S III",
    description:
      "Špičková videokamera a kamera pro všeobecné použití. Excelentní výkon v low-light situacích a geniální stabilizace senzoru.",
    image: image1,
    imageAlt: "Sony A7S III",
  },
  {
    title: "Sony FE 24-105/4,0 G OSS SEL",
    description: "Univerzální zoomovatelný objektiv.",
    image: image2,
    imageAlt: "Sony FE 24-105/4,0 G OSS SEL",
  },
  {
    title: "Sony Zeiss 35mm f1.4",
    description:
      "Vysoce ostrý a kvalitní nezoomovatelný objektiv s velkou světelností. Idealní do podmínek s nedostatkem světla.",
    image: image3,
    imageAlt: "Sony Zeiss 35mm f1.4",
  },
  {
    title: "Sony FE 50mm f/1,8",
    description:
      "Standardní fixní objektiv s velkou světelností. Idealní do podmínek s nedostatkem světla.",
    image: image4,
    imageAlt: "Sony FE 50mm f/1,8",
  },
  {
    title: "DJI Mavic 2 Pro",
    description: "Dron pro skvělé záběry a fotky z výšky.",
    image: image5,
    imageAlt: "DJI Mavic 2 Pro",
  },
  {
    title: "Atomos Ninja V",
    description:
      "Náhledový monitor s vysokým jasem. V kombinaci s mojí kamerou umožňuje záznam do 12-bitového ProRes RAW formátu.",
    image: image6,
    imageAlt: "Atomos Ninja V",
  },
  {
    title: "DJI Ronin RS 2",
    description: "Stabilizátor pro plynulé záběry.",
    image: image7,
    imageAlt: "DJI Ronin RS 2",
  },
  {
    title: "GoPro HERO10",
    description:
      "Díky nižší úrovni stabilizace působí záběry velmi akčně.",
    image: image8,
    imageAlt: "GoPro HERO10",
  },
  {
    title: "GoPro HERO6",
    description:
      "Díky nižší úrovni stabilizace, záběry působí velmi výjimečně a akčně.",
    image: image9,
    imageAlt: "GoPro HERO6",
  },
  {
    title: "RODE VideoMic NTG",
    description: "Vysoce kvalitní směrový mikrofon.",
    image: image10,
    imageAlt: "RODE VideoMic NTG",
  },
  {
    title: "RODE Wireless GO II",
    description:
      "Kvalitní sada 2 bezdrátových mikrofonů pro nahrávání rozhovorů.",
    image: image11,
    imageAlt: "RODE Wireless GO II",
  },
  {
    title: "RODE Lavalier",
    description: "Malý kabelový mikrofon pro zapojení do přijímače.",
    image: image12,
    imageAlt: "RODE Lavalier",
  },
  {
    title: "RODE Lavalier II",
    description:
      "Malý kabelový mikrofon pro zapojení do přijímače.",
    image: rode_lavalier_2,
    imageAlt: "RODE Lavalier II",
  },
  {
    title: "Amaran f22c",
    description:
      "Výkonné barevné světlo. Díky jeho malé váze není problém ho umístit prakticky kamkoliv.",
    image: amaran_f22c,
    imageAlt: "Amaran f22c",
  },
  {
    title: "Nanlite pavotube II 6c",
    description:
      "Praktické barevné trubicové světlo s integrovanou baterií. Hodí se na rychlé dosvětlování záběrů.",
    image: nanlite_pavotube_6c_ii,
    imageAlt: "Nanlite pavotube II 6c",
  },
  {
    title: "Hoya Variable ND3-400 77 mm",
    description:
      "Variabilní filtr omezující světlo pro správné nastavení závěrky kamery.",
    image: image13,
    imageAlt: "Hoya Variable ND3-400 77 mm",
  },
  {
    title: "Haida NanoPro Black Mist 1/4",
    description: "Filtr zjemňující obraz. Vytváří tzv. jemný snový vzhled.",
    image: image14,
    imageAlt: "Haida NanoPro Black Mist 1/4",
  },
  {
    title: "Linkstar 5v1 FR-90120W",
    description:
      "Multifunkční odrazná deska.  Slouží k přisvěcování, zjemňování nebo ubírání světla.",
    image: image15,
    imageAlt: "Linkstar 5v1 FR-90120W",
  },
  {
    title: "Aputure Amaran AL-F7",
    description:
      "Malé ale výkoné světlo na baterie pro rychlé přisvícení záběrů.",
    image: image16,
    imageAlt: "Aputure Amaran AL-F7",
  },
  
];

import Thajsko from "./public/bg/TOP3_thajsko.jpg";
import Vyrava from "./public/bg/TOP3_vyrava.jpg";
import Kolobreh from "./public/bg/TOP3_kolobreh.jpg";
import CT from "./public/bg/CT.jpg";
import Dalesice from "./public/bg/Dalesice.jpg";
import Bezdrev from "./public/bg/Bezdrev.jpg";
import Kdekoliv from "./public/bg/kdekoliv.jpg";
import Kvetopady from "./public/bg/Kvetopady.jpg";
import Enteria from "./public/bg/enteria.jpg";
import RidersTrack from "./public/bg/Riders_Track.jpg";
import Stanislav from "./public/bg/Stanislav.jpg";
import LodniMotor from "./public/bg/Motor_1.jpg";
import HrosiStavby from "./public/bg/Morava_1.jpg";



export const projects = [
  {
    image: Kolobreh,
    alt: "Kolobřeh paddleboardové závody",
    title: "Kolobřeh paddleboardové závody",
    description:
      "Závody byly výzva na natočení za přímořských podmínek, větru a deště. Video se i přesto velmi vydařilo!",
    typeDate: "2023 | Event",
    additionalClasses: "",
    videoLink: "https://www.youtube.com/embed/pC8w-qEUHcI?si=IFc7ItKm9_SvqQZQ",
    idPathname: "kolobreh-paddleboardove-zavody",
  },
  {
    image: RidersTrack,
    alt: "Riders Track ",
    title: "Riders Track",
    description:
      "Promo video mobilní aplikace pro motorkáře.",
    typeDate: "2024 | Reklamní video",
    additionalClasses: "object-[75%]",
    videoLink: "https://www.youtube.com/embed/J6GOLj5nWD4?si=dezqDgTAQk1nrlH3",
    idPathname: "riders-track",
  },
  {
    image: Stanislav,
    alt: "Stanislav",
    title: "Stanislav",
    description:
      "Přišel čas na opravdovou zkoušku naší kreativity. Tento krátký film demonstruje, čeho jsme schopni.",
    typeDate: "2024 | Film",
    additionalClasses: "",
    videoLink: "https://player.vimeo.com/video/1011295324?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    idPathname: "stanislav",
  },
  {
    image: LodniMotor,
    alt: "Elektrický lodní motor",
    title: "Elektrický lodní motor",
    description:
      "Krátká reklama, zaměřená na jednoduchost elektrického motoru.",
    typeDate: "2024 | Reklamní video",
    additionalClasses: "",
    videoLink: "https://www.youtube.com/embed/rcXwL2fRVxk?si=Iz0tvdCLqmJDSojZ",
    idPathname: "elektricky-lodni-motor",
  },
  {
    image: Bezdrev,
    alt: "Mistrovství ČR Bezdrev",
    title: "Mistrovství ČR Bezdrev",
    description:
      "Pravidelné Mistrovství ČR v paddleboardingu na 3 dny. Ve videu je zachycený každý den včetně rozhovorů.",
    typeDate: "2023 | Event",
    additionalClasses: "",
    videoLink: "https://www.youtube.com/embed/976irkfdVkk?si=HxYMvBLwEKDcfwDG",
    idPathname: "mistrovstvi-cr-v-bezdrev",
  },
  {
    image: CT,
    alt: "Parapaddleboarding ČT",
    title: "Parapaddleboarding ČT",
    description:
      "Byl jsem osloven Českou televizí pro vytvoření reportáže o Parapaddleboardingu. Reportáž byla vysílána na ČT Sport.",
    typeDate: "2022 | Reportáž",
    additionalClasses: "",
    videoLink: "https://www.youtube.com/embed/JBC4DJ-iBYM?si=no-_TB72geZxW5yM",
    idPathname: "para-paddleboarding-ct",
  },
  {
    image: Kdekoliv,
    alt: "Pádlujte kdekoliv",
    title: "Pádlujte kdekoliv",
    description: "Video do reklamní kampaně Pádlujte.cz",
    typeDate: "2022 | Branding",
    additionalClasses: "",
    videoLink: "https://www.youtube.com/embed/dc08A5Nzh9A?si=x2wKFANGBorzrd0K",
    idPathname: "padlujte-kdekoliv",
  },
  {
    image: Kvetopady,
    alt: "Květopády",
    title: "Květopády",
    description: "Květopády v Zahradě nebeského nefritu",
    typeDate: "2022 | Dokumentační video",
    additionalClasses: "",
    videoLink: "https://www.youtube.com/embed/xYUh__-LSa8?si=zxR2WIye9FUn05uH",
    idPathname: "kvetopady",
  },
  
  {
    image: Enteria,
    alt: "Enteria byty Thera",
    title: "Enteria byty Thera",
    description:
      "Krátký sestřih, jak probíhá výstavba bytových domů Thera v Hradci Králové.",
    typeDate: "2023 | Dokumentační video",
    additionalClasses: "",
    videoLink: "https://www.youtube.com/embed/8nqu4mHd5mM?si=g-Ms_nYvLAqEu2E_",
    idPathname: "enteria-byty-thera",
  },
  {
    image: HrosiStavby,
    alt: "Hroší stavby Morava",
    title: "Mistrovství světa v\u00A0Thajsku",
    description: "Česká výprava paddleboardistů na Mistrovství světa v Thajsku. Ve videu jsou zachycené závody, příhody z cesty a trocha té kultury Thajska.",
    typeDate: "2023 | Travel video",
    additionalClasses: "",
    videoLink: "https://www.youtube.com/embed/RVGE-oIvqpI?si=lTvU5EbnB6AWsKiu",
    idPathname: "hrosi-stavby-morava",
  },
  {
    image: Thajsko,
    alt: "Mistrovství světa v Thajsku",
    title: "Mistrovství světa v\u00A0Thajsku",
    description: "Česká výprava paddleboardistů na Mistrovství světa v Thajsku. Ve videu jsou zachycené závody, příhody z cesty a trocha té kultury Thajska.",
    typeDate: "2023 | Travel video",
    additionalClasses: "",
    videoLink: "https://www.youtube.com/embed/ynCSr-BItmg?si=FCg8UyI_fYLyF_GA",
    idPathname: "mistrostvi-sveta-v-thajsku",
  },
  
  
];

export const topThreeProjects = [
  {
    image: Kolobreh,
    alt: "Kolobřeh paddleboardové závody",
    title: "Kolobřeh paddleboardové závody",
    description:
      "Závody byly výzva na natočení za přímořských podmínek, větru a deště. Video se i přesto velmi vydařilo!",
    typeDate: "2023 | Event",
    additionalClasses: "",
    videoLink: "https://www.youtube.com/embed/pC8w-qEUHcI?si=IFc7ItKm9_SvqQZQ",
    idPathname: "kolobreh-paddleboardove-zavody",
  },
  {
    image: RidersTrack,
    alt: "Riders Track ",
    title: "Riders Track",
    description:
      "Promo video mobilní aplikace pro motorkáře.",
    typeDate: "2024 | Reklamní video",
    additionalClasses: " object-[75%] ",
    videoLink: "https://www.youtube.com/embed/J6GOLj5nWD4?si=dezqDgTAQk1nrlH3",
    idPathname: "riders-track",
  },
  {
    image: Vyrava,
    alt: "Festival Výrava x MOK",
    title: "Festival Výrava x\u00A0MOK",
    description:
      "Zadání bylo vytvořit dvě reelska do 15s z celého festivalu včetně propagace nahřívacích tabákových jednotek.",
    typeDate: "2023 | Event",
    additionalClasses: "",
    videoLink: "https://www.youtube.com/embed/9BTZeqhLkjg?si=STS9B6x1-dtbd7OV",
    idPathname: "festival-vyrava-x-mok",
  },
];
