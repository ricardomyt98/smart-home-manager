import React from 'react';

import { useMediaQuery, useTheme } from '@mui/material';

import useWindowSize from '@/utils/useWindowSize';

type Props = {
  children: React.ReactNode;
};

const ResponsiveContainer: React.FC<Props> = ({ children }) => {
  const { width } = useWindowSize();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

  const sidebarWidth = 320; // Sidebar width on desktop
  const availableWidth = isMobile ? '100%' : `${width - sidebarWidth}px`;

  return (
    <div
      style={{
        width: availableWidth,
        overflowX: 'hidden', // Add this line to hide horizontal overflow
        overflowY: 'auto',
        backgroundColor: 'red',
      }}
    >
      {children}
    </div>
  );
};

export default ResponsiveContainer;
