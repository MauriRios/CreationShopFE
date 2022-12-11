import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { HotConfig } from 'src/app/models/hot-config.model';
import { HotsConfigService } from 'src/app/services/hots-config.service';

@Component({
  selector: 'app-hots',
  templateUrl: './hots.component.html',
  styleUrls: ['./hots.component.css']
})
export class HotsComponent implements OnInit {

  base64!: string
  closeResult!: string;
  editForm!: FormGroup;
  hotConfig!: HotConfig[];
  isAdmin!: true


  constructor(private hotConfigService : HotsConfigService,
              config: NgbModalConfig,
              private modalService: NgbModal,
              private fb: FormBuilder,

    ) { 
    this.createFormEdit();
    config.backdrop = 'static',
    config.keyboard = false

  }

ngOnInit(): void {
this.getHotConfig();


}

createFormEdit(){
  this.editForm = this.fb.group({
    id: [''],
    elegidoDelMes: ['', Validators.required],
    masVendido1: ['', Validators.required],
    masVendido2: ['', Validators.required],
    masVendido3: ['', Validators.required],
    masVendido4: ['', Validators.required],
    });
}

getHotConfig() {
this.hotConfigService.getHotConfig()
.subscribe( data =>(this.hotConfig = data,
console.log(this.hotConfig)))
}

//Abre modal de editar
openEdit(targetModal: any, hotConfig:HotConfig) {
this.modalService.open(targetModal, {
centered: true,
backdrop: 'static',
size: 'lg'
});
this.editForm.patchValue( {
id: hotConfig.id,
elegidoDelMes: hotConfig.elegidoDelMes,
masVendido1: hotConfig.masVendido1,
masVendido2: hotConfig.masVendido2,
masVendido3: hotConfig.masVendido3,
masVendido4: hotConfig.masVendido4,


});
}

//Guarda lo editado
onSave() {
this.hotConfigService.updateHotConfig(this.editForm.value)
.subscribe((results) => {
this.ngOnInit();
this.modalService.dismissAll();
});
}

   //form getters
  get elegidoDelMesField(){
    return this.editForm.get('elegidoDelMes')
  };
  get masVendido1Field(){
    return this.editForm.get('masVendido1')
  };
  get masVendido2Field(){
    return this.editForm.get('masVendido2')
  };
  get masVendido3Field(){
    return this.editForm.get('masVendido3')
  };
  get masVendido4Field(){
    return this.editForm.get('masVendido4')
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
