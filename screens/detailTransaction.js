import React from "react";
import { SafeAreaView, View,Text} from "react-native";
import tw from 'twrnc';


const DetailTransaction = () => {
    return <SafeAreaView style={tw`p-5`}>
        <View>
            <Text>
                5000 FCFA
            </Text>
            <Text>De omar s 775657876</Text>
        </View>
       <View style={tw`bg-white mt-5 p-2`}>
            <View style={tw`flex-row justify-between p-1`}>
                    <Text>Montant recu</Text>
                    <Text>1000 FCFA</Text>
            </View>
            <View style={tw`flex-row justify-between p-1`}>
                <Text>Date Transaction</Text>
                <Text>31-05-2023</Text>
            </View>

            <View style={tw`flex-row justify-between p-1`}>
                <Text>Numero Transaction</Text>
                <Text>N377847836363</Text>
            </View>
            <View>
                <Text></Text>
            </View>
       </View>
    </SafeAreaView>
}

export default DetailTransaction;