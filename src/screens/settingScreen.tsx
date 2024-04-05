import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Socket } from 'socket.io-client';
import { useDarkMode } from '../contexts/DarkModeContext';

interface SettingScreenProps {
  socket: Socket;
}

const SettingScreen: React.FC<SettingScreenProps> = ({ socket }) => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const toggleNotifications = () => {
    setNotificationsEnabled(prev => !prev);
  };

  return (
    <View style={styles.container}>
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Notifications</Text>
        <Switch value={notificationsEnabled} onValueChange={toggleNotifications} />
      </View>
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Dark Mode</Text>
        <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: '100%',
  },
  settingText: {
    fontSize: 18,
  },
});

export default SettingScreen;
