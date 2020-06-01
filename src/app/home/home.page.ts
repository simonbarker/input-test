import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  newObjectForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.newObjectForm = this.fb.group({
      height: ['', Validators.required],
      name: ['', Validators.required]
    });
  }

  onCreate() {
    console.log(this.newObjectForm);
  }

}
