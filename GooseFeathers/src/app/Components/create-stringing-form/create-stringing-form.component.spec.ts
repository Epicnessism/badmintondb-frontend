import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStringingFormComponent } from './create-stringing-form.component';

describe('CreateStringingFormComponent', () => {
  let component: CreateStringingFormComponent;
  let fixture: ComponentFixture<CreateStringingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateStringingFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateStringingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
