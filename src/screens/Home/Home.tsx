import React, { useCallback, useState } from 'react';
import { ActivityIndicator, FlatList, TouchableOpacity, View } from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';

import { DefaultButton, Header, Separator, Typography } from '../../components';
import styles from './styles';

import { goToScreen } from '../../navigation/controls';
import { colors } from '../../utils/theme';
import { IS_ANDROID } from '../../utils/constants';
import useBooksData from './hooks/useBooksData';

const goToExperimentalScreen = () => {
  goToScreen('Experimental');
};

const ListItem = ({ id, title }: { id: number; title: string }) => (
  <TouchableOpacity onPress={() => goToScreen('BookDetails', { id, title })}>
    <View style={styles.listItemContainerShadow}>
      <View style={[styles.listItemContainer, IS_ANDROID ? styles.listItemContainerShadow : null]}>
        <Typography numberOfLines={2} align="center">
          {title}
        </Typography>
      </View>
    </View>
  </TouchableOpacity>
);

const flatlistKeyExtractor = (item: Book) => `${item.id}`;

const renderFlatlistItem = ({ item }: { item: Book }) => (
  <ListItem id={item.id} title={item.title} />
);

const HomeScreen = () => {
  const [refreshFlag, setRefreshFlag] = useState<boolean>(false);
  const { books, loading, errorOccurred } = useBooksData(refreshFlag);

  const netInfo = useNetInfo();

  const toggleRefreshFlag = useCallback(() => {
    setRefreshFlag(!refreshFlag);
  }, [refreshFlag]);

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

  if (errorOccurred) {
    return (
      <View style={styles.wholeScreenCenter}>
        <Typography size={20}>An unknown error occurred :'(</Typography>
        <Separator size={15} />
        <DefaultButton text="Retry" onPress={toggleRefreshFlag} />
      </View>
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
          onRefresh={toggleRefreshFlag}
          data={books}
          renderItem={renderFlatlistItem}
          ItemSeparatorComponent={Separator}
          contentContainerStyle={styles.flatlistContent}
          style={styles.flatList}
        />
      </View>
    </>
  );
};

export default HomeScreen;
