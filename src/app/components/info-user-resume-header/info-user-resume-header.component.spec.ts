import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoUserResumeHeaderComponent } from './info-user-resume-header.component';

describe('InfoUserResumeHeaderComponent', () => {
  let component: InfoUserResumeHeaderComponent;
  let fixture: ComponentFixture<InfoUserResumeHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoUserResumeHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoUserResumeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
