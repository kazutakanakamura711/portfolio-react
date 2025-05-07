import type { Meta, StoryFn } from '@storybook/react';
import { SliderProps, Slider } from './slider';

const sampleImageSiteUrl = 'https://picsum.photos/seed/';

const meta: Meta<typeof Slider> = {
  title: 'shared/ui/slider', // Storybookで表示されるタイトル
  component: Slider,
  args: {
    slides: [
      {
        title: 'Application Title1',
        src: `${sampleImageSiteUrl}${Math.random() * 1000}/400/300`, // ランダムな画像URL
        alt: 'Application Image1',
        gitHubUrl: 'https://github.com',
        siteUrl: 'https://example.com',
        description: 'description1',
        technology: 'technology1',
      },
      {
        title: 'Application Title2',
        src: `${sampleImageSiteUrl}${Math.random() * 1000}/400/300`, // ランダムな画像URL
        alt: 'Application Image2',
        gitHubUrl: 'https://github.com',
        siteUrl: 'https://example.com',
        description: 'description2',
        technology: 'technology2',
      },
      {
        title: 'Application Title3',
        src: `${sampleImageSiteUrl}${Math.random() * 1000}/400/300`, // ランダムな画像URL
        alt: 'Application Image3',
        gitHubUrl: 'https://github.com',
        siteUrl: 'https://example.com',
        description: 'description3',
        technology: 'technology3',
      },
    ],
  },
};
export default meta;

// Templateを作成
const Template: StoryFn<SliderProps> = args => <Slider {...args} />;

export const Default = Template.bind({});
Default.args = {
  slides: [
    {
      title: 'Application Title1',
      src: `${sampleImageSiteUrl}${Math.random() * 1000}/400/300`, // ランダムな画像URL
      alt: 'Application Image1',
      gitHubUrl: 'https://github.com',
      siteUrl: 'https://example.com',
      description: 'description1',
      technology: 'technology1',
    },
    {
      title: 'Application Title2',
      src: `${sampleImageSiteUrl}${Math.random() * 1000}/400/300`, // ランダムな画像URL
      alt: 'Application Image2',
      gitHubUrl: 'https://github.com',
      siteUrl: 'https://example.com',
      description: 'description2',
      technology: 'technology2',
    },
    {
      title: 'Application Title3',
      src: `${sampleImageSiteUrl}${Math.random() * 1000}/400/300`, // ランダムな画像URL
      alt: 'Application Image3',
      gitHubUrl: 'https://github.com',
      siteUrl: 'https://example.com',
      description: 'description3',
      technology: 'technology3',
    },
  ],
};
