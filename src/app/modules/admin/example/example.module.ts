import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ExampleComponent } from 'app/modules/admin/example/example.component';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import { MatPaginatorModule } from "@angular/material/paginator";
import {MatTabsModule} from '@angular/material/tabs';
import { CommonModule } from '@angular/common';
 import { MatTableDataSource } from '@angular/material/table';


const exampleRoutes: Route[] = [
    {
        path     : '',
        component: ExampleComponent
    }
];

@NgModule({
    declarations: [
        ExampleComponent
    ],
    imports     : [
        CommonModule,
        MatSelectModule,
        MatIconModule,
        MatTableModule,
        MatSortModule,
        MatTabsModule,
        MatPaginatorModule,
        RouterModule.forChild(exampleRoutes)
    ],
    
})
export class ExampleModule
{
}
