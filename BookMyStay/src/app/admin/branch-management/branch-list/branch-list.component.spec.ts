import { TestBed } from '@angular/core/testing';
import { BranchListComponent } from './branch-list.component';

describe('BranchListComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BranchListComponent]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(BranchListComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });
});

