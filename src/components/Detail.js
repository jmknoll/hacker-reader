import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { WebView } from "react-native-webview";

const Detail = ({ route }) => {
  console.log(route.params);
  return <WebView source={{ uri: route.params.url }} />;
};

export default Detail;
