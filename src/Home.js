import React, { useState, useEffect } from "react";

import { View, Text } from "react-native";

import { List, Divider } from "@ui-kitten/components";

import { Colors } from "react-native/Libraries/NewAppScreen";
import Item from "./components/Item";

import { getTopStories } from "./data";
import { WebView } from "react-native-webview";

const Home = ({ navigation }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const topStories = await getTopStories();
      setItems(topStories);
    };

    fetchData();
  }, []);

  return (
    <View>
      <List
        data={items}
        renderItem={(props) => <Item {...props} navigation={navigation} />}
        ItemSeparatorComponent={Divider}
      />
    </View>
  );
};

export default Home;
