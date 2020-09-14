import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GetmobilenumberPage } from './getmobilenumber.page';

describe('GetmobilenumberPage', () => {
  let component: GetmobilenumberPage;
  let fixture: ComponentFixture<GetmobilenumberPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetmobilenumberPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GetmobilenumberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
