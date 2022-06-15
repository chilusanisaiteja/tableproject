import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SiceService } from './sice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'tableproject';
  headers=['Name','Dob','React(Yes/No)','intrests'];
  
public data:any;

    constructor(private httpClient: HttpClient){

    }
    ngOnInit(){
      this.getDataFromAPI();
    }
    isApproved=false;

    getDataFromAPI(){
      this.httpClient.get<any>('http://localhost:3500/get').subscribe(response=>{
        console.log("Response from API is ", response);
        this.data=response;
      });
    }
}
