import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

const config: SocketIoConfig = { url: 'http://localhost:5000', options: {} };

import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GraficoComponent } from './components/grafico/grafico.component';

@NgModule({
  declarations: [AppComponent, GraficoComponent],
  imports: [
    BrowserModule,
    SocketIoModule.forRoot(config),
    ChartsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}