import { Component } from '@angular/core';
import { ColourExampleService } from 'src/app/services/colour-example.service';

@Component({
  selector: 'app-example1',
  templateUrl: './example1.component.html',
  styleUrls: ['./example1.component.scss']
})
export class Example1Component {

  greenValue:string = ''
  redValue:string = ''
  yellowValue:string = ''

  constructor(public colourExampleService: ColourExampleService){
    this.colourExampleService.colours$.subscribe((value)=>{
      value==='red'? this.redValue=value: this.redValue='off';
      value==='yellow'? this.yellowValue=value: this.yellowValue='off';
      value==='green'? this.greenValue=value: this.greenValue='off';
    });
  }
}
