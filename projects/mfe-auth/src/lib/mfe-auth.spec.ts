import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfeAuth } from './mfe-auth';

describe('MfeAuth', () => {
  let component: MfeAuth;
  let fixture: ComponentFixture<MfeAuth>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MfeAuth]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MfeAuth);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
