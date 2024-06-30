'use client';
import React, { useState } from 'react';

import { Box, Container, styled, useMediaQuery, useTheme } from '@mui/material';

import ResponsiveContainer from '@/app/(DashboardLayout)/components/container/ResponsiveContainer';
import Header from '@/app/(DashboardLayout)/layout/header/Header';
import Sidebar from '@/app/(DashboardLayout)/layout/sidebar/Sidebar';

const MainWrapper = styled('div')(() => ({
  display: 'flex',
  minHeight: '100vh',
  width: '100%',
  overflow: 'hidden',
}));

const PageWrapper = styled('div')(() => ({
  display: 'flex',
  flexGrow: 1,
  paddingBottom: '60px',
  flexDirection: 'column',
  zIndex: 1,
  backgroundColor: 'transparent',
  overflow: 'hidden',
}));

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <MainWrapper className="mainwrapper">
      {/* ------------------------------------------- */}
      {/* Sidebar */}
      {/* ------------------------------------------- */}
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        isMobileSidebarOpen={isMobileSidebarOpen}
        onSidebarClose={() => setMobileSidebarOpen(false)}
      />
      {/* ------------------------------------------- */}
      {/* Main Wrapper */}
      {/* ------------------------------------------- */}
      <PageWrapper className="page-wrapper">
        {/* ------------------------------------------- */}
        {/* Header */}
        {/* ------------------------------------------- */}
        <Header toggleMobileSidebar={() => setMobileSidebarOpen(true)} />
        {/* ------------------------------------------- */}
        {/* PageContent */}
        {/* ------------------------------------------- */}
        <Container
          sx={{
            paddingTop: '20px',
            maxWidth: '1200px',
          }}
        >
          {/* ------------------------------------------- */}
          {/* Page Route */}
          {/* ------------------------------------------- */}
          <Box sx={{ minHeight: 'calc(100vh - 170px)' }}>
            <ResponsiveContainer>{children}</ResponsiveContainer>
          </Box>
          {/* ------------------------------------------- */}
          {/* End Page */}
          {/* ------------------------------------------- */}
        </Container>
      </PageWrapper>
    </MainWrapper>
  );
}
