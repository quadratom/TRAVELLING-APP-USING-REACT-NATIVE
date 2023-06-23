import { SafeAreaView, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { HeroImage } from '../assets';

const HomeScreen = () => {
   const navigation = useNavigation();

   useLayoutEffect(() => {
      navigation.setOptions({
         headerShown : false
      })
   }, [])
      
  return (
     <SafeAreaView className="bg-white flex-1 relative" >
        {/* First Section */}
        <View className="flex-row px-6 mt-8 items-center space-x-2 ">
           <View className="w-16 h-16 bg-black rounded-full items-center justify-center">
              <Text className="text-[#00BCC9] text-3xl font-semibold">Go</Text>
           </View>

           <Text className="text-[#2A2B4B] text-3xl font-semibold" >Travel</Text>

        </View>
        
        {/* Seccond Section */}
        <View className="px-6 mt-8 space-y-3" >
           <Text className="text-[#3C6072] text-[42px]" >Enjoy the trip with</Text>
           <Text className="text-[#00BCC9] text-[38px] font-bold" >Good Moment</Text>
        
           <Text  className="text-[#3C6072] text-bold" >
              Travel to diffrent country you wish to Go, with 
              your family and friend. Pick up your things and let Go
              there.
          </Text>
        </View>

        {/* Cricle Section */}
         <View className="w-[400px] h-[400px] bg-[#00BCC9] rounded-full absolute bottom-36 -right-36" ></View>
         <View className="w-[400px] h-[400px] bg-[#E99256] rounded-full absolute -bottom-28 -left-36" ></View>
        
        {/* Image container */}
        <View className="flex-1 relative items-center justify-center">
           <Image
              animation="fadeIn"
              easing="ease-in-out"
              source={HeroImage}
              className="w-full h-full object-cover mt-20"
           />

        {/* Go  */}
        
           <TouchableOpacity
            onPress={() => navigation.navigate("Discover")}
            className="absolute bottom-20 w-28 h-28 border-r-2 border-l-2 border-t-4 border-[#00BCC9] 
            items-center justify-center  rounded-full">
               <Animatable.View
                  animation={"pulse"}
                  easing="ease-in-out"
                  iterationCount={"infinite"}
                  className="w-24 h-24 bg-[#00BCC9] items-center justify-center rounded-full ">
                     
                  <Text className=" text-gray-50 text-[34px] font-semibold ">Go</Text>
               </Animatable.View>
              
         </TouchableOpacity>
              
           
        </View>
     </SafeAreaView>
  )
}

export default HomeScreen