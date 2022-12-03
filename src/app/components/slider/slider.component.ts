import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModalConfig, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { HomeConfig } from 'src/app/models/homeConfig.model';
import { HomeConfigService } from 'src/app/services/home-config.service';



@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  base64!: String
  closeResult!: string;
  editForm!: FormGroup;
  homeConfigs!: HomeConfig[];
  isAdmin!: true
  
  constructor(private homeConfigService : HomeConfigService,
              config: NgbModalConfig,
              private modalService: NgbModal,
              private fb: FormBuilder,

              
              ) { 

              config.backdrop = 'static',
              config.keyboard = false

            }

  ngOnInit(): void {
    this.getHomeConfigs();

    this.editForm = this.fb.group({
      slider1: [''],
      title1: [''],
      text1: [''],
      slider2: [''],
      title2: [''],
      text2: [''],
      slider3: [''],
      title3: [''],
      text3: [''],
    });
  }

  getHomeConfigs() {
    this.homeConfigService.getHomeConfigs()
    .subscribe( data =>(this.homeConfigs = data,
      console.log(this.homeConfigs)))
  }

  onFileChanged(e:any):void {
    this.base64 = e[0].base64;
    this.editForm.value.slider1 = this.base64;
    this.editForm.value.slider2 = this.base64;
    this.editForm.value.slider3 = this.base64;
  }

  //Abre modal de editar
  openEdit(targetModal: any, homeConfig:HomeConfig) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
      size: 'lg'
    });
    this.editForm.patchValue( {
      slider1: homeConfig.slider1,
      title1: homeConfig.title1,
      text1: homeConfig.text1,
      slider2: homeConfig.slider2,
      title2: homeConfig.title2,
      text2: homeConfig.text2,
      slider3: homeConfig.slider3,
      title3: homeConfig.title3,
      text3: homeConfig.text3,

    });
  }

    //Guarda lo editado
    onSave() {
      this.homeConfigService.updateHomeConfig(this.editForm.value)
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
