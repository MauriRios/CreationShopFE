import { Target } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { CatalogConfig } from 'src/app/models/catalog-config.model';
import { CatalogConfigService } from 'src/app/services/catalog-config.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-catalogs',
  templateUrl: './catalogs.component.html',
  styleUrls: ['./catalogs.component.css']
})
export class CatalogsComponent implements OnInit {

  base64!: string
  closeResult!: string;
  editForm!: FormGroup;
  catalogConfig!: CatalogConfig[];
  roles!: string[];
  isAdmin!: boolean;
  
  constructor(private catalogConfigService : CatalogConfigService,
              config: NgbModalConfig,
              private modalService: NgbModal,
              private formBuilder: FormBuilder,
              private tokenService: TokenService,
              ) { 
                
              this.createEditForm(),
              config.backdrop = 'static',
              config.keyboard = false

            }

  ngOnInit(): void {
    this.getCatalogConfig();

    (this.roles = this.tokenService.getAuthorities());
    this.roles.forEach((rol) => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }


  //TODO Refactorizar
  onFileChangedCervezas(event: any){
      this.editForm.value.cervezasCatalog = event[0].base64;
  }
  onFileChangedAperitivos(event: any){
    this.editForm.value.aperitivosCatalog = event[0].base64;
  }
  onFileChangedSinAlcohol(event: any){
    this.editForm.value.sinAlcoholCatalog = event[0].base64;
  }
  onFileChangedWhiskys(event: any){
    this.editForm.value.whiskysCatalog = event[0].base64;
  }
  onFileChangedDestilados(event: any){
    this.editForm.value.destiladosCatalog = event[0].base64;
  }
  onFileChangedVinos(event: any){
    this.editForm.value.vinosCatalog = event[0].base64;
  }
  onFileChangedRegalos(event: any){
    this.editForm.value.regalosCatalog = event[0].base64;
  }
  onFileChangedCombos(event: any){
    this.editForm.value.combosCatalog = event[0].base64;
  }

  createEditForm(){
    this.editForm = this.formBuilder.group({
      id: [''],
      aperitivosCatalog: ['', Validators.required],
      cervezasCatalog: ['', Validators.required],
      combosCatalog: ['', Validators.required],
      destiladosCatalog: ['', Validators.required],
      regalosCatalog: ['', Validators.required],
      sinAlcoholCatalog: ['', Validators.required],
      vinosCatalog: ['', Validators.required],
      whiskysCatalog: ['', Validators.required],
    });
  }

  //traer imagenes del back
  getCatalogConfig() {
    this.catalogConfigService.getCatalogConfig()
    .subscribe( data =>(this.catalogConfig = data,
      console.log(this.catalogConfig)))
  }

  //Abre modal de editar
  openEdit(targetModal: any, catalogConfig:CatalogConfig) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
      size: 'lg'
    });
    this.editForm.patchValue( {
      id: catalogConfig.id,
      aperitivosCatalog: catalogConfig.aperitivosCatalog,
      cervezasCatalog: catalogConfig.cervezasCatalog,
      combosCatalog: catalogConfig.combosCatalog,
      destiladosCatalog: catalogConfig.destiladosCatalog,
      regalosCatalog: catalogConfig.regalosCatalog,
      sinAlcoholCatalog: catalogConfig.sinAlcoholCatalog,
      vinosCatalog: catalogConfig.vinosCatalog,
      whiskysCatalog: catalogConfig.whiskysCatalog,
      
    });
  }

    //Guarda lo editado
    onSave() {
      this.catalogConfigService.updateCatalogConfig(this.editForm.value)
        .subscribe((results) => {
          this.ngOnInit();
          this.modalService.dismissAll();
        });
    }

    //form getters
    get cervezasCatalogField(){
      return this.editForm.get('cervezasCatalog')
    };
    get whiskysCatalogField(){
      return this.editForm.get('whiskysCatalog')
    };
    get aperitivosCatalogField(){
      return this.editForm.get('aperitivosCatalog')
    };
    get combosCatalogField(){
      return this.editForm.get('combosCatalog')
    };
    get destiladosCatalogField(){
      return this.editForm.get('destiladosCatalog')
    };
    get regalosCatalogField(){
      return this.editForm.get('regalosCatalog')
    };
    get sinAlcoholCatalogField(){
      return this.editForm.get('sinAlcoholCatalog')
    };
    get vinosCatalogField(){
      return this.editForm.get('vinosCatalog')
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
