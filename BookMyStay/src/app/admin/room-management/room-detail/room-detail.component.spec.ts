import { TestBed } from '@angular/core/testing';
import { RoomDetailComponent } from './room-detail.component';

describe('RoomDetailComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomDetailComponent]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(RoomDetailComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });
});

