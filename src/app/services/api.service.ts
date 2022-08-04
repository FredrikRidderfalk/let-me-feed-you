import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getAPIData(){
    // return console.log("I am the api data")
    return this.httpClient.get("https://cors-anywhere.herokuapp.com/https://plant-based-recipes-api.herokuapp.com/recipes")
  }
}
