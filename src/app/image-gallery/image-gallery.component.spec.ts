import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FilterimagesPipe } from '../filterimages.pipe';
import { ImageService } from '../image.service';

import { GalleryComponent } from './image-gallery.component';

describe('ImageGalleryComponent', () => {
  //let component: GalleryComponent;
  //let fixture: ComponentFixture<GalleryComponent>;
  let imagenServicio = new ImageService();
  let componente = new GalleryComponent(imagenServicio);
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule,FilterimagesPipe,ImageService],
      declarations: [ GalleryComponent ],
    })
    .compileComponents();
    //let imagenServicio = new ImageService();
    //let componenente = new GalleryComponent(imagenServicio);
  }));

  beforeEach(() => {
    //fixture = TestBed.createComponent(GalleryComponent);
    //component = fixture.componentInstance;
    //fixture.detectChanges();
    let imagenServicio = new ImageService();
    let componente = new GalleryComponent(imagenServicio);
  });

  it('should create', () => {
    expect(componente).toBeTruthy();
  });
});
