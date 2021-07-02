import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Image, StyleSheet } from 'react-native'
import { Text } from 'react-native'
import { View } from 'react-native'
import { Movie } from '../interface/movieinterface'

interface Props {
    movie: Movie;
    height?: number;
    width?: number;
}


export const MoviePoster = ({movie, height=380, width=300}:Props) => {

    const url = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    
    const navigation = useNavigation();

    return (
        
        <TouchableOpacity 
            onPress={()=>navigation.navigate('DetailScreen', movie)}
            activeOpacity={0.8}
            style = {{
                width: width,
                height: height,
                marginHorizontal: 2,
                paddingBottom:20,
                paddingHorizontal:7
            }}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={{
                    uri: url,
                }}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    image: {
        flex:1, 
        borderRadius:18,
    },
    imageContainer:{
        flex:1,
        borderRadius:30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        
        elevation: 24,
    }
});