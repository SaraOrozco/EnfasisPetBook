import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppModule } from '../app.module';
import { FilterimagesPipe } from '../filterimages.pipe';
import { ImageService } from '../image.service';

import { GalleryComponent } from './image-gallery.component';

describe('ImageGalleryComponent', () => {
  let component: GalleryComponent;
  let fixture: ComponentFixture<GalleryComponent>;
  
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[AppModule],
      declarations: [ GalleryComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe crearse', () => {
    expect(component).toBeTruthy();
  });
});
