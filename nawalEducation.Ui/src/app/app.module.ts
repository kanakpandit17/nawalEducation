import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './entry/login/login.component';
import { SigninComponent } from './entry/signin/signin.component';
import { RegisterComponent } from './entry/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './master/header/header.component';
import { FooterComponent } from './master/footer/footer.component';
import { InputComponent } from './reusable/forms/input/input.component';
import { ButtonComponent } from './reusable/forms/button/button.component';
import { SelectComponent } from './reusable/forms/select/select.component';
import { DateComponent } from './reusable/forms/date/date.component';
import { RadiobuttonComponent } from './reusable/forms/radiobutton/radiobutton.component';
import { CheckboxComponent } from './reusable/forms/checkbox/checkbox.component';
import { DynamicFormComponent } from './reusable/dynamic-form/dynamic-form.component';
import { DynamicFieldDirective } from './reusable/dynamic-field/dynamic-field.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SigninComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    InputComponent,
    ButtonComponent,
    SelectComponent,
    DateComponent,
    RadiobuttonComponent,
    CheckboxComponent,
    DynamicFieldDirective,
    DynamicFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [
    InputComponent,
    ButtonComponent,
    SelectComponent,
    DateComponent,
    RadiobuttonComponent,
    CheckboxComponent
  ]
})
export class AppModule { }
