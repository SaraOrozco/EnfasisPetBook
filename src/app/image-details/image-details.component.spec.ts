import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { AppModule } from '../app.module';
import { ImageService } from '../image.service';

import { ImageDetailComponent } from './image-details.component';

describe('ImageDetailsComponent', () => {
  let component: ImageDetailComponent;
  let fixture: ComponentFixture<ImageDetailComponent>;
  let serviceMock: ImageService = new ImageService();
  let spy: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[AppModule],
      declarations: [ ImageDetailComponent ],
      providers:[
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              params: () => 1,
            },
          },
        },
        { provide: ImageService, useValue: serviceMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    spy = spyOn(serviceMock, 'getImage').and.returnValue({ "id": 1, "brand": "perro", "url": "assets/images/perro1.jpg" });
    fixture = TestBed.createComponent(ImageDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debe de crear el componenete', () => {
    expect(component).toBeTruthy();
  });


  it('Cuando se prueba con un id diferente a 1 no puede ser la misma imagen',() =>{
    let respuesta = serviceMock.getImage(999999);
    expect(respuesta).not.toEqual({ "id": 5, "brand": "perro", "url": "assets/images/perro3.jpg"});
  });

  it('cuando se pruebe con el id 1 debe cargar los datos correspondientes',()=>{
    expect(component.image).toEqual({ "id": 1, "brand": "perro", "url": "assets/images/perro1.jpg" })

  });

  describe('fixture', () => {
    it('Cundo se cargue la vista se debe de existir una imagen', () => {
      expect(fixture.nativeElement.querySelector('.img-container')).toBeTruthy();
    });
  });

});
