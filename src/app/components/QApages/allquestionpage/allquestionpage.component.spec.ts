import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllquestionpageComponent } from './allquestionpage.component';

describe('AllquestionpageComponent', () => {
  let component: AllquestionpageComponent;
  let fixture: ComponentFixture<AllquestionpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllquestionpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllquestionpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
