import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TreeModule } from '@circlon/angular-tree-component';
import { AppComponent } from './app.component';
import { BMIComponentComponent } from './components/bmicomponent/bmicomponent.component';
import { AbsmapComponent } from './components/absmap/absmap.component';
import { AbsmapserviceService } from './services/absmapservice.service';


@NgModule({
  declarations: [
    AppComponent,
    BMIComponentComponent,
    AbsmapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    TreeModule
  ],
  providers: [AbsmapserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
