import { Meta, StoryFn } from '@storybook/react';
import {
  ImageTextHorizontalWrapper,
  ImageTextHorizontalWrapperProps,
} from './image-text-horizontal-wrapper';
import { Box } from '@chakra-ui/react';

const meta: Meta<typeof ImageTextHorizontalWrapper> = {
  title: 'shared/ui/image-text-horizontal-wrapper', // Storybookで表示されるタイトル
  component: ImageTextHorizontalWrapper,
  args: {
    children: [
      <Box key={'box1'} bg={'blue.400'}>
        box1
      </Box>,
      <Box key={'box2'} bg={'red.400'}>
        box2
      </Box>,
    ],
    isReverse: false,
  },
};

export default meta;

// Templateを作成
const Template: StoryFn<ImageTextHorizontalWrapperProps> = args => (
  <ImageTextHorizontalWrapper {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Reverse = Template.bind({});
Reverse.args = {
  isReverse: true, // 順番を逆に
};
