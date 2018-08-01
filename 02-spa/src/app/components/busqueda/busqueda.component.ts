import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent implements OnInit {

  heroes:Heroe[] = [];
  texto:string = "";
  cant:number = 0;

  constructor(private activatedRoute:ActivatedRoute,
                private _heroesServices:HeroesService,
                private router:Router
    ) {
    }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.texto = params['texto'];
      if( this.texto!=""){
        this.heroes = this._heroesServices.buscarHeroes( params['texto'] );
        this.cant = this.heroes.length;
      }
    })
  }

  verHeroe(idx:number){
    this.router.navigate(['/heroe', idx]);
  }

}
