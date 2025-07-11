import {
  QrCodeIcon,
  ScrollIcon,
  TextFileIcon,
  RegexIcon,
  PipetteIcon,
  SwatchIcon,
  JsonFileIcon,
  BracketsIcon,
  GitIcon,
} from '@icons/Icons.tsx'

export const toolsData = [
  {
    category: 'Generators',
    slug: 'readme-generator',
    icon: TextFileIcon,
    color: 'bg-red-300/60',
    title: 'Readme Generator',
    description: 'Create a markdown file with the information of your project.',
    stats: '3.1k uses',
    features: ['URLs', 'Text', 'WiFi', 'vCards'],
  },
  {
    category: 'Generators',
    slug: 'gitignore-generator',
    icon: GitIcon,
    color: 'bg-red-300/60',
    title: 'Gitignore Generator',
    description: 'Create customizable license keys for software products.',
    stats: '947 uses',
    features: ['Files', 'Folders', 'Config', 'Env'],
  },
  {
    category: 'Generators',
    slug: 'license-generator',
    icon: ScrollIcon,
    color: 'bg-red-300/60',
    title: 'License Picker',
    description:
      'Choose or create customizable license files for software products.',
    stats: '1.7k uses',
    features: ['MIT', 'Apache', 'GNU', 'Creative Commons'],
  },
  {
    category: 'Generators',
    slug: 'qr-code',
    icon: QrCodeIcon,
    color: 'bg-red-300/60',
    title: 'QR Code Generator',
    description: 'Create customizable QR codes for URLs, text, WiFi, and more',
    stats: '856 uses',
    features: ['URLs', 'Text', 'WiFi', 'vCards'],
  },
  {
    category: 'Generators',
    slug: 'mock-data-generator',
    icon: JsonFileIcon,
    color: 'bg-red-300/60',
    title: 'Mock Data Generator',
    description: 'Generate diverse fake data for testing applications.',
    stats: '1.2k uses',
    features: ['Users', 'Products', 'Addresses', 'Custom Fields'],
  },
  {
    category: 'Validators',
    slug: 'regex-tester',
    icon: RegexIcon,
    color: 'bg-emerald-300/60',
    title: 'Regex Tester',
    description:
      'Test and validate regular expressions with real-time matching',
    stats: '1.7k uses',
    features: ['Live Testing', 'Match Groups', 'Flags', 'Examples'],
  },
  {
    category: 'UI Tools',
    slug: 'color-picker',
    icon: PipetteIcon,
    color: 'bg-violet-300/60',
    title: 'Color Picker',
    description:
      'Format, validate, and minify JSON data with syntax highlighting',
    stats: '1.8k uses',
    features: ['Format', 'Validate', 'Minify', 'Tree View'],
  },
  {
    category: 'UI Tools',
    slug: 'gradient-generator',
    icon: SwatchIcon,
    color: 'bg-violet-300/60',
    title: 'Gradient Generator',
    description:
      'Format, validate, and minify JSON data with syntax highlighting',
    stats: '1.8k uses',
    features: ['Format', 'Validate', 'Minify', 'Tree View'],
  },
  {
    category: 'Formatters',
    slug: 'json-formatter',
    icon: BracketsIcon,
    color: 'bg-cyan-300/60',
    title: 'JSON Formatter',
    description:
      'Format, validate, and minify JSON data with syntax highlighting',
    stats: '2.4k uses',
    features: ['Format', 'Validate', 'Minify', 'Tree View'],
  },
]
