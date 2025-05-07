import React from 'react';
import type { Preview } from '@storybook/react';
import { ChakraProvider } from '@chakra-ui/react';
import { ParallaxProvider } from 'react-scroll-parallax';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    Story => (
      <React.Fragment>
        <ChakraProvider>
          <ParallaxProvider>
            <Story />
          </ParallaxProvider>
        </ChakraProvider>
      </React.Fragment>
    ),
  ],
};

export default preview;
