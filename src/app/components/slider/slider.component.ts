import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { NgbModalConfig, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { SliderConfig } from 'src/app/models/slider-config.model';
import { SliderConfigService } from 'src/app/services/slider-config.service';



@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  base64!: string
  closeResult!: string;
  editForm!: FormGroup;
  sliderConfig!: SliderConfig[];
  isAdmin!: true
  
  constructor(private sliderConfigService : SliderConfigService,
              config: NgbModalConfig,
              private modalService: NgbModal,
              private fb: FormBuilder,

              
              ) { 

              config.backdrop = 'static',
              config.keyboard = false

            }

  ngOnInit(): void {
    this.getSliderConfig();

    this.editForm = this.fb.group({
      id: ['', Validators.required],
      slider1: ['', Validators.required],
      title1: ['', Validators.required],
      text1: ['', Validators.required],
      slider2: ['', Validators.required],
      title2: ['', Validators.required],
      text2: ['', Validators.required],
      slider3: ['', Validators.required],
      title3: ['', Validators.required],
      text3: ['', Validators.required],
    });
  }

  getSliderConfig() {
    this.sliderConfigService.getSliderConfig()
    .subscribe( data =>(this.sliderConfig = data,
      console.log(this.sliderConfig)))
  }

  // onFileChanged1(e:any):void {
  //   this.base64 = e[0].base64;
  //   this.editForm.value.slider1 = this.base64;
  // }
  // onFileChanged2(e:any):void {
  //   this.base64 = e[0].base64;
  //   this.editForm.value.slider2 = this.base64;
  // }

  // onFileChanged3(e:any):void {
  //   this.base64 = e[0].base64;
  //   this.editForm.value.slider3 = this.base64;
  // }


  //Abre modal de editar
  openEdit(targetModal: any, sliderConfig:SliderConfig) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
      size: 'lg'
    });
    this.editForm.patchValue( {
      id: sliderConfig.id,
      slider1: sliderConfig.slider1,
      title1: sliderConfig.title1,
      text1: sliderConfig.text1,
      slider2: sliderConfig.slider2,
      title2: sliderConfig.title2,
      text2: sliderConfig.text2,
      slider3: sliderConfig.slider3,
      title3: sliderConfig.title3,
      text3: sliderConfig.text3,
      
    });
  }

    //Guarda lo editado
    onSave() {
      this.sliderConfigService.updateSliderConfig(this.editForm.value)
        .subscribe((results) => {
          this.ngOnInit();
          this.modalService.dismissAll();
        });
    }

//Metodo para cerrar el modal con esc y click fuera del modal
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
