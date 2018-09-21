import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { not } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styles: [`
      .ng-invalid.ng-touched:not(form){
        border: 1px solid red;
      }
      `]
})
export class TemplatesComponent implements OnInit {

  usuario: Object = {
      nombre: null,
      apellido: null,
      email: null
  };

  constructor() { }

  ngOnInit() {
  }

  guardar(forma: NgForm) {
    console.log(forma);
  }
}
