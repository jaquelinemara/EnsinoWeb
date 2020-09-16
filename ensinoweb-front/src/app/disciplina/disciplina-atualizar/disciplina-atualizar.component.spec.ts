import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisciplinaAtualizarComponent } from './disciplina-atualizar.component';

describe('DisciplinaAtualizarComponent', () => {
  let component: DisciplinaAtualizarComponent;
  let fixture: ComponentFixture<DisciplinaAtualizarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisciplinaAtualizarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisciplinaAtualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
