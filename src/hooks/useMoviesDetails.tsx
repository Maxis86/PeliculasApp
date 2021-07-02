import { useEffect } from "react";
import { useState } from "react";
import movieDB from "../api/movieDB";
import { Cast, CreditsResponse } from "../interface/creditsInterface";
import { MovieDBNowResponse, MovieFull } from '../interface/movieinterface';

interface MovieDetails {
    isLoading: boolean;
    movieFull?: MovieFull;
    cast: Cast[];
}

export const useMoviesDetails = (movieId: number) => {
    const [state, setstate] = useState<MovieDetails>({
        isLoading: true,
        movieFull: undefined,
        cast: []
    });

    // cuando tengo peticiones simultaneas almaceno promesas
    const getMovieDetails = async () => {
        
        
        const movieDetailsPromise =  movieDB.get<MovieFull>(`/${movieId}`)
        const castPromise =  movieDB.get<CreditsResponse>(`/${movieId}/credits`)
        
        const [movieDetailsResp, castPromiseResp] = await Promise.all([movieDetailsPromise, castPromise]);

        setstate({
            isLoading: false,
            movieFull: movieDetailsResp.data,
            cast: castPromiseResp.data.cast
        })
    }

    useEffect(() => {
        getMovieDetails();
    }, []);

    return{
        ...state
    }

}
