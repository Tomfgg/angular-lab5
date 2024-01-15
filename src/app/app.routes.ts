import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { MycartComponent } from './mycart/mycart.component';

export const routes: Routes = [
    {
        path: "products",
        component: ProductListComponent
    },
    {
        path: "card",
        component: ProductCardComponent
    },
    {
        path: "cart",
        component: MycartComponent
    }
];
