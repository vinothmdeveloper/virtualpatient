import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShareCirclePage } from './share-circle.page';

describe('ShareCirclePage', () => {
  let component: ShareCirclePage;
  let fixture: ComponentFixture<ShareCirclePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareCirclePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShareCirclePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
