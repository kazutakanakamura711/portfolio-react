interface MicroCMSImage {
  url: string;
  height: number;
  width: number;
}

export interface MicroCMSWorksData {
  title: string;
  gitHubUrl: string;
  siteUrl: string;
  imageSrc: MicroCMSImage;
  imageAlt: string;
  description: string;
  technology: string;
}
