import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-asyn-pipe',
  templateUrl: './asyn-pipe.component.html',
  styleUrls: ['./asyn-pipe.component.css']
})
export class AsynPipeComponent {

  asyncPipe=new Observable((observe)=>{

    setTimeout(()=>{
      observe.next("hello");
    },2000);
  });
}
