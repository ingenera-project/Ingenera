import {
    ModuleWithProviders,
    NgModule,
    Optional,
    SkipSelf
} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { AuthGuard } from './guards';
import { AppRoutingModule } from '../../app/app-routing.module';
import{SharedModule}from '../shared/shared.module'
// Import components
import {
    AppHeaderComponent, AppHeaderClientComponent,AppHeaderBusinessComponent
} from '../core/components';

const APP_COMPONENTS = [
    AppHeaderComponent, AppHeaderClientComponent, AppHeaderBusinessComponent,
    GuestLayoutComponent, ClientLayoutComponent, BusinessLayoutComponent
];

import { GuestLayoutComponent } from './containers/guest-layout/guest-layout.component';
import { ClientLayoutComponent } from './containers/client-layout/client-layout.component';
import { BusinessLayoutComponent } from './containers/business-layout/business-layout.component';


@NgModule({
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        SharedModule
    ],
    declarations: [...APP_COMPONENTS],
    providers: [
        AuthGuard
    ],
    exports: [
        ...APP_COMPONENTS,
        BrowserAnimationsModule,
        AppRoutingModule
    ]
})
export class CoreModule {
    constructor(
        @Optional()
        @SkipSelf()
        parentModule: CoreModule
    ) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: []
        };
    }
}
