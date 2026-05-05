import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft, Bell, Gift, Package, Tag, Info } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';

const MOCK_NOTIFICATIONS = [
  {
    id: '1',
    title: 'Order Delivered Successfully!',
    description: 'Your order #PB-10293 has been delivered to the recipient.',
    time: '2 hours ago',
    type: 'order',
    read: false,
  },
  {
    id: '2',
    title: 'Flash Sale: 50% OFF on Roses',
    description: 'Use code ROSE50 at checkout to avail this exclusive offer. Valid for 24 hours only!',
    time: '5 hours ago',
    type: 'promo',
    read: true,
  },
  {
    id: '3',
    title: 'Order Dispatched',
    description: 'Your order #PB-10293 is out for delivery. Track your order for more details.',
    time: '1 day ago',
    type: 'order',
    read: true,
  },
  {
    id: '4',
    title: 'Welcome to Phool Basket!',
    description: 'Thank you for joining us. Here is a 10% discount on your first order. Code: WELCOME10',
    time: '2 days ago',
    type: 'info',
    read: true,
  },
];

const getIconForType = (type) => {
  switch (type) {
    case 'order':
      return <Package size={24} color="#2196F3" />;
    case 'promo':
      return <Tag size={24} color="#FF9800" />;
    case 'info':
    default:
      return <Info size={24} color="#4CAF50" />;
  }
};

const getIconBackgroundColor = (type) => {
  switch (type) {
    case 'order':
      return '#E3F2FD';
    case 'promo':
      return '#FFF3E0';
    case 'info':
    default:
      return '#E8F5E9';
  }
};

const NotificationsScreen = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity style={[styles.notificationCard, !item.read && styles.unreadCard]}>
      <View style={[styles.iconContainer, { backgroundColor: getIconBackgroundColor(item.type) }]}>
        {getIconForType(item.type)}
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.titleRow}>
          <Text style={[styles.title, !item.read && styles.unreadText]} numberOfLines={1}>
            {item.title}
          </Text>
          {!item.read && <View style={styles.unreadDot} />}
        </View>
        <Text style={styles.description} numberOfLines={2}>
          {item.description}
        </Text>
        <Text style={styles.timeText}>{item.time}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <ArrowLeft size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notifications</Text>
        <View style={{ width: 24 }} /> {/* Empty view for balance */}
      </View>

      <FlatList
        data={MOCK_NOTIFICATIONS}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Bell size={64} color="#e0e0e0" />
            <Text style={styles.emptyText}>No notifications yet</Text>
            <Text style={styles.emptySubtext}>When you get notifications, they'll show up here.</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  listContainer: {
    flexGrow: 1,
    backgroundColor: '#f8f8f8',
    padding: 10,
  },
  notificationCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  unreadCard: {
    backgroundColor: '#F3E5F5', // Light purple tint for unread
    borderLeftWidth: 3,
    borderLeftColor: '#9C27B0',
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  contentContainer: {
    flex: 1,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    flex: 1,
  },
  unreadText: {
    fontWeight: 'bold',
    color: '#000',
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#9C27B0',
    marginLeft: 8,
  },
  description: {
    fontSize: 13,
    color: '#666',
    marginBottom: 8,
    lineHeight: 18,
  },
  timeText: {
    fontSize: 11,
    color: '#999',
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 100,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 14,
    color: '#757575',
    textAlign: 'center',
  },
});

export default NotificationsScreen;
