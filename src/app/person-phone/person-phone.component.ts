import { Component, OnInit } from '@angular/core';
import { PersonPhoneService } from './services/person-phone.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-person-phone',
  templateUrl: './person-phone.component.html',
  styleUrls: ['./person-phone.component.scss']
})
export class PersonPhoneComponent implements OnInit {

  persons: any[];
  form: FormGroup;

  constructor(private personPhoneService: PersonPhoneService,
              private fb: FormBuilder) { }

  async ngOnInit() {
    this.form = this.fb.group({
      businessEntityID: [0],
      phoneNumber: ['', Validators.required],
      phoneNumberTypeId: ['', Validators.required]
    });

    const response = await this.getAll();
    this.persons = response.data.personObjects;

  }

  getAll = async () => await this.personPhoneService.getAll();

  async inserir(businessEntityID: number) {
    await this.personPhoneService.insert({
      businessEntityID,
      phoneNumber: this.form.value.phoneNumber,
      phoneNumberTypeId: this.form.value.phoneNumberTypeId,
    });
  }

  async alterar(businessEntityID: number) {
    await this.personPhoneService.edit({
      businessEntityID,
      phoneNumber: this.form.value.phoneNumber,
      phoneNumberTypeId: this.form.value.phoneNumberTypeId,
    });
  }

  async excluir(businessEntityID: number) { await this.personPhoneService.remove(businessEntityID); }

  setForm(fieldFormName: string, phoneNumber: string) {
    this.form.get(fieldFormName).setValue(phoneNumber);
  }
}
