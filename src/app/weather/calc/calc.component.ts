import { Component, OnInit } from '@angular/core';
import { CalcService } from 'src/app/calc.service';
@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {



  public num1;
  public num2;
  public result;

  constructor(private calcService: CalcService) { }

  ngOnInit(): void {
  }

  onAdd(){
    this.result = this.calcService.addition(this.num1,this.num2)
  }

}
