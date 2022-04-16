import { View, Text,SafeAreaView ,Image,TouchableOpacity} from 'react-native'
import React from 'react'

export default function CardOne({image,title,onPressed,id}) {
  console.log(id)
  return (
    <SafeAreaView>
   <TouchableOpacity onPress={onPressed}>
    <View style={{marginHorizontal:14}}>
      <Image source={{uri:image?`https://image.tmdb.org/t/p/w500/${image}`:"https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/title-key-art/umma_onesheet_1400x2100_temp_final.jpg?itok=BIHMkdsD"}} style={{width:100,height:190,borderRadius:10}}/>
      <Text numberOfLines={1} style={{textAlign:'center',marginTop:3,color:'white',fontWeight:'500',width:100}}>{title}</Text>
    </View>
    </TouchableOpacity>
    </SafeAreaView>
  )
}