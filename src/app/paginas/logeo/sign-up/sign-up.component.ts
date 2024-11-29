import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Isign } from '../isign';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  private _formBuilder = inject(FormBuilder);
  form = this._formBuilder.group<Isign>({
    correo:this._formBuilder.control('',[Validators.required,Validators.email]),
    contrasena: this._formBuilder.control('',Validators.required)
  });
  enviar(){
    if(this.form.invalid)return
    console.log(this.form.getRawValue());
  }
}
