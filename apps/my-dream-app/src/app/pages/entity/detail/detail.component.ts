import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Movie } from "../entity.model";
import { EntityService } from "../entity.service";

@Component({
    selector: "app-details",
    templateUrl: "./details.component.html",
    styleUrls: ["./details.component.css"],
})
export class DetailComponent implements OnInit {
    componentId: string | null | undefined;
    movie: Movie | undefined;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private userService: EntityService
    ) {}

    ngOnInit(): void {
        /**
         * We gebruiken de EditComponent om een bestaande record te wijzigen
         * én om een nieuwe record te maken.
         * Een bestaande record heeft een :id in de URL, bv '/users/1/edit'
         * Als die er dus is gaan we de user ophalen en bewerken.
         * Als er geen :id in de URL zit (via '/users/new') maken we een nieuwe record.
         */
        this.route.paramMap.subscribe((params) => {
            this.componentId = params.get("_id");
            if (this.componentId) {
                // Bestaande user
                console.log("Bestaande component");
                this.movie = this.userService.getMovieById(this.componentId);
            } else {
                // Nieuwe user
                console.log("Nieuwe component");
            }
        });
    }

    deleteUser(_id: string) {
      this.userService.deleteMovie(_id);
    }
}