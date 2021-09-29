import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapseTextComponent } from './collapse-text.component';

describe('CollapseTextComponent', () => {
  let component: CollapseTextComponent;
  let fixture: ComponentFixture<CollapseTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollapseTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapseTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
