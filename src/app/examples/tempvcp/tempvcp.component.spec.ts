import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempvcpComponent } from './tempvcp.component';

describe('EcommerceComponent', () => {
  let component: TempvcpComponent;
  let fixture: ComponentFixture<TempvcpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempvcpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempvcpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
