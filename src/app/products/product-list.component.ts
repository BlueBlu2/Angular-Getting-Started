import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { IProduct } from "./Product";
import { ProductService } from "./product.service";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
    pageTitle = 'Product List';
    imageWidth = 50;
    imageMargin = 2;
    showImage = false;
    errorMessage = '';
    currency = 'EUR';
    sub!: Subscription;

    private _listFilter: string = '';
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        console.log('In Setter: ', value);
        this.filteredProducts = this.performFilter(value);
    }
    filteredProducts: IProduct[] = [];
    products: IProduct[] = [];

    constructor(private productService: ProductService) {

    }

    toggleImage(): void {
        this.showImage = !this.showImage;

    }
    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLowerCase();
        return this.products.filter(product => product.productName.toLowerCase().includes(filterBy));
    }
    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }

    ngOnInit(): void {
        this.sub = this.productService.getProducts().subscribe({
            next: Products => {
                this.products = Products;
                this.assignProducts();
            },
            error: err => this.errorMessage = err
        });
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

    private assignProducts(): void {
        this.filteredProducts = this.products;
    }
}