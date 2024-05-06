import { create } from '@storybook/theming'

const theming = create({
  base: 'light', // or 'dark' based on your preference

  // Branding
  brandTitle: 'React UI',
  brandUrl: 'https://github.com/xdev-asia'
  // brandImage: 'path/to/your/logo.png', // Uncomment if you want to use an image
})

export default theming
