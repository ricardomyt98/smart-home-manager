import {
  IconAperture,
  IconLayoutDashboard,
  IconMoodHappy,
  IconSettings,
  IconDevices,
  IconListCheck,
  IconHelp,
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
    href: '/(DashboardLayout)/dashboard',
  },
  {
    navlabel: true,
    subheader: 'Dispositivos',
  },
  {
    id: uniqueId(),
    title: 'Dispositivos',
    icon: IconDevices,
    href: '/(DashboardLayout)/devices',
  },
  {
    navlabel: true,
    subheader: 'Rotinas',
  },
  {
    id: uniqueId(),
    title: 'Rotinas',
    icon: IconListCheck,
    href: '/(DashboardLayout)/routines',
  },
  {
    navlabel: true,
    subheader: 'Configurações',
  },
  {
    id: uniqueId(),
    title: 'Configurações',
    icon: IconSettings,
    href: '/(DashboardLayout)/settings',
  },
  {
    navlabel: true,
    subheader: 'Ajuda',
  },
  {
    id: uniqueId(),
    title: 'Ajuda',
    icon: IconHelp,
    href: '/(DashboardLayout)/help',
  },
  {
    id: uniqueId(),
    title: 'Sample Page',
    icon: IconAperture,
    href: '/(DashboardLayout)/sample-page',
  },
];

export default MenuItems;
