import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfesorEditPage } from './profesor-edit.page';

describe('ProfesorEditPage', () => {
  let component: ProfesorEditPage;
  let fixture: ComponentFixture<ProfesorEditPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProfesorEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
