import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CommonConPage } from './common-con.page';

describe('CommonConPage', () => {
  let component: CommonConPage;
  let fixture: ComponentFixture<CommonConPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonConPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CommonConPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
