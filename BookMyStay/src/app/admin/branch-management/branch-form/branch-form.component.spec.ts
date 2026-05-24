import { TestBed } from '@angular/core/testing';
import { BranchFormComponent } from './branch-form.component';

describe('BranchFormComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BranchFormComponent]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(BranchFormComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });
});

