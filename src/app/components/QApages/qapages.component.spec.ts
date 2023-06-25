import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QApagesComponent } from './qapages.component';

describe('QApagesComponent', () => {
  let component: QApagesComponent;
  let fixture: ComponentFixture<QApagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QApagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QApagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
