import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Components
import * as fromComponents from './components';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        ...fromComponents.components
    ],
    exports: [
        ...fromComponents.components
    ]
})
export class UiModule { }
