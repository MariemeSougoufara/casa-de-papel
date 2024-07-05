import React from "react";
import tw from 'twrnc';
import { ActivityIndicator } from "react-native";

const Loading = () => {
    return  <View style={tw`flex items-center  mt-40 h-full`}>
    <Text style={tw`text-sm mb-3`}>Loading ...</Text>
    <ActivityIndicator size="large" color="black" />
   </View>
}

export default Loading