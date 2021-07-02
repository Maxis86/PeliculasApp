import React from 'react'
import { Image, ActivityIndicator, TouchableOpacity } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { Dimensions, ScrollView } from 'react-native';
import { RootStackParams } from '../navigation/Navigation';

import { useMoviesDetails } from '../hooks/useMoviesDetails';
import { MovieDetails } from '../components/MovieDetails';
import  Icon  from 'react-native-vector-icons/Ionicons';

const screenHeight = Dimensions.get('screen').height;

interface Props extends StackScreenProps <RootStackParams,'DetailScren'> {};

export const DetailScreen = ({route, navigation}:Props) => {

    const movie = route.params;
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const {isLoading, cast, movieFull} = useMoviesDetails (movie.id)

    console.log(movieFull)

    return (
        <ScrollView>      
             
            <View style={styles.imageContainer}>
                <View style={styles.imageBorder}>
                    <Image
                        source={{uri}}
                        style={styles.posterImage}
                    />
                </View>
            </View>
            <View style = {styles.marginContainer}>
                <Text style={styles.subTitle}>{movie.original_title}</Text>
                <Text style={styles.title}>{movie.title}</Text>
            </View>
            
            {
                isLoading
                    ?<ActivityIndicator size={ 35 } color="grey" style={{marginTop: 20}}/>
                    :<MovieDetails movieFull= {movieFull!} cast={cast}/>
            }   
        
            {/* Boton Regresar */}
            
            <TouchableOpacity 
                onPress={()=>navigation.pop()}
                style={styles.backBottom}
            >
                <Icon
                    color="white"
                    name="arrow-back-outline"
                    size={50}
                />
            </TouchableOpacity>
            
            
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    imageContainer:{
        width: '100%',
        height: screenHeight * 0.8,
        overflow:'hidden',
        //paddingBottom: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,
        
        elevation: 9,

        borderBottomEndRadius:25,
        borderBottomStartRadius:25
    },
    imageBorder:{
        flex:1,
        overflow: 'hidden',
        borderBottomEndRadius:25,
        borderBottomStartRadius:25
    },
    posterImage:{
        flex:1,
    },
    marginContainer:{
        marginHorizontal:20,
        marginTop: 20
    },
    subTitle:{
        fontSize:16,
        opacity: 0.8
    },
    title:{
        fontSize:20,
        fontWeight: 'bold'
    },
    backBottom:{
        position:'absolute',
        elevation:9,
        top: 10,
        left: 10
    }
});
