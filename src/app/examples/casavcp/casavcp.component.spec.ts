import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasavcpComponent } from './casavcp.component';

describe('ProductpageComponent', () => {
  let component: CasavcpComponent;
  let fixture: ComponentFixture<CasavcpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasavcpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasavcpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
