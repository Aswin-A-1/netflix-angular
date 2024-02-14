import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";

const option = {
    params: {
        include_adult: "false",
        include_video: 'true',
        language: 'en-US',
        page: 1,
        sort_by: 'papularity.desc'
    },
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZTg4OWZkOWQ4NTA3NTYxNTJkNzhmN2NkZmRlMmU5OSIsInN1YiI6IjY1Y2IzZDdiMDA1MDhhMDE3YjQyNjZkMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3hl13LM-z5q7XCn4a37tQlRV4XR6UOelV6De1icfens'
    }
}


@Injectable({
    providedIn: 'root'

})
export class MovieSevice {
    http = inject(HttpClient)

    getMovies() {
        return this.http.get<any>('https://api.themoviedb.org/3/discover/movie', option)
    }

    getTvShows() {
        return this.http.get('https://api.themoviedb.org/3/discover/tv', option)
    }

    getRatedMovies() {
        return this.http.get('https://api.themoviedb.org/3/guest_session/guest_session_id/rated/movies', option)
    }

    getBannerImage(id: number) {
        return this.http.get(`https://api.themoviedb.org/3/movie/${id}/images`, option)
    }

    getBannerVideo(id: number) {
        return this.http.get(`https://api.themoviedb.org/3/movie/${id}/videos`, option);
    }

    getBannerDetail(id: number) {
        return this.http.get(`https://api.themoviedb.org/3/movie/${id}`, option);
    }

    getNowPlayingMovies() {
        return this.http.get('https://api.themoviedb.org/3/movie/now_playing', option)
    }

    getPopularMovies() {
        return this.http.get('https://api.themoviedb.org/3/movie/popular', option)
    }

    getTopRated() {
        return this.http.get('https://api.themoviedb.org/3/movie/top_rated', option)
    }

    getUpcomingMovies() {
        return this.http.get('https://api.themoviedb.org/3/movie/upcoming', option)
    }
}