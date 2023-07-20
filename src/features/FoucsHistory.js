import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { colors } from '../utils/colors';
import { fontSizes, spacing } from '../utils/sizes';

export const FoucsHistory = ({ history }) => {
  if (!history || !history.length) return <Text style={styles.title}>We have not foucs in anything yet! </Text>;
  const renderItem = ({ item }) => <Text>- {item}</Text>;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Things we have foucused on: </Text>
      <FlatList data={history} renderItem={renderItem} style={styles.item} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.md,
  },
  title: {
    color: colors.black,
    fontSize: fontSizes.md,
    // textAlign: 'center',
    fontWeight: 'bold',
  },
  item: {
    color: colors.black,
    fontSize: fontSizes.md,
    paddingTop: spacing.md,
  },
});
