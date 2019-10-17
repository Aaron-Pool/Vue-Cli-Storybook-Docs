/* eslint-disable import/no-extraneous-dependencies */
import { configure } from '@storybook/vue'


configure(require.context('../../src/stories', true, /\.stories\.(js|mdx)$/), module);
