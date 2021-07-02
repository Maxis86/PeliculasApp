import React from 'react'
import { View, Text, FlatList } from 'react-native'
import movieDB from '../api/movieDB'
import { Cast } from '../interface/creditsInterface'
import { MovieFull } from '../interface/movieinterface';
import Icon from 'react-native-vector-icons/Ionicons';
import currencyFormatter from 'currency-formatter';
import { CastItem } from './CastItem';

interface Props {
    movieFull: MovieFull;
    cast: Cast[];
}

export const MovieDetails = ({movieFull,cast}:Props) => {
    return (
        <>
            <View style={{marginHorizontal: 20}}>
                
                <View style={{flexDirection: 'row'}}>
                    <Icon
                        name="star-outline"
                        color="grey"
                        size={16}
                    />
                    <Text style={{marginLeft: 5}}>{movieFull.vote_average}</Text>
                    <Text style={{marginLeft: 10}}>
                        - {movieFull.genres.map( g => g.name).join(', ')}
                    </Text>
                </View>
                
                <View style={{marginTop:10}}>
                    <Text style={{fontSize:20, marginTop:10, fontWeight:'bold'}}>
                        Historia
                    </Text>
                    
                    <Text style={{fontSize: 15}}>{movieFull.overview}</Text>

                    <Text style={{fontSize:20, marginTop:10, fontWeight:'bold'}}>
                        Presupuesto
                    </Text>
                    
                    <Text style={{fontSize: 15}}>{currencyFormatter.format(movieFull.budget, { code: 'USD' })}</Text>
                
                        <Text style={{fontSize:20, marginTop:10, fontWeight:'bold', marginHorizontal:20}}>
                            Actores
                        </Text>

                        <FlatList
                            data= {cast}
                            keyExtractor ={(item)=> item.id.toString()}
                            renderItem={({item})=> <CastItem actor={item}/> }
                            horizontal={true}
                        />
                        {/* <CastItem
                            actor={cast[0]}
                        /> */}
                </View>
            
            </View>
            
           
        
        
        </>
    )
}
