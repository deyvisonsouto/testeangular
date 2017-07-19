import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimaTesteComponent } from './anima-teste.component';

describe('AnimaTesteComponent', () => {
  let component: AnimaTesteComponent;
  let fixture: ComponentFixture<AnimaTesteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimaTesteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimaTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
