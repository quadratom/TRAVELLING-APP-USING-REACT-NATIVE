import React from 'react'
import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import  { useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Attractions, Avatar, Hotels, NotFound, Restaurants } from '../assets';
import MenuContainer from '../components/MenuContainer';
import { FontAwesome } from '@expo/vector-icons';
import ItemCarContainer from '../components/ItemCarContainer';

const Discover = () => {
  
  const navigation = useNavigation();

  const [type, setType] = useState("restaurants")
  const [loading, setLoading] = useState(false);
  const [mainData, setMainData] = useState([])

   useLayoutEffect(() => {
      navigation.setOptions({
         headerShown : false
      })
   }, [])
  return (
    <SafeAreaView className="flex-1 bg-white relative" >
      <View className="flex-row  items-center justify-between px-8 mt-4" >
        <View>
          <Text className="text-[40px] text-[#00BCC9] font-bold">Discover</Text>
          <Text className="text-[#527283] text-[38px]" >the beauty today</Text>
        </View>
        
        <View className="w-12 h-12 bg-gray-500 rounded-md items-center justify-center shadow-lg ">
          <Image
            source={Avatar}
            className="w-full h-full rounded-md object-cover"
          />
        </View>
      </View>

      <View className="flex-row items-center bg-white-600 mx-4 rounded-xl py-1 px-4 shadow-lg mt-4">
        <GooglePlacesAutocomplete
            placeholder='Search'
            onPress={(data, details = null) => {
              // 'details' is provided when fetchDetails = true
            console.log(data, details);
            }}
            query={{
            key: 'AIzaSyDWpuVw2apN-XgX3gmrzsHrZgr1AG4sCxQ',
            language: 'en',
      }}
    />
      </View>

      {/* New Container */}
      {loading ? (
      <View className="flex-1 items-center justify-center">
          <ActivityIndicator size="large" color="#527283" />
          {/* #0B64GB */}
        </View>
      ) : (
           <ScrollView>
        <View className="flex-row items-center justify-between px-8 mt-8">
          <MenuContainer
            key={"hotel"}
            title="Hotels"
            imageSrc={Hotels}
            type={type}
            setType={setType}
          />
           <MenuContainer
            key={"attractions"}
            title="Attractions"
            imageSrc={Attractions}
            type={type}
            setType={setType}
          />
           <MenuContainer
            key={"restaurants"}
            title="Restaurants"
            imageSrc={Restaurants}
            type={type}
            setType={setType}
          />

        </View>
        <View>
          <View className="flex-row items-center justify-between px-4 mt-8">
            <Text className="text-[#2C7379] text-[28px] font-bold">Top Tips</Text>
            <TouchableOpacity  className="flex-row items-center justify-center space-x-2">
              <Text className="text-[#A0C4C7] text-[20px] font-bold">Explore</Text>
              <FontAwesome name="long-arrow-right" size={24} color="#A0C4C7" />
            </TouchableOpacity>
          </View>
        </View>

        <View  className="px-4 mt-8 flex-row items-center justify-evenly flex-wrap">
              {mainData?.length > 0 ? (
                <>
                   <ItemCarContainer
                      key={"101"}
                      imageSrc={"https://cdn.pixabay.com/photo/2017/01/18/16/46/hong-kong-1990268_1280.jpg"}
                      title="My Beautifull City"
                      location="Ibadan city"
                    />
                    <ItemCarContainer
                      key={"102"}
                      imageSrc={"https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg"}
                      title="Lovely City"
                      location="Lagos city"
                    />
                </>
              ) : (
                  <>
                    <View className="w-full h-[400px] items-center space-y-8 justify-center">
                      <Image
                        source={NotFound}
                        className="w-32 h-32 object-cover"
                      />
                      <Text className="text-2xl text-[#428288] font-bold">
                        Oops...No Data Found</Text>
                    </View>
                  </>
              )}
        </View>
      </ScrollView>
      )
     
        }
    </SafeAreaView>
  )  
}

export default Discover