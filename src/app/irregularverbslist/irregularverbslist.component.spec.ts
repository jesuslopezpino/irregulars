import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IrregularverbslistComponent } from './irregularverbslist.component';

describe('IrregularverbslistComponent', () => {
  let component: IrregularverbslistComponent;
  let fixture: ComponentFixture<IrregularverbslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IrregularverbslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IrregularverbslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
