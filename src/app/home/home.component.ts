import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { Housinglocation } from '../housinglocation';
import { HuosingService } from '../huosing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  housingLocationList:Housinglocation[]=[];
  private housingService:HuosingService= inject(HuosingService);
  filteredLocationList:Housinglocation[]= [];
  constructor(){
    this.housingService.getAllHousingLocation().then((housingLocationList:Housinglocation[])=>{
      this.housingLocationList=housingLocationList
      this.filteredLocationList=housingLocationList
    })
  }
  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
    }
    this.filteredLocationList = this.housingLocationList.filter((housingLocation) =>
      housingLocation?.city.toLowerCase().includes(text.toLowerCase()),
    );
  }
}
