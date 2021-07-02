
import React from 'react'
import { Dimensions, FlatList, ScrollView } from 'react-native';
import {ActivityIndicator, View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Carousel from 'react-native-snap-carousel';
import { HorizontalSlider } from '../components/HorizontalSlider';

import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';

const windowWidth = Dimensions.get('window').width;

export const HomeScreen = () => {

    const {nowPlaying, popular, topRated, upcoming, isLoading} = useMovies();
    const {top} = useSafeAreaInsets();

    if (isLoading){
        return(
            <View style={{ flex:1, justifyContent:'center', alignContent:'center'}}>
                <ActivityIndicator color="red" size={50}/>
            </View>
        )
    }

    return (

        <ScrollView>
            <View style = {{ marginTop: top + 20}}>

                {/* Carosel Principal */}
                <View style={{height:440}}>
                    <Carousel
                        layout={'default'}
                        data={nowPlaying!}
                        renderItem={({item}: any) => <MoviePoster movie={item}/>}
                        sliderWidth={windowWidth}
                        itemWidth={300}
                        inactiveSlideOpacity={0.9}
                    />
                </View>

                <HorizontalSlider title= "Populares" movies={popular!}/>
                <HorizontalSlider title= "Top Rated" movies={topRated!}/>
                <HorizontalSlider title= "Upcoming" movies={upcoming!}/>
                

            </View>
        </ScrollView>
    )
}
