import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";

import { ListItem } from "@ui-kitten/components";

const Item = ({ item, navigation }) => {
  return (
    <ListItem
      title={item.title}
      description={item.url}
      onPress={() => navigation.navigate("Detail", { url: item.url })}
    />
  );
};

export default Item;

/*
todo
- fully populate cards with relevant data
- infinite scroll
- header bar with settings
- dark mode
- intuitive mobile-first navigation to get between different pages
- ability to favorite cards
- view commentsll
*/
