type PCKeys =
  | 'shortName'
  | 'longName'
  | 'description'
  | 'url'
  | 'color'
  | 'defaultLocale'
type PCIconsKeys = 'default' | 'image' | 'apple' | '16_16' | '32_32'

type PCProps = Record<PCKeys, string>

export interface PCDefaultValues extends PCProps {
  icons: Record<PCIconsKeys, string>
}
