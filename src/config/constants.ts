import memoryWeakness from '../assets/images/memoryWeakness.png';
import nuxtSlot from '../assets/images/nuxtSlot.png';
import forKids from '../assets/images/forKids.png';
import styleCollection from '../assets/images/styleCollection.png';
import alleyRed from '../assets/images/alleyRed.png';
import flower from '../assets/images/flower.jpg';
import firstCollage from '../assets/images/firstCollage.jpg';
import contact from '../assets/images/contact.jpg';

export interface WorksData {
  title: string;
  gitHubUrl: string;
  siteUrl: string;
  src: string;
  alt: string;
  description: string;
  technology: string;
}

export const worksData: WorksData[] = [
  {
    title: '神経衰弱アプリ',
    gitHubUrl: 'https://github.com/kazutakanakamura711/memoryWeakness',
    siteUrl: 'https://memory-weakness.netlify.app/',
    src: memoryWeakness,
    alt: '神経衰弱アプリ画像',
    description: '神経衰弱アプリです。',
    technology: 'JavaScript / Nuxt.js',
  },
  {
    title: 'スロットアプリ',
    gitHubUrl: 'https://github.com/kazutakanakamura711/slotMaschine',
    siteUrl: 'https://slot-maschine-nuxt.netlify.app/',
    src: nuxtSlot,
    alt: 'スロットアプリ画像',
    description: 'スロットアプリです。',
    technology: 'JavaScript / Nuxt.js / Vuetify',
  },
  {
    title: '知育アプリ',
    gitHubUrl: 'https://github.com/kazutakanakamura711/forKids',
    siteUrl: 'https://programming-go.netlify.app/',
    src: forKids,
    alt: '知育アプリ画像',
    description: '知育アプリです。',
    technology: 'JavaScript / Nuxt.js',
  },
  {
    title: 'スタイルコピペサイト',
    gitHubUrl: 'https://github.com/kazutakanakamura711/style-collection',
    siteUrl: 'https://style-collection.vercel.app/',
    src: styleCollection,
    alt: 'スタイルコピペサイト画像',
    description: 'スタイルコピペサイトです。',
    technology: 'TypeScript / React / ChakraUI',
  },
];

export interface GalleryData {
  src: string;
  alt: string;
}

export const galleryData: GalleryData[] = [
  {
    src: alleyRed,
    alt: 'Galleryの画像',
  },
  {
    src: flower,
    alt: 'Galleryの画像',
  },
  {
    src: firstCollage,
    alt: 'Galleryの画像',
  },
  {
    src: contact,
    alt: 'Galleryの画像',
  },
];
