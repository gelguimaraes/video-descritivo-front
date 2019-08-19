import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcacaoComponent } from './marcacao.component';

describe('MarcacaoComponent', () => {
  let component: MarcacaoComponent;
  let fixture: ComponentFixture<MarcacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
