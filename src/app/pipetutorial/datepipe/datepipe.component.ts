import { Uppercasepipe } from './../../custompipe/uppercasepipe';
import { Component } from '@angular/core';

@Component({
  selector: 'app-datepipe',
  templateUrl: './datepipe.component.html',
  styleUrls: ['./datepipe.component.css']
})
export class DatepipeComponent {

  currentDate=new Date();

  amount=4500;

  description="This is pipe concept";
}
