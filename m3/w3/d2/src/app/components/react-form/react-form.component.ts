import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-react-form',
  templateUrl: './react-form.component.html',
  styleUrls: ['./react-form.component.scss']
})
export class ReactFormComponent {

  formR!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formR = this.fb.group({
      eroeInfo: this.fb.group({
        name: this.fb.control(''),
        alter: this.fb.control('')
      }),
      enemy: this.fb.control(''),
      power: this.fb.array([])
    });

    this.formR.valueChanges.subscribe(value => {
      console.log(value);
    })
  }

  getErrors(name: string, error: string){
    return this.formR.get(name)?.errors![error];
  }

  getForm(name: string) {
    return this.formR.get(name);
  }

  getPower(){
    return (this.formR.get('power') as FormArray).controls;
  }

  addPower(){
    const control = this.fb.control(null);
    (this.formR.get('power') as FormArray).push(control);
  }

  submit(){
    console.log(this.formR);
    this.formR.reset();
  }

}
