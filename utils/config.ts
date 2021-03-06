import { PCDefaultValues } from 'types/projectConfig'

export const projectConfig: PCDefaultValues = {
  shortName: 'Boilerplate',
  longName: 'Next.Js Boilerplate',
  description:
    'The latest Next.js boilerplate starter code/time saver with Typescript / SCSS. Including linters such as: Prettier, Eslint and Stylelint.',
  url: 'Unknown project url',
  defaultLocale: 'en',
  color: '#775aaa',
  icons: {
    image: '/images/Logo.png',
    default: '/icons/favicons/favicon.ico',
    apple: '/icons/favicons/apple-touch-icon.png',
    '16_16': '/icons/favicons/favicon-16x16.png',
    '32_32': '/icons/favicons/favicon-32x32.png'
  }
}
