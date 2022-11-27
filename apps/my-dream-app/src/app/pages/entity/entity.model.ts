import { run } from "nx/src/command-line/run";
import { last } from "rxjs";

export class Movie {
    _id: string | undefined;
    title: string | undefined;
    year: number | undefined;
    rated: string | undefined;
    released: Date | undefined;
    runtime: number | undefined;
    // countries: string[] | undefined;
    // genres: string[] | undefined;
    // director: string | undefined;
    // actors: string[] | undefined;
    // writers: string[] | undefined;
    // plot: string | undefined;
    // poster: string | undefined;

    constructor(_id: string, title: string, year: number, rated: string, released: Date, runtime: number) {
        this._id = _id;
        this.title = title;
        this.year = year;
        this.rated = rated;
        this.released = released;
        this.runtime = runtime;
        // this.countries = countries;
        // this.genres = genres;
        // this.director = director;
        // this.actors = actors;
        // this.writers = writers;
        // this.plot = plot;
        // this.poster = poster;
    }
}