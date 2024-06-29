'use client';
import { useState } from 'react';

import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import SettingsIcon from '@mui/icons-material/Settings';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import {
  Box,
  Grid,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';

import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';

// Define the type for a device
interface Device {
  id: number;
  name: string;
  type: string;
  status: string;
  icon: string;
  room: string;
}

// Mock data for devices
const initialDevices: Device[] = [
  {
    id: 1,
    name: 'Luz Cozinha',
    type: 'lamp',
    status: 'online',
    icon: '💡',
    room: 'Cozinha',
  },
  {
    id: 2,
    name: 'Luz Sala',
    type: 'lamp',
    status: 'offline',
    icon: '💡',
    room: 'Sala',
  },
  {
    id: 3,
    name: 'Sensor Porta',
    type: 'sensor',
    status: 'online',
    icon: '🚪',
    room: 'Entrada',
  },
  {
    id: 4,
    name: 'Tomada Smart',
    type: 'outlet',
    status: 'online',
    icon: '🔌',
    room: 'Sala',
  },
  {
    id: 5,
    name: 'Câmera Garagem',
    type: 'camera',
    status: 'online',
    icon: '📷',
    room: 'Garagem',
  },
  {
    id: 6,
    name: 'Câmera Sala',
    type: 'camera',
    status: 'offline',
    icon: '📷',
    room: 'Sala',
  },
  {
    id: 7,
    name: 'Sensor Movimento',
    type: 'sensor',
    status: 'online',
    icon: '📡',
    room: 'Cozinha',
  },
  {
    id: 8,
    name: 'Luz Quarto',
    type: 'lamp',
    status: 'online',
    icon: '💡',
    room: 'Quarto',
  },
];

// Mock data for rooms
const rooms = ['Todos', 'Cozinha', 'Sala', 'Entrada', 'Garagem', 'Quarto'];

// Define the name of the house
const houseName = 'Minha Casa';

const DeviceCard = ({
  device,
  onToggle,
}: {
  device: Device;
  onToggle: (id: number) => void;
}) => {
  const isOnline = device.status === 'online';
  const isOn = device.type === 'lamp' && isOnline;

  return (
    <DashboardCard>
      <Box>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="h6">{device.icon}</Typography>
          <IconButton
            color="primary"
            disabled={!isOnline}
            onClick={() => onToggle(device.id)}
            sx={{
              color: isOnline ? (isOn ? 'green' : 'default') : 'gray',
            }}
          >
            <PowerSettingsNewIcon />
          </IconButton>
        </Box>
        <Typography variant="subtitle1">{device.name}</Typography>
        <Typography variant="body2" color={isOnline ? 'green' : 'red'}>
          {isOnline ? 'Online' : 'Offline'}
        </Typography>
        <Typography variant="body2">{device.room}</Typography>
      </Box>
    </DashboardCard>
  );
};

const DevicesPage = () => {
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [devices, setDevices] = useState(initialDevices);
  const [selectedRoom, setSelectedRoom] = useState('Todos');

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleViewChange = (mode: 'grid' | 'list') => {
    setViewMode(mode);
    handleMenuClose();
  };

  const handleToggleDevice = (id: number) => {
    setDevices((prevDevices) =>
      prevDevices.map((device) =>
        device.id === id
          ? {
              ...device,
              type:
                device.type === 'lamp' && device.status === 'online'
                  ? 'off'
                  : 'lamp',
            }
          : device
      )
    );
  };

  const handleRoomChange = (event: React.SyntheticEvent, newValue: string) => {
    setSelectedRoom(newValue);
  };

  const filteredDevices =
    selectedRoom === 'Todos'
      ? devices
      : devices.filter((device) => device.room === selectedRoom);

  return (
    <PageContainer
      title={`${houseName}`}
      description="Visualize e gerencie seus dispositivos inteligentes"
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography variant="h4">{houseName}</Typography>
        <div>
          <IconButton onClick={handleMenuClick}>
            <MoreVertIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <MenuItem
              onClick={() =>
                handleViewChange(viewMode === 'grid' ? 'list' : 'grid')
              }
            >
              <ListItemIcon>
                {viewMode === 'grid' ? <ViewListIcon /> : <ViewModuleIcon />}
              </ListItemIcon>
              <Typography variant="inherit" style={{ marginLeft: 8 }}>
                {viewMode === 'grid' ? 'Modo Lista' : 'Modo Grade'}
              </Typography>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <ManageAccountsIcon />
              </ListItemIcon>
              <Typography variant="inherit" style={{ marginLeft: 8 }}>
                Gerenciar Dispositivos
              </Typography>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <Typography variant="inherit" style={{ marginLeft: 8 }}>
                Gerenciar Ambientes
              </Typography>
            </MenuItem>
          </Menu>
        </div>
      </Box>
      <Tabs
        value={selectedRoom}
        onChange={handleRoomChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        {rooms.map((room) => (
          <Tab key={room} label={room} value={room} />
        ))}
      </Tabs>
      <Grid container spacing={2}>
        {filteredDevices.map((device) => (
          <Grid item xs={12} sm={viewMode === 'grid' ? 6 : 12} key={device.id}>
            <DeviceCard device={device} onToggle={handleToggleDevice} />
          </Grid>
        ))}
      </Grid>
    </PageContainer>
  );
};

export default DevicesPage;
