import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  valor: number = 0;
  cor = true;
  sorteando = false;
  sorteado = false;
  
  constructor() {}
  async rolar(){
    this.cor = false;

    let soma = 0;
    while (soma != 10){
      this.sorteado = false;
      this.sorteando = true;
      this.valor = Math.floor(Math.random()*6+1);
      soma += 1;
      await this.delay(50);
    }
    this.sorteando = false;
    this.sorteado = true;
  }
  limpar(){
    this.valor = 0;
    this.cor = true;
    this.sorteado = false;

  }
  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}
}
