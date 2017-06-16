import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteNovoComponent } from './teste-novo.component';

describe('TesteNovoComponent', () => {
  let component: TesteNovoComponent;
  let fixture: ComponentFixture<TesteNovoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesteNovoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
