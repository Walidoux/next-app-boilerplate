type PCProps = 'shortName' | 'longName' | 'description' | 'url' | 'color'
type PCDefaultValues = Record<PCProps, string>

const projectDefaultConfigValues: PCDefaultValues = {
  shortName: 'Unknown project name',
  longName: 'Unknown project name',
  description: 'Unknown project description',
  url: 'Unknown project url',
  color: '#FF0000'
}

export const projectConfig = {
  shortName:
    process.env.NEXT_PUBLIC_PROJECT_SHORT_NAME != null
      ? process.env.NEXT_PUBLIC_PROJECT_SHORT_NAME
      : projectDefaultConfigValues.shortName,
  longName:
    process.env.NEXT_PUBLIC_PROJECT_LONG_NAME != null
      ? process.env.NEXT_PUBLIC_PROJECT_LONG_NAME
      : projectDefaultConfigValues.longName,
  description:
    process.env.NEXT_PUBLIC_PROJECT_DESCRIPTION != null
      ? process.env.NEXT_PUBLIC_PROJECT_DESCRIPTION
      : projectDefaultConfigValues.description,
  url:
    process.env.NEXT_PUBLIC_PROJECT_URL != null
      ? process.env.NEXT_PUBLIC_PROJECT_URL
      : projectDefaultConfigValues.url,
  color:
    process.env.NEXT_PUBLIC_PROJECT_COLOR != null
      ? process.env.NEXT_PUBLIC_PROJECT_COLOR
      : projectDefaultConfigValues.color
}
