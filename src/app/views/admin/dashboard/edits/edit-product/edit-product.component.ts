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
      brand: ['', Validators.required],
      style: ['', Validators.required],
      volume: ['', Validators.required],
      category: ['', Validators.required],
      price: ['', Validators.required],
      stock: ['', Validators.required],
      image: ['', Validators.required],
      clearance: [''],
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
      this.productsDataService.updateProduct(this.editForm.value.id, this.editForm.value)
        .subscribe((results) => {
          this.ngOnInit();
          this.modalService.dismissAll();
        });
    }

  openDialog(product: Products): void {
    const dialogRef = this.dialog.open(DeleteProductComponent, {
      width: '250px',
    });
    localStorage.setItem("idPerfilBorrar", product.id!.toString());
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
