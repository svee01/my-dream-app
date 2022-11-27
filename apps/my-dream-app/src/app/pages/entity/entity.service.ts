import { Injectable } from "@angular/core";
import { Movie } from "./entity.model";

@Injectable({
    providedIn: "root",
})
export class EntityService {
    movies: Movie[] = [
        {
            _id: "1",
            title: "Finding Nemo",
            year: 1998,
            rated: "R",
            released: new Date(),
            runtime: 1998,
        },
        {
            _id: "2",
            title: "Yes",
            year: 1998,
            rated: "R",
            released: new Date(),
            runtime: 1998,
        },{
            _id: "3",
            title: "Sir",
            year: 1998,
            rated: "R",
            released: new Date(),
            runtime: 1998,
        },{
            _id: "4",
            title: "Dont",
            year: 1998,
            rated: "R",
            released: new Date(),
            runtime: 1998,
        },{
            _id: "5",
            title: "Die",
            year: 1998,
            rated: "R",
            released: new Date(),
            runtime: 1998,
        },
    ];

    constructor() {
        console.log("EntityService created");
    }

    getAllMovies(): Movie[] {
        return this.movies;
    }

    getMovieById(_id: string): Movie {
        return this.movies.filter((movie: Movie) => movie._id === _id)[0];
    }

    addMovie(newMovie: Movie): void {
        this.movies.push(newMovie);
    }

    updateMovie(updatedMovie: Movie) {
        console.log("Updating movie " + updatedMovie.title);

        let updatedMovies = this.movies.filter(
            (movie) => movie._id !== updatedMovie._id
        );
        updatedMovies.push(updatedMovie);
        this.movies = updatedMovies;

        console.log(this.movies);
    }

    deleteMovie(_id: string) {
        let movie = this.movies.find((movie) => movie._id == _id);
        let index = this.movies.indexOf(movie!);

        console.log(movie?.title);

        this.movies.splice(index, 1);

        console.log(this.movies);
    }
}