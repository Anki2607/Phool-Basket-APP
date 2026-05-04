import React from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import Navbar from '../components/Navbar';
import CategoryBar from '../components/CategoryBar';
import HeroSlider from '../components/HeroSlider';
import ProductGrid from '../components/ProductGrid';

const Footer = () => (
  <View style={styles.footer}>
    <View style={styles.footerLogo}>
      <Text style={[styles.logoText, { color: '#D32F2F' }]}>PHOOL </Text>
      <Text style={[styles.logoText, { color: '#FFA000' }]}>BASKET</Text>
    </View>
    <Text style={styles.footerText}>India's largest gifting platform, delivering emotions since 1999.</Text>
    <View style={styles.footerBottom}>
      <Text style={styles.copyrightText}>© 2026 PHOOL BASKET. All rights reserved.</Text>
    </View>
  </View>
);

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ExpoStatusBar style="dark" />
      <Navbar />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <CategoryBar />
        <HeroSlider />
        
        <View style={styles.promoSection}>
          <View style={styles.promoBanner}>
            <View>
              <Text style={styles.promoTitle}>Express Delivery</Text>
              <Text style={styles.promoSubtitle}>Gifts delivered in 60 minutes.</Text>
            </View>
            <View style={styles.promoBtn}>
              <Text style={styles.promoBtnText}>Explore</Text>
            </View>
          </View>
        </View>

        <ProductGrid title="Same Day Delivery" />
        <ProductGrid title="Trending Now" />
        
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  promoSection: {
    padding: 15,
  },
  promoBanner: {
    backgroundColor: '#FFF8E1',
    borderRadius: 15,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FFECB3',
  },
  promoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#795548',
    marginBottom: 4,
  },
  promoSubtitle: {
    fontSize: 12,
    color: '#8D6E63',
  },
  promoBtn: {
    backgroundColor: '#795548',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },
  promoBtnText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  footer: {
    backgroundColor: '#2D3436',
    padding: 30,
    marginTop: 20,
    alignItems: 'center',
  },
  footerLogo: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  footerText: {
    color: '#B2BEC3',
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 18,
  },
  footerBottom: {
    borderTopWidth: 1,
    borderTopColor: '#444',
    paddingTop: 15,
    width: '100%',
    alignItems: 'center',
  },
  copyrightText: {
    color: '#636E72',
    fontSize: 10,
  },
});

export default HomeScreen;
