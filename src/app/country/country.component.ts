import { Component, OnInit } from '@angular/core';
import { ICountry } from '../interafaces';
import { CountryService } from '../services';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  public countries: ICountry[] = []

  newCountry = {
    name: "",
    capital: ""
  }



  constructor(private readonly _countriesService: CountryService) { }

  ngOnInit(): void {
    // this.countries = this._countriesService.getCountries();
    this._countriesService.getCountries().subscribe(data => {
      if (data) {
        this.countries = data.slice(0, 20)
      }
    });


  }

  get newSave(){
    return [...this.countries]
  }

  

  saveCountry():void{
    // console.log(`Country ${this.newCountry.name} Capital ${this.newCountry.capital}`);
    console.log(this.newCountry);

    this.countries.push(this.newCountry)

    console.log(this.countries);
    
    this.newCountry.capital = `${this.newCountry.capital} city`
    

  }
}
