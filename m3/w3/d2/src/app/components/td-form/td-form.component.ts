import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-td-form',
  templateUrl: './td-form.component.html',
  styleUrls: ['./td-form.component.scss']
})
export class TdFormComponent {

  @ViewChild('f', {static:true}) form!: NgForm;

  userForm = {
    name: '',
    alter: '',
    power: '',
    enemy: '',
    planet: ''
  }

  eroe: any = {
    name: '',
    alter: '',
    power: '',
    enemy: '',
    planet: ''
  }

  ngOnInit(): void {
    this.form.statusChanges?.subscribe(status => {
      console.log('Stato del form: ', status)
    })
  }

  submit(){
    console.log('Form inviato: ', this.form, '- Nome: ', this.form.value.userInfo.name, '- AlterEgo: ' , this.form.value.userInfo.alter, '- Power: ', this.form.value.userInfo.power, '- Nemico: ', this.form.value.userInfo.enemy, '- Pianeta: ', this.form.value.userInfo.planet);

    this.form.reset();
  }

}
