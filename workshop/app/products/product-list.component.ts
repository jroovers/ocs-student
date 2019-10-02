import { Component } from "@angular/core";

@Component({
    selector: 'pm-products',
    templateUrl: 'app/products/product-list.component.html'
})
export class ProductListComponent {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    products: any[] = [
        {
            "productId": 1,
            "productName": "Java Programming",
            "productCode": "JAV100",
            "releaseDate": "January 18, 2017",
            "description": "Learn how to program in Java",
            "price": 2100,
            "starRating": 4.2,
            "imageUrl":
                "https://openclipart.org/image/300px/svg_to_png/86059/1285037485.png"
        },
        {
            "productId": 2,
            "productName": "Python Programming",
            "productCode": "PRG400",
            "releaseDate": "August 19, 2016",
            "description": "Learn how to program in Python",
            "price": 1750,
            "starRating": 4.8,
            "imageUrl":
                "https://openclipart.org/image/300px/svg_to_png/213924/python1.png"
        }
    ];
    listFilter: string = 'programming';

    toggleImage(): void {
        this.showImage = !this.showImage;
    }
}