
import React from "react"
import { View, Text, Touchable, TouchableOpacity} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import tw from "twrnc";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { listOfOperations } from "../utils/utils";

const AllOperationPage = () => {


return <SafeAreaView style={tw``} >
            <View style={tw`p-3 500 gap-2 flex-row flex-wrap`}>
                {listOfOperations.map((item) => {
                    return <TouchableOpacity style={tw`rounded-md shadow-md bg-blue-200 p-2 justify-center align-center bg-gray-100 w-30`}>
                        <Icon name={item.iconName} size={24} color="red" />
                        <Text>{item.title}</Text>
                    </TouchableOpacity>
                })}
            </View>
    </SafeAreaView>
} 


export default AllOperationPage