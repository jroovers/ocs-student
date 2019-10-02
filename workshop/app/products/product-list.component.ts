import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
    moduleId: module.id
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string = 'programming';
    products: IProduct[] = [
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


    ngOnInit(): void {
        console.log('In OnInit');
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }
}