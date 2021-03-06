import React from 'react'
import { FlatList, Text } from 'react-native'
import { View } from 'react-native'
import { useMovies } from '../hooks/useMovies'
import { Movie } from '../interface/movieinterface'
import { MoviePoster } from './MoviePoster'

interface Props {
    title?:string;
    movies: Movie[]
}

export const HorizontalSlider = ({title, movies}: Props) => {

    return (
        <View style = {{ height: (title)?260:220}}>

            {
                title && <Text style={{fontSize:30, fontWeight:'bold', marginLeft: 5}}>{title}</Text>
            }
            
            <FlatList
                data={movies}
                renderItem={({item}: any) => (
                    <MoviePoster movie={item} width={140} height={200} />
                )}
                keyExtractor={(item)=> item.id.toString()}
                horizontal= {true} // para ponerlo horizontal
                showsHorizontalScrollIndicator={false} // saco la barra
            />
        </View>
    )
}
