import { PCDefaultValues } from 'types/projectConfig'

export const projectConfig: PCDefaultValues = {
  shortName: 'Unknown project name',
  longName: 'Unknown project name',
  description: 'Unknown project description',
  url: 'Unknown project url',
  color: '#FF0000',
  icons: {
    image: '/images/Logo.png',
    default: '/icons/favicons/favicon.ico',
    apple: '/icons/favicons/apple-touch-icon.png',
    '16_16': '/icons/favicons/favicon-16x16.png',
    '32_32': '/icons/favicons/favicon-32x32.png'
  }
}
