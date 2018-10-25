import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import {DeleteService} from '../delete.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  token = localStorage.getItem('token');
  products: Object;



  constructor(private productsService: ProductsService, private deleteService: DeleteService) { }

  ngOnInit() {
    this.productsService.getProducts().subscribe(
      data => {
        console.log(data) 
        this.products = data
      }
    )

    
    
    
  }
  delete(id) {
      this.deleteService.deleteProduct(id)
  }

  refreshProducts() {
    setTimeout(() => {
      this.productsService.getProducts().subscribe(
        data => {
          console.log(data)
          this.products = data
        }
    )}, 100)
  }
}
