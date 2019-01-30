import {CalculadoraServicio} from './CalculadoraServicio';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  calc: CalculadoraServicio;

  isNaN = isNaN;

  ngOnInit(): void {
    this.calc = new CalculadoraServicio();
  }


}