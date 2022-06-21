import { Component, OnInit } from '@angular/core';
import { ChucknorrisService } from 'src/app/services/chucknorris.service';

@Component({
  selector: 'app-chucknorris',
  templateUrl: './chucknorris.component.html',
  styleUrls: ['./chucknorris.component.css']
})
export class ChucknorrisComponent implements OnInit {
  frase:any = '';
  fecha:any = '';

  constructor(private $chucknorris: ChucknorrisService) { }

  ngOnInit(): void {
    this.generarFrase();
  }

  generarFrase(){
    this.$chucknorris.generarFrase().subscribe(data =>
      {
        this.frase = data.value;
        this.fecha = data.created_at;
        console.log(this.frase);

      })

  }

}
