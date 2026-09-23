import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cadastro } from './cadastro';

describe('Cadastro', () => {
  let component: Cadastro;
  let fixture: ComponentFixture<Cadastro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cadastro],
    }).compileComponents();

    fixture = TestBed.createComponent(Cadastro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the LGPD link with a highlighted legal reference', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const lgpdLink = compiled.querySelector(
      'a.legal-link[href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm"]'
    );

    expect(lgpdLink).not.toBeNull();
    expect(lgpdLink?.textContent).toContain('LGPD');
  });
});
