import { Tabs } from 'expo-router';
import React from 'react';

import TabBar from '@/components/TabBar';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs screenOptions={{ headerShown: false }}
      tabBar={props => <TabBar {...props} /> }
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Explore',
        }}
      />
      <Tabs.Screen
        name="liked"
        options={{
          title: 'Liked',
        }}
      />
      <Tabs.Screen
        name="mySwaps"
        options={{
          title: 'Requests',
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: 'Inbox',
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Proifile',
        }}
      />
    </Tabs>
  );
}
