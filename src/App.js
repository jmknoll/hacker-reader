/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  FlatList,
} from "react-native";

import * as eva from "@eva-design/eva";
import {
  ApplicationProvider,
  Layout,
  Text,
  List,
  Divider,
} from "@ui-kitten/components";

import { Colors } from "react-native/Libraries/NewAppScreen";
import Item from "./components/Item";

import { getTopStories } from "./data";

const App = () => {
  const isDarkMode = useColorScheme() === "dark";
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const topStories = await getTopStories();
      setItems(topStories);
    };

    fetchData();
  }, []);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
        <List data={items} renderItem={Item} ItemSeparatorComponent={Divider} />
      </SafeAreaView>
    </ApplicationProvider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
  },
  highlight: {
    fontWeight: "700",
  },
});

// const Section = ({ children, title }) => {
//   const isDarkMode = useColorScheme() === "dark";
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}
//       >
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}
//       >
//         {children}
//       </Text>
//     </View>
//   );
// };

export default App;
