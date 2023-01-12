import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { HotConfig } from 'src/app/models/hot-config.model';
import { HotsConfigService } from 'src/app/services/hots-config.service';
import { TokenService } from 'src/app/services/token.service';

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
  roles!: string[];
  isAdmin!: boolean;

  constructor(private hotConfigService : HotsConfigService,
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
this.getHotConfig();

(this.roles = this.tokenService.getAuthorities());
this.roles.forEach((rol) => {
  if (rol === 'ROLE_ADMIN') {
    this.isAdmin = true;
  }
});
}

//TODO Refactorizar
onFileChangedElegido(event: any){
  this.editForm.value.elegidoDelMes = event[0].base64;
}
onFileChangedMasVendido1(event: any){
  this.editForm.value.masVendido1 = event[0].base64;
}
onFileChangedMasVendido2(event: any){
  this.editForm.value.masVendido2 = event[0].base64;
}
onFileChangedMasVendido3(event: any){
  this.editForm.value.emasVendido3 = event[0].base64;
}
onFileChangedMasVendido4(event: any){
  this.editForm.value.masVendido4 = event[0].base64;
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
