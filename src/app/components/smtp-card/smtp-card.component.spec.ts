import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmtpCardComponent } from './smtp-card.component';

describe('SmtpCardComponent', () => {
  let component: SmtpCardComponent;
  let fixture: ComponentFixture<SmtpCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmtpCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmtpCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
