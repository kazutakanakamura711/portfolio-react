import type { Meta, StoryFn } from '@storybook/react';
import { TitleProps, Title } from './title';

const meta: Meta<typeof Title> = {
  title: 'shared/ui/title', // Storybookで表示されるタイトル
  component: Title,
  args: {
    title: 'This is a Title',
  },
};
export default meta;

// Templateを作成
const Template: StoryFn<TitleProps> = args => <Title {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'This is a Title',
};

export const GlitchEffect = Template.bind({});
GlitchEffect.args = {
  title: 'Glitch Effect Title',
  isGlitch: true,
};
