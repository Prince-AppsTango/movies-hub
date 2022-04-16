import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  FlatList,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CardOne from '../component/CardOne';
import {useQuery} from 'react-query';
import axios from 'axios';
export default function MovieScreen({navigation}) {
  const query = useQuery(
    'realesemovies',
    () =>
      axios.get(
        'https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=a1d2ebb96cfbc89d079c0ab2b2a1203d',
      ),
    {},
  ); 
  const populerMovies = useQuery(
    'populerMovies',
    () =>
      axios.get(
        'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=a1d2ebb96cfbc89d079c0ab2b2a1203d',
      ),
    {},
  );
  const comedyMovies = useQuery(
    'comedyMovies',
    () =>
      axios.get(
        'https://api.themoviedb.org/3/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc&api_key=a1d2ebb96cfbc89d079c0ab2b2a1203d',
      ),
    {},
  );
  const dramaMovies = useQuery(
    'dramaMovies',
    () =>
      axios.get(
        'https://api.themoviedb.org/3/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10&api_key=a1d2ebb96cfbc89d079c0ab2b2a1203d',
      ),
    {},
  );
  const kidsMovies = useQuery(
    'kidsMovies',
    () =>
      axios.get(
        'https://api.themoviedb.org/3/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=a1d2ebb96cfbc89d079c0ab2b2a1203d',
      ),
    {},
  );//https://api.themoviedb.org/3/movie/76341?api_key=a1d2ebb96cfbc89d079c0ab2b2a1203d
  //https://api.themoviedb.org/3/movie/157336?api_key=a1d2ebb96cfbc89d079c0ab2b2a1203d&append_to_response=videos,images
  //https://image.tmdb.org/t/p/w500/tEiIH5QesdheJmDAqQwvtN60727.png
    // console.log(JSON.stringify(query?.data?.data?.results,null,4))
  return (
    <SafeAreaView style={{backgroundColor: '#21283B'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
        }}>
        <AntDesign name="menuunfold" size={20} color={'white'} />
        <AntDesign name="search1" size={20} color={'white'} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginHorizontal: 20,
              marginVertical: 15,
            }}>
            <View>
              <Text style={styles.title}>New releases</Text>
              <Text style={styles.subtitle}>Catch the latest Movies</Text>
            </View>
            <Text style={styles.title}>View All</Text>
          </View>
          <FlatList
            data={query?.data?.data?.results}
            horizontal={true}
            initialNumToRender={7}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            legacyImplementation={false}
            keyExtractor={(e )=> e.id}
            renderItem={({item}) => <CardOne image={item.poster_path} title={item.title} id={item?.id} onPressed={()=>navigation.push("Preview",{id:item?.id})}/>}
          />
        </View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginHorizontal: 20,
              marginVertical: 15,
            }}>
            <View>
              <Text style={styles.title}>Populer movies</Text>
              <Text style={styles.subtitle}>Catch the latest Movies</Text>
            </View>
            <Text style={styles.title}>View All</Text>
          </View>
          <FlatList
            data={populerMovies?.data?.data?.results}
            horizontal={true}
            pagingEnabled={true}
            initialNumToRender={7}
            showsHorizontalScrollIndicator={false}
            legacyImplementation={false}
            keyExtractor={e => e.id}
            renderItem={({item}) => <CardOne image={item.poster_path} title={item.title} onPressed={()=>navigation.push("Preview",{id:item?.id})}/>}
          />
        </View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginHorizontal: 20,
              marginVertical: 15,
            }}>
            <View>
              <Text style={styles.title}>Comedy movies</Text>
              <Text style={styles.subtitle}>Catch the latest Movies</Text>
            </View>
            <Text style={styles.title}>View All</Text>
          </View>
          <FlatList
            data={comedyMovies?.data?.data?.results}
            horizontal={true}
            pagingEnabled={true}
            initialNumToRender={7}
            showsHorizontalScrollIndicator={false}
            legacyImplementation={false}
            keyExtractor={e => e.id}
            renderItem={({item}) => <CardOne image={item.poster_path} title={item.title} onPressed={()=>navigation.push("Preview",{id:item?.id})}/>}
          />
        </View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginHorizontal: 20,
              marginVertical: 15,
            }}>
            <View>
              <Text style={styles.title}>Drama movies</Text>
              <Text style={styles.subtitle}>Catch the latest Movies</Text>
            </View>
            <Text style={styles.title}>View All</Text>
          </View>
          <FlatList
            data={dramaMovies?.data?.data?.results}
            horizontal={true}
            pagingEnabled={true}
            initialNumToRender={7}
            showsHorizontalScrollIndicator={false}
            legacyImplementation={false}
            keyExtractor={e => e.id}
            renderItem={({item}) => <CardOne image={item.poster_path} title={item.title} onPressed={()=>navigation.push("Preview",{id:item?.id})}/>}
          />
        </View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginHorizontal: 20,
              marginVertical: 15,
            }}>
            <View>
              <Text style={styles.title}>Kids movies</Text>
              <Text style={styles.subtitle}>Catch the latest Movies</Text>
            </View>
            <Text style={styles.title}>View All</Text>
          </View>
          <FlatList
            data={kidsMovies?.data?.data?.results}
            horizontal={true}
            pagingEnabled={true}
            initialNumToRender={7}
            showsHorizontalScrollIndicator={false}
            legacyImplementation={false}
            keyExtractor={e => e.id}
            renderItem={({item}) => <CardOne image={item.poster_path} title={item.title} onPressed={()=>navigation.push("Preview",{id:item?.id})}/>}
          />
        </View>
        <View style={{borderWidth:1,margin:25,padding:20,borderRadius:25,backgroundColor:'black'}}>
            <Text style={{textAlign:'center',color:'white',fontSize:18,fontWeight:'bold'}}>Welcome to the MoviesHub</Text>
            <AntDesign name="doubleright" size={20} color={'white'} style={{position:'absolute',right:20,bottom:20}}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    color: 'white',
    fontSize: 15,
    fontWeight: '500',
  },
  subtitle: {
    color: 'white',
    fontWeight: '300',
    fontSize: 12,
  },
});
