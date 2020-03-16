import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StarComponent } from "./star.component";

@NgModule({
    declarations: [StarComponent],
    exports: [StarComponent, CommonModule, FormsModule],
    imports: [CommonModule]
})
export class SharedModule {}
