import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, FormBuilder  } from '@angular/forms';

@Component({
  selector: 'app-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.scss']
})
export class CustomFormComponent {
  customForm!: FormGroup;  

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.customForm = this.formBuilder.group({
      campo1: ['', [Validators.required, Validators.pattern('\\d+')]],
      campo2: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      campo3: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      campo4: ['', [Validators.required, Validators.pattern('/(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?/g')]],
    });
  }

  enviarFormulario() {
    if (this.customForm.valid) {
     
    }

  }


}
