import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfesorListPage } from './profesor-list.page';

describe('ProfesorListPage', () => {
  let component: ProfesorListPage;
  let fixture: ComponentFixture<ProfesorListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProfesorListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
