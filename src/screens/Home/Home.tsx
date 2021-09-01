import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, FlatList, View } from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';

import { DefaultButton, Header, Separator, Typography } from '../../components';
import styles from './styles';

import { getAllBooks } from '../../services';
import { goToScreen } from '../../navigation/controls';
import { colors } from '../../utils/theme';

const goToExperimentalScreen = () => {
  goToScreen('Experimental');
};

const ListItem = ({ title }: { title: string }) => (
  <View style={styles.listItemContainer}>
    <Typography>{title}</Typography>
  </View>
);

const flatlistKeyExtractor = (item: Book) => `${item.id}`;

const renderFlatlistItem = ({ item }: { item: Book }) => <ListItem title={item.title} />;

const HomeScreen = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const netInfo = useNetInfo();

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

  if (!netInfo.isConnected) {
    return (
      <View style={styles.wholeScreenCenter}>
        <Typography size={20}>You don't have internet :'(</Typography>
      </View>
    );
  }

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
      <Header showBackButton={false} title="Home Screen" />
      <View style={styles.mainContainer}>
        <Separator size={20} />
        <DefaultButton text="Go To Experimental Screen" onPress={goToExperimentalScreen} />
        <Separator size={20} />
        <FlatList
          keyExtractor={flatlistKeyExtractor}
          refreshing={loading}
          onRefresh={getBooksData}
          data={books}
          renderItem={renderFlatlistItem}
          style={styles.flatList}
        />
      </View>
    </>
  );
};

export default HomeScreen;
