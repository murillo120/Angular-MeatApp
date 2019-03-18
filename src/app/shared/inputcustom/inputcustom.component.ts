import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import { NgModel } from '@angular/forms'

@Component({
  selector: 'mt-inputcustom',
  templateUrl: './inputcustom.component.html',
  styleUrls: ['./inputcustom.component.css']
})
export class InputcustomComponent implements OnInit, AfterContentInit {

  input : any
  @Input() label: string
  @Input() errorMessage: string

  @ContentChild(NgModel) model : NgModel

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(){

    this.input = this.model
    if(this.input == undefined){
      throw new Error('este componente precisa ser usado com uma diretiva NgModel')
      
    }
  }

}
