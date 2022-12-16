import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { Products } from 'src/app/models/products.model';
import { ProductsDataService } from 'src/app/services/products-data.service';
import { DeleteProductComponent } from '../delete-product/delete-product.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Category } from 'src/app/models/categorys.model';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = [ 'brand', 'style', 'volume', 'category', 'price','stock', 'clearance', 'acciones' ];
  dataSource = new MatTableDataSource<any>();
  products: Products[] = [];
  closeResult!: string;
  editForm!: FormGroup;
  editProduct!: Products[];
  subscription!: Subscription; 
  categorys: Category[] = [
    {name: 'Aperitivos'},
    {name: 'Cervezas'},
    {name: 'Sin Alcohol'},
    {name: 'Destilados'},
    {name: 'Whiskys'},
    {name: 'Combos'},
    {name: 'Regalos'},
    {name: 'Vinos'},
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private productsDataService: ProductsDataService,
              private router: Router,
              public dialog: MatDialog,
              config: NgbModalConfig,
              private modalService: NgbModal,
              private fb: FormBuilder,
    ) {
              config.backdrop = 'static',
              config.keyboard = false
              this.createEditForm();
  }

  ngOnInit(): void {
    this.getProducts();

    this.subscription = this.productsDataService.refresh$.subscribe(() => {
      this.getProducts();
    })
  }
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  getProducts(): void {
    this.productsDataService.getProducts().subscribe(
      data => {
        this.products = data;
        this.dataSource.data = data;
        this.dataSource.paginator! = this.paginator;
        this.dataSource.sort! = this.sort;
      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  createEditForm(){
    this.editForm = this.fb.group({
      id: ['', Validators.required],
      brand: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      style: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      category: ['', Validators.required],
      volume: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      price: ['', [Validators.required, Validators.min(1)] ],
      stock: ['', [Validators.required, Validators.min(1)] ],
      clearance: [''],
      image: ['', Validators.required],
    })
  }

  //Abre modal de edicion
  openEdit(targetModal: any, product:Products) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
      size: 'lg'
    });
    this.editForm.patchValue( {
      id: product.id,
      brand: product.brand,
      style: product.style,
      volume: product.volume,
      category: product.category,
      price: product.price,
      stock: product.stock,
      image: product.image,
      clearance: product.clearance,
      
    });
  }

    //Guarda lo editado
    onSave() {
      if(this.editForm.valid){
        const value = this.editForm.value;
        console.log(value);
      this.productsDataService.updateProduct(this.editForm.value.id, this.editForm.value)
        .subscribe((results) => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Producto Editado con éxito',
            showConfirmButton: false,
            timer: 2500
          }),
          window.scrollTo(0, 0);
          this.editForm.markAllAsTouched();
          this.ngOnInit();
          this.modalService.dismissAll();
          });
        } else {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Hubo un Error',
            showConfirmButton: false,
            timer: 2500
          })};  
      }

  openDialogDelete(product: Products): void {
    const dialogRef = this.dialog.open(DeleteProductComponent, {
      width: '320px',
    });
    localStorage.setItem("idproductDelete", product.id!.toString());
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

    //Form getters
    get brandField(){
      return this.editForm.get('brand')
    };
    get styleField(){
      return this.editForm.get('style')
    };
    get categoryField(){
      return this.editForm.get('category')
    };
    get volumeField(){
      return this.editForm.get('volume')
    };
    get priceField(){
      return this.editForm.get('price')
    };
    get stockField(){
      return this.editForm.get('stock')
    };
    get imageField(){
      return this.editForm.get('image')
    };

}
