import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { RadioOption } from './radio.model';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'
 
@Component({
  selector: 'mt-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PaymentComponent),
      multi: true
    }
  ]
})
export class PaymentComponent implements OnInit, ControlValueAccessor {
  

  @Input() options: RadioOption[]

  value: any
  onChange: any

  constructor() { }

  ngOnInit() {

  }

  setValue(value :any){
    this.value = value
    this.onChange(this.value)
  } 

  writeValue(obj: any): void {
    this.value = obj
    
  }
  registerOnChange(fn: any): void {
    this.onChange = fn

  }
  registerOnTouched(fn: any): void {

  }
  setDisabledState?(isDisabled: boolean): void {
    
  }
 




}
