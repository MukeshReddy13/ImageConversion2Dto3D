import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageConversionComponent } from './image-conversion.component';

describe('ImageConversionComponent', () => {
  let component: ImageConversionComponent;
  let fixture: ComponentFixture<ImageConversionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageConversionComponent]
    });
    fixture = TestBed.createComponent(ImageConversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
