import { Component } from '@angular/core';
import { SampleService } from './service/sample.service';
import { OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'sample-app';

  constructor(private authService: SampleService){}

  ngOnInit(): void {
    for(let i = 0; i< 5; i++)
    this.makeAPIRequest();
  }

  makeAPIRequest(){
    this.authService.authenticate('eve.holt@reqres.in', 'cityslicka')
    .subscribe((result: any) => {
      console.log(result);
    }, (loginError: HttpErrorResponse) => {
      console.log(loginError);
    });
  }


}
