import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, ScrollView, SafeAreaView, View } from 'react-native';

import { DefaultButton, Header, Separator, Typography } from '../../components';
import styles from './styles';

import { getAllBooks } from '../../services';
import { goToScreen } from '../../navigation/controls';
import { colors } from '../../utils/theme';

const goToExperimentalScreen = () => {
  goToScreen('Experimental');
};

const HomeScreen = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const getBooksData = async () => {
    setLoading(true);
    try {
      const { success, data } = await getAllBooks();
      if (success) {
        setBooks(data);
      } else {
        Alert.alert('Error getting books on Home Screen');
      }
    } catch (error) {
      console.log('Error getting books on Home Screen', error);
      Alert.alert('Error getting books on Home Screen');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBooksData();
  }, []);

  if (loading) {
    return (
      <>
        <Header showBackButton={false} title="Home Screen" />
        <View style={styles.wholeScreenCenter}>
          <ActivityIndicator size="large" color={colors.mainOrange} />
        </View>
      </>
    );
  }

  return (
    <>
      <SafeAreaView />
      <ScrollView style={styles.scrollView}>
        <View style={styles.mainContainer}>
          <Typography size={20} variant="bold">
            Home Screen
          </Typography>
          <Separator size={10} />
          <DefaultButton text="Go To Experimental Screen" onPress={goToExperimentalScreen} />
          <Typography>{JSON.stringify(books, null, 2)}</Typography>
        </View>
      </ScrollView>
    </>
  );
};

export default HomeScreen;
