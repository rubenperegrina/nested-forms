import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RatingNameComponent } from './components/rating-name/rating-name.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RatingNameComponent, StarRatingComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	formGroup = new FormGroup({
		title: new FormControl('El señor de los anillos', Validators.required),
		rating: new FormControl(4, Validators.min(3)),
		ratingName: new FormControl({ name: 'Juan', rating: 5 })
	});

	clickSave(): void {
		console.log('valid--> ', this.formGroup.valid);
		console.log('valid--> ', this.formGroup.controls.ratingName.errors);
	}
}
