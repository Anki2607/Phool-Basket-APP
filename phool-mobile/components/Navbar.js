import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Search, MapPin, Heart, ShoppingCart, User, Bell } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { useCart } from '../context/CartContext';
import { useFavorites } from '../context/FavoritesContext';

const Navbar = () => {
  const navigation = useNavigation();
  const { cartCount } = useCart();
  const { favorites } = useFavorites();
  const favCount = favorites.length;

  return (
    <View style={styles.navbar}>
      <View style={styles.topRow}>
        <TouchableOpacity 
          style={styles.logoContainer}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={[styles.logoText, { color: '#D32F2F' }]}>PHOOL </Text>
          <Text style={[styles.logoText, { color: '#FFA000' }]}>BASKET</Text>
        </TouchableOpacity>
        <View style={styles.actions}>
          <TouchableOpacity 
            style={styles.actionItem}
            onPress={() => navigation.navigate('Notifications')}
          >
            <Bell size={20} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.actionItem}
            onPress={() => navigation.navigate('Favorites')}
          >
            <View>
              <Heart size={20} color="#333" />
              {favCount > 0 && (
                <View style={styles.cartBadge}>
                  <Text style={styles.cartBadgeText}>{favCount}</Text>
                </View>
              )}
            </View>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.actionItem}
            onPress={() => navigation.navigate('Cart')}
          >
            <View>
              <ShoppingCart size={20} color="#333" />
              {cartCount > 0 && (
                <View style={styles.cartBadge}>
                  <Text style={styles.cartBadgeText}>{cartCount > 99 ? '99+' : cartCount}</Text>
                </View>
              )}
            </View>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.actionItem}
            onPress={() => navigation.navigate('Profile')}
          >
            <User size={20} color="#333" />
          </TouchableOpacity>
        </View>
      </View>
      
      <View style={styles.searchContainer}>
        <TouchableOpacity style={styles.locationPicker}>
          <MapPin size={16} color="#D32F2F" />
          <Text style={styles.locationText} numberOfLines={1}>Select Location</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.searchBar}
          onPress={() => navigation.navigate('Search')}
        >
          <Text style={styles.searchPlaceholder}>Search for gifts...</Text>
          <Search size={18} color="#757575" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: '#fff',
    paddingTop: 10,
    paddingBottom: 15,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  logoContainer: {
    flexDirection: 'row',
  },
  logoText: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  actions: {
    flexDirection: 'row',
    gap: 15,
  },
  actionItem: {
    padding: 5,
  },
  cartBadge: {
    position: 'absolute',
    top: -5,
    right: -10,
    backgroundColor: '#D32F2F',
    borderRadius: 10,
    paddingHorizontal: 4,
    minWidth: 15,
    alignItems: 'center',
    zIndex: 10,
  },
  cartBadgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    borderRadius: 25,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#eee',
  },
  locationPicker: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 10,
    borderRightWidth: 1,
    borderRightColor: '#ddd',
    marginRight: 10,
    maxWidth: 120,
  },
  locationText: {
    fontSize: 12,
    color: '#757575',
    marginLeft: 5,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 40,
  },
  searchPlaceholder: {
    fontSize: 14,
    color: '#757575',
  }
});

export default Navbar;
