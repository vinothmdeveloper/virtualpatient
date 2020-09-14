import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectVirtualHospitalPage } from './select-virtual-hospital.page';

describe('SelectVirtualHospitalPage', () => {
  let component: SelectVirtualHospitalPage;
  let fixture: ComponentFixture<SelectVirtualHospitalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectVirtualHospitalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectVirtualHospitalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
