import { Component, OnInit } from '@angular/core';
import {MultService} from 'src/app/mult.service';

@Component({
  selector: 'app-mult',
  templateUrl: './mult.component.html',
  styleUrls: ['./mult.component.css']
})
export class MultComponent implements OnInit {

  public num1;
  public num2;
  public result;


  constructor(private multservice: MultService) { }

  ngOnInit(): void {
  }

  onmult(){
    this.result = this.multservice.multiply(this.num1,this.num2);
  }

}
