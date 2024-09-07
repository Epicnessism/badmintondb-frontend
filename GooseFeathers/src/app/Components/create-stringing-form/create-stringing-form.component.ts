import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormControl, FormGroup} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {StringingService} from "../../Services/stringing.service";
import {CreateStringRequest} from "../../interfaces/CreateStringRequest";
import {Racket} from "../../interfaces/Racket";

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
  }

  public firstFormGroup: FormGroup<CreateStringingRequestFormControlOne> = new FormGroup<CreateStringingRequestFormControlOne>({
    make: new FormControl('', {validators: Validators.required, nonNullable: true}),
    model: new FormControl('', {validators: Validators.required, nonNullable: true})
  })

  public secondFormGroup: FormGroup<CreateStringingRequestFormControlTwo> = new FormGroup<CreateStringingRequestFormControlTwo>({
    mains: new FormControl(0, {validators: Validators.required, nonNullable: true}),
    crosses: new FormControl(0, {validators: Validators.required, nonNullable: true}),
    stringModel: new FormControl('', {validators: Validators.required, nonNullable: true}),
  })

  isLinear = false;

  createStringRequest(): void {
    console.log("Create String Request")
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
        make: this.firstFormGroup.value.make ?? '',
        model: this.firstFormGroup.value.model ?? '',
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
  make: FormControl<string>;
  model: FormControl<string>;

}

interface CreateStringingRequestFormControlTwo {
  mains: FormControl<number>
  crosses: FormControl<number>
  stringModel: FormControl<string>
}
