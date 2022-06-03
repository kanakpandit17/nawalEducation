import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { FieldConfig } from 'src/app/common/field.interface';
import { DynamicFormComponent } from 'src/app/reusable/dynamic-form/dynamic-form.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  ngOnInit(): void {
    
  }

  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;
  
  regConfig: FieldConfig[] = [
    {
      type: "input",
      label: "Username",
      inputType: "text",
      name: "name",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Name Required"
        },
        {
          name: "pattern",
          validator: Validators.pattern("^[a-zA-Z]+$"),
          message: "Accept only text"
        }
      ]
    },
    {
      type: "input",
      label: "Email Address",
      inputType: "email",
      name: "email",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Email Required"
        },
        {
          name: "pattern",
          validator: Validators.pattern(
            "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"
          ),
          message: "Invalid email"
        }
      ]
    },
    {
      type: "input",
      label: "Password",
      inputType: "password",
      name: "password",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Password Required"
        }
      ]
    },
    {
      type: "input",
      label: "Confirm Password",
      inputType: "password",
      name: "password",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Password Required"
        }
      ]
    },

    {
      type: "checkbox",
      label: "Student",
      inputType: "CheckboxComponent",
      name: "CheckboxComponent",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Choice Required"
        }
      ]
    },
    
    {
    type: "checkbox",
    label: "Teacher",
    inputType: "CheckboxComponent",
    name: "CheckboxComponent",
    validations: [
      {
        name: "required",
        validator: Validators.required,
        message: "Choice Required"
      }
    ]
  },

  {
 type: "checkbox",
  label: "Parent",
  inputType: "CheckboxComponent",
  name: "CheckboxComponent",
  validations: [
    {
      name: "required",
      validator: Validators.required,
      message: "Choice Required"
    }
  ]
},

    {
      type: "button",
      label: "Save"
    }
  ];

  submit(value: any) {}
}
