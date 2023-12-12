import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientFashionsComponent } from './client-fashions.component';

describe('ClientFashionsComponent', () => {
  let component: ClientFashionsComponent;
  let fixture: ComponentFixture<ClientFashionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientFashionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientFashionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
