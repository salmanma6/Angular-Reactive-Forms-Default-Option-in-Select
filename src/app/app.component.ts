import { Component } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  isSubmitted = false;

  // City Names
  City: any = [{name:'Florida',phone:99}, {name:'South Dakota',phone:88}, {name:'Tennessee',phone:44}, {name:'Michigan',phone:22}]
  registrationForm = this.fb.group({
    cityName: ['', [Validators.required]]
  })

  constructor(public fb: FormBuilder) { 
    this.registrationForm.controls['cityName'].setValue(this.City[0], {onlySelf: true});
  }

  /*########### Form ###########*/


  // Choose city using select dropdown
  changeCity(e) {
    console.log(e.value)
    this.cityName.setValue(e.target.value, {
      onlySelf: true
    })
  }

  // Getter method to access formcontrols
  get cityName() {
    return this.registrationForm.get('cityName');
  }

  /*########### Template Driven Form ###########*/
  onSubmit() {
    this.isSubmitted = true;
    if (!this.registrationForm.valid) {
      return false;
    } else {
      alert(JSON.stringify(this.registrationForm.value))
    }

  }

}