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

const Item = ({ item }) => {
  return <ListItem title={item.title} description={item.url} />;
};

export default Item;
