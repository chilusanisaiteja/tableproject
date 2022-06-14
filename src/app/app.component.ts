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
  headers=['Name','Age','Dob','React(Yes/No)','intrests'];
  data=[
    {
     "Name":'raju',
     "Age":'49',
     "Dob":'20/05/1973',
     "React":'Yes',
     "Intrests":'Sports'
    },
    {"Name":'ravi',
    "Age":'30',
    "Dob":'5/03/1991',
    "React":'no',
    "Intrests":'books'
    },
    {"Name":'sameer',
    "Age":'15',
    "Dob":'13/12/2008',
   " React":'Yes',
    "Intrests": 'Problem solving'
    },
    {
    "Name":'seetha',
    "Age":'24',
    "Dob":'22/07/1998',
    "React":'no',
    "Intrests":'gaming'
    },
    {"Name":'ram',
    "Age":'25',
     "Dob":'3/07/1997',
     "React": 'Yes',
     "Intrests":'Programming'
    },
    {"Name":'mahesh',
    "Age":'50',
    "Dob":'9/09/1973',
    "React":'no',
     "Intrests": 'making videos'
    }];

    constructor(private service : SiceService){

    }
    ngOnInit(){
      this.getDataFromAPI();
    }

    getDataFromAPI(){
      this.service.getData().subscribe((response)=>{
        console.log("Response from API is ", response)
      },(error)=>{
        console.log('Error is ', error);
      })
    }
}
