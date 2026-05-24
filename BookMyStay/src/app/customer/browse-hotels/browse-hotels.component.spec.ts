import { TestBed } from '@angular/core/testing';
import { BrowseHotelsComponent } from './browse-hotels.component';

describe('BrowseHotelsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowseHotelsComponent]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(BrowseHotelsComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });
});

