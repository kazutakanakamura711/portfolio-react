import type { Meta, StoryFn } from '@storybook/react';
import { TextArrowWrapperProps, TextArrowWrapper } from './text-arrow-wrapper';

const meta: Meta<typeof TextArrowWrapper> = {
  title: 'shared/ui/text-arrow-wrapper', // Storybookで表示されるタイトル
  component: TextArrowWrapper,
  args: {
    text: 'This is a Text',
  },
};
export default meta;

// Templateを作成
const Template: StoryFn<TextArrowWrapperProps> = args => (
  <TextArrowWrapper {...args} />
);

export const Default = Template.bind({});
Default.args = {
  text: 'This is a Text',
};
