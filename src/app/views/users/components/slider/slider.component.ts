import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { NgbModalConfig, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { SliderConfig } from 'src/app/models/slider-config.model';
import { SliderConfigService } from 'src/app/services/slider-config.service';
import { TokenService } from 'src/app/services/token.service';



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
  roles!: string[];
  isAdmin!: boolean;
  
  constructor(private sliderConfigService : SliderConfigService,
              config: NgbModalConfig,
              private modalService: NgbModal,
              private fb: FormBuilder,
              private tokenService: TokenService,
              
              ) { 
                
              this.createFormEdit();
              config.backdrop = 'static',
              config.keyboard = false

            }

  ngOnInit(): void {
    this.getSliderConfig();

    (this.roles = this.tokenService.getAuthorities());
    this.roles.forEach((rol) => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }

  //TODO Refactorizar
  onFileChangedSlider1(event: any){
    this.editForm.value.slider1 = event[0].base64;
  }
    //TODO Refactorizar
    onFileChangedSlider2(event: any){
      this.editForm.value.slider2 = event[0].base64;
    }
      //TODO Refactorizar
  onFileChangedSlider3(event: any){
    this.editForm.value.slider3 = event[0].base64;
  }
  
  createFormEdit(){
    this.editForm = this.fb.group({
      id: [''],
      slider1: ['', Validators.required],
      title1: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(7)]],
      text1: ['', [Validators.required, Validators.maxLength(100), Validators.minLength(7)]],
      slider2: ['', Validators.required],
      title2: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(7)]],
      text2: ['', [Validators.required, Validators.maxLength(100), Validators.minLength(7)]],
      slider3: ['', Validators.required],
      title3: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(7)]],
      text3: ['', [Validators.required, Validators.maxLength(100), Validators.minLength(7)]],
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

      //form getters
      get slider1Field(){
        return this.editForm.get('slider1')
      };
      get slider2Field(){
        return this.editForm.get('slider2')
      };
      get slider3Field(){
        return this.editForm.get('slider3')
      };
      get title1Field(){
        return this.editForm.get('title1')
      };
      get title2Field(){
        return this.editForm.get('title2')
      };
      get title3Field(){
        return this.editForm.get('title3')
      };
      get text1Field(){
        return this.editForm.get('text1')
      };
      get text2Field(){
        return this.editForm.get('text2')
      };
      get text3Field(){
        return this.editForm.get('text3')
      };

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
