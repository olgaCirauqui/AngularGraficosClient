import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WebsocketService } from '../../services/websocket.service';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit {
  public lineChartData: Array<any> = [{ data: [0, 0, 0, 0], label: 'Ventas' }];
  public lineChartLabels: Array<any> = ['Enero', 'Febrero', 'Marzo', 'Abril'];
  mes = 'Enero';
  unidades = 0;

  constructor(private http: HttpClient, public wsService: WebsocketService) {}

  ngOnInit() {
    this.getData();
    this.escucharSocket();
  }

  getData() {
    this.http
      .get('http://localhost:5000/grafico')
      .subscribe((data: any) => (this.lineChartData = data));
  }

  escucharSocket() {
    this.wsService.listen('cambio-grafico').subscribe((data: any) => {
      console.log('socket', data);
      this.lineChartData = data;
    });
  }

  updateGrafico(f: any) {
    if (!f.valid) {
      return;
    }
    const datos = {
      mes: this.mes,
      unidades: this.unidades
    };
    this.http
      .post('http://localhost:5000/grafico', datos)
      .subscribe((data: any) => (this.lineChartData = data));
  }
}