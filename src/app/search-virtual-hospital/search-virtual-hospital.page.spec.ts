import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchVirtualHospitalPage } from './search-virtual-hospital.page';

describe('SearchVirtualHospitalPage', () => {
  let component: SearchVirtualHospitalPage;
  let fixture: ComponentFixture<SearchVirtualHospitalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchVirtualHospitalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchVirtualHospitalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
