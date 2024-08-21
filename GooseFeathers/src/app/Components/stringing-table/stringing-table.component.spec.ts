import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringingTableComponent } from './stringing-table.component';

describe('StringingTableComponent', () => {
  let component: StringingTableComponent;
  let fixture: ComponentFixture<StringingTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StringingTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StringingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
