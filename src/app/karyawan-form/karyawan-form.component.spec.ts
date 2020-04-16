import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KaryawanFormComponent } from './karyawan-form.component';

describe('KaryawanFormComponent', () => {
  let component: KaryawanFormComponent;
  let fixture: ComponentFixture<KaryawanFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KaryawanFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KaryawanFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
