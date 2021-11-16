import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmovieformComponent } from './addmovieform.component';

describe('AddmovieformComponent', () => {
  let component: AddmovieformComponent;
  let fixture: ComponentFixture<AddmovieformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddmovieformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmovieformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
