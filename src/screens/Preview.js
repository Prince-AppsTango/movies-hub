import { View, Text,SafeAreaView,Image ,TouchableOpacity} from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useQuery,useQueryClient,QueryCache} from 'react-query';
import CardOne from '../component/CardOne'
 image=``
export default function Preview({navigation,contentSource,route}) {
  const[heart,setHeart]=React.useState(false)
  const client = useQueryClient();
  const data =client.getQueryData("realesemovies")
  const oneData= data?.data?.results.filter((item)=>item?.id===route.params.id)
  console.log(">>>>>>>>>>>>>>.",oneData[0])
  return (
    <View >
          <View style={{zIndex:1,marginTop:50,position:'absolute',flexDirection:'row',justifyContent:'space-between'}}>
            <Ionicons onPress={()=>navigation.pop()} name="chevron-back-outline" size={25} color="white"style={{position:'absolute',left:10}}/>
           {heart===false? <Ionicons name="heart-outline" onPress={()=>setHeart(true)} size={25}color="white" style={{position:'absolute',left:350}}/> 
            :<Ionicons name="ios-heart" size={25}color="red" style={{position:'absolute',left:350}}/> }       
            </View>
      <Image source={{uri:`https://image.tmdb.org/t/p/w500/${oneData[0]?.poster_path}`}} style={{width:390,height:undefined,aspectRatio:1}}/>
   <View style={{margin:16}}>
       <Text style={{color:"black",fontSize:18,fontWeight:'bold'}}>{oneData[0]?.original_title}</Text>
       <Text numberOfLines={3} style={{color:'black',fontSize:15,marginTop:5}}>{oneData[0]?.overview}</Text>
   </View>
   <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginHorizontal:20,marginVertical:15}}>
         <Text >Cast</Text>
       <Text >View All</Text>
   </View>
   <CardOne/>
   <View style={{margin:16,alignItems:'center'}}>
       <TouchableOpacity style={{borderWidth:0.5,alignItems:'center',padding:10,width:100,borderRadius:20}}>
           <Text>Book Now</Text>
       </TouchableOpacity>
   </View>
    </View>
  )
}