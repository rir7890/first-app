import { Injectable } from '@angular/core';
import { Housinglocation } from './housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HuosingService {

  constructor() { }
  // readonly baseUrl='https://angular.dev/assets/tutorials/common';
  url='http://localhost:3000/locations'

  async getAllHousingLocation():Promise<Housinglocation[]>{
    const data=await fetch(this.url);
    return (await data.json())??{};
  }

  async getHousingLocationById(id:number): Promise<Housinglocation|undefined>{
    const data=await fetch(`${this.url}/${id}`);
    return (await data.json())??{};
  }

  sumbitApplication(firstName:string, lastName:string,email:string){
    console.log(`Homes application recieved: firstName: ${firstName}, lastName: ${lastName}, email: ${email}`)
  }
}
