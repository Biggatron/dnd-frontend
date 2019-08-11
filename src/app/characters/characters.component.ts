import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  baseUrl: string = 'http://localhost:3000';

  private characters = [];
  
  constructor(private httpClient: HttpClient) { }

  get_characters(){
    this.httpClient.get(this.baseUrl + '/characters').subscribe((res : any[])=>{
        console.log(res);
        this.characters = res["characters"];
        console.log(this.characters);
    });
  }

  ngOnInit() {
    this.get_characters();
  }

}
