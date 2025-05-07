import { Meta, StoryFn } from '@storybook/react';
import {
  SkeletonImageWrapper,
  SkeletonImageWrapperProps,
} from './skeleton-image-wrapper';

const sampleImageSiteUrl = 'https://picsum.photos/seed/';

const meta: Meta<typeof SkeletonImageWrapper> = {
  title: 'shared/ui/skeleton-image-wrapper',
  component: SkeletonImageWrapper,
  args: {
    src: `${sampleImageSiteUrl}${Math.random() * 1000}/200/300`, // ランダムな画像URL
    alt: 'Sample Image',
    aspectRatio: 1,
    width: '100%',
    height: 'auto',
    border: '2px solid black',
    borderColor: 'black',
    isGlitch: false,
  },
};

export default meta;

// Templateを作成
const Template: StoryFn<SkeletonImageWrapperProps> = args => (
  <SkeletonImageWrapper {...args} />
);

// Default: ランダム画像
export const Default = Template.bind({});
Default.args = {
  src: `${sampleImageSiteUrl}${Math.random() * 1000}/200/300`, // ランダムな画像URL
  alt: 'Sample Image',
};

// GlitchEffect: グリッチエフェクト付きのランダム画像
export const GlitchEffect = Template.bind({});
GlitchEffect.args = {
  src: `${sampleImageSiteUrl}${Math.random() * 1000}/200/300`, // ランダムな画像URL
  alt: 'Glitch Effect Image',
  isGlitch: true,
};
