import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PtProfilePage } from './pt-profile.page';

describe('PtProfilePage', () => {
  let component: PtProfilePage;
  let fixture: ComponentFixture<PtProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PtProfilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PtProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
