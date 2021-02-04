import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyresComponent } from './myres.component';

describe('MyresComponent', () => {
  let component: MyresComponent;
  let fixture: ComponentFixture<MyresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
