import { QrCodeIcon, ToolsydeIcon } from '@icons/Icons'

export const toolsData = [
  {
    title: 'Mock Data Generator',
    description:
      'Generate realistic fake data for testing - users, products, addresses',
    icon: ToolsydeIcon,
    color: 'bg-blue-300',
    stats: '1.2k uses',
    category: 'Generator',
    features: ['Users', 'Products', 'Addresses', 'Custom Fields'],
    slug: 'mock-data-generator',
  },
  {
    title: 'QR Code Generator',
    description: 'Create customizable QR codes for URLs, text, WiFi, and more',
    icon: QrCodeIcon,
    color: 'bg-green-300',
    stats: '856 uses',
    category: 'Generator',
    features: ['URLs', 'Text', 'WiFi', 'vCards'],
    slug: 'qr-code',
  },
  {
    title: 'Regex Tester',
    description:
      'Test and validate regular expressions with real-time matching',
    icon: ToolsydeIcon,
    color: 'bg-purple-300',
    stats: '2.1k uses',
    category: 'Validator',
    features: ['Live Testing', 'Match Groups', 'Flags', 'Examples'],
    slug: 'regex-tester',
  },
  {
    title: 'JSON Formatter',
    description:
      'Format, validate, and minify JSON data with syntax highlighting',
    icon: ToolsydeIcon,
    color: 'bg-orange-300',
    stats: '1.8k uses',
    category: 'Formatter',
    features: ['Format', 'Validate', 'Minify', 'Tree View'],
    slug: 'json-formatter',
  },
]
