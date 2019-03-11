import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TranslateService } from '../app/shared/translate.service'
import {SharedModule} from './shared/shared.module'
import { AppComponent } from './app.component';
import { ToastService } from './toast.service';
import { CoreModule } from '../app/core/core.module';


import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatDialogModule,
  MatSelectModule,
} from '@angular/material';
import { ToastrModule } from 'ng6-toastr-notifications';
import { SettingsComponent } from './settings/settings.component';

export function setupTranslateFactory(
  service: TranslateService): Function {
  return () => service.use('fr');
}

@NgModule({
  declarations: [
    AppComponent,
  //HomeComponent,
   SettingsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NoopAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    SharedModule,
    CoreModule
  ],
  exports: [
    BrowserAnimationsModule,
    NoopAnimationsModule,
  ],
  providers: [TranslateService, {
    provide: APP_INITIALIZER,
    useFactory: setupTranslateFactory,
    deps: [ TranslateService ],
    multi: true
  }, ToastService],
  bootstrap: [AppComponent]
})
export class AppModule { }
