import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormControl, FormGroup} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {StringingService} from "../../Services/stringing.service";
import {CreateStringRequest} from "../../interfaces/CreateStringRequest";
import {Racket} from "../../interfaces/Racket";
import {MatOption} from "@angular/material/autocomplete";
import {MatSelect} from "@angular/material/select";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-create-stringing-form',
  standalone: true,
  imports: [
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatOption,
    MatSelect,
    NgForOf,
  ],
  templateUrl: './create-stringing-form.component.html',
  styleUrl: './create-stringing-form.component.scss'
})
export class CreateStringingFormComponent implements OnInit {
  racketModels: Racket[] = []


  constructor(private stringingService: StringingService) {}

  public ngOnInit() {
    this.stringingService.getAllAvailableRacketModels().subscribe(data => {
      console.log(data)
      this.racketModels = data
    })
    this.firstFormGroup.addControl("racketId", this.racketId)
  }

  racketId: FormControl = new FormControl('', {validators: Validators.required, nonNullable: true})
  public firstFormGroup: FormGroup = new FormGroup({
    // racketId: new FormControl('', {validators: Validators.required, nonNullable: true})
  })
  public secondFormGroup: FormGroup<CreateStringingRequestFormControlTwo> = new FormGroup<CreateStringingRequestFormControlTwo>({
    mains: new FormControl(0, {validators: Validators.required, nonNullable: true}),
    crosses: new FormControl(0, {validators: Validators.required, nonNullable: true}),
    stringModel: new FormControl('', {validators: Validators.required, nonNullable: true}),
  })

  isLinear = false;

  createStringRequest(): void {
    console.log("Create String Request")
    let racketModel: Racket = this.racketModels.find(racket => racket.id == this.firstFormGroup.value.racketId)!;
    console.log("Racket Model found as: " + racketModel)

    let request: CreateStringRequest = {
      crosses: this.secondFormGroup.value.crosses ?? -1,
      crossesInMeters: 4.5,
      isNewRacket: false,
      mains: this.secondFormGroup.value.mains ?? -1,
      mainsInMeters: 5.5,
      method: "FOURKNOT", //todo make enum or something
      price: -1,
      racketToString: {
        racketId: "2783e281-873a-4e72-8973-fe60663a822e", //todo why is null/undefined not okay but okay in postman
        make: racketModel.make ?? '',
        model: racketModel.model ?? '',
        ownerDetails: {
          userId: "92cba104-c922-4852-a683-b32ffd21b109" //todo make this session user
        }
      },
      stringerId: "92cba104-c922-4852-a683-b32ffd21b109" //todo get userId from session

    }
    this.stringingService.postStringingRequest(request);
  }
}

interface CreateStringingRequestFormControlOne {
  racketId: FormControl<string>;

}

interface CreateStringingRequestFormControlTwo {
  mains: FormControl<number>
  crosses: FormControl<number>
  stringModel: FormControl<string>
}
