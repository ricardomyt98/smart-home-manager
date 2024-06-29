import {
  IconAperture,
  IconDevices,
  IconHelp,
  IconLayoutDashboard,
  IconListCheck,
  IconMoodHappy,
  IconSettings,
} from '@tabler/icons-react';
import { uniqueId } from 'lodash';

const MenuItems = [
  {
    navlabel: true,
    subheader: 'Home',
  },
  {
    id: uniqueId(),
    title: 'Dashboard',
    icon: IconLayoutDashboard,
    href: '/',
  },
  {
    navlabel: true,
    subheader: 'Dispositivos',
  },
  {
    id: uniqueId(),
    title: 'Dispositivos',
    icon: IconDevices,
    href: '/devices',
  },
  {
    navlabel: true,
    subheader: 'Rotinas',
  },
  {
    id: uniqueId(),
    title: 'Rotinas',
    icon: IconListCheck,
    href: '/routines',
  },
  {
    navlabel: true,
    subheader: 'Configurações',
  },
  {
    id: uniqueId(),
    title: 'Configurações',
    icon: IconSettings,
    href: '/settings',
  },
  {
    navlabel: true,
    subheader: 'Ajuda',
  },
  {
    id: uniqueId(),
    title: 'Ajuda',
    icon: IconHelp,
    href: '/help',
  },
  {
    id: uniqueId(),
    title: 'Sample Page',
    icon: IconAperture,
    href: '/sample-page',
  },
];

export default MenuItems;
