import { Component, Input } from "@angular/core";

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent {
    @Input() rating: number;
    startWith: number;

    ngOnChanges(): void {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add '${implements OnChanges}' to the class.
        this.startWith = this.rating * 75 / 5;
    }
}
