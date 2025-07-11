import {
  BookIcon,
  CheckListIcon,
  FrameIcon,
  GeneratorIcon,
  LayoutIcon,
  TransformIcon,
} from '@icons/Icons.tsx'
import { LinkUtilProps } from '@customTypes/navigationTypes.ts'

export const utilsData: LinkUtilProps[] = [
  {
    icon: LayoutIcon,
    text: 'Toolbox',
    link: '/toolbox',
  },
  {
    icon: GeneratorIcon,
    text: 'Generators',
    link: '/toolbox/generators',
  },
  {
    icon: CheckListIcon,
    text: 'Validators',
    link: '/toolbox/validators',
  },
  {
    icon: TransformIcon,
    text: 'Converters',
    link: '/toolbox/converters',
  },
  {
    icon: FrameIcon,
    text: 'UI Tools',
    link: '/toolbox/ui-tools',
  },
  {
    icon: BookIcon,
    text: 'Resources',
    link: '/toolbox/resources',
  },
]
