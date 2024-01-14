import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Housinglocation } from '../housinglocation';
import { HuosingService } from '../huosing.service';
import { FormControl,FormGroup,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  route:ActivatedRoute = inject(ActivatedRoute);
  housingService=inject(HuosingService);
  housingLocationId=-1;
  housingLocation:Housinglocation|undefined;

  applyForm=new FormGroup({
    firstName:new FormControl(''),
    lastName:new FormControl(''),
    email:new FormControl(''),
  })

  constructor(){
    this.housingLocationId=Number(this.route.snapshot.params['id'])
    this.housingService.getHousingLocationById(this.housingLocationId).then((housingLocation)=>{
      this.housingLocation=housingLocation
    })
  }
  submitApplication(){
    this.housingService.sumbitApplication(
      this.applyForm.value.firstName??'',
      this.applyForm.value.lastName??'',
      this.applyForm.value.email??'',
    )
  }
}
