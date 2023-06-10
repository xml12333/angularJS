import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBookmarkComponent } from './add-bookmark.component';

describe('AddBookmarkComponent', () => {
  let component: AddBookmarkComponent;
  let fixture: ComponentFixture<AddBookmarkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddBookmarkComponent]
    });
    fixture = TestBed.createComponent(AddBookmarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
