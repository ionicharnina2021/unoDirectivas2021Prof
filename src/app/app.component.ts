import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private _mostrar: boolean = true;
  private _listado: number[] = [34, 45, 43, 67, 86, 75, 41];
  private _noIniciado: number;
  title = 'unoDirectivas2021Prof';

    /**
     * Getter mostrar
     * @return {boolean }
     */
	public get mostrar(): boolean  {
		return this._mostrar;
	}

    /**
     * Setter mostrar
     * @param {boolean } value
     */
	public set mostrar(value: boolean ) {
		this._mostrar = value;
	}

    /**
     * Getter listado
     * @return {number[] }
     */
	public get listado(): number[]  {
		return this._listado;
	}

    /**
     * Setter listado
     * @param {number[] } value
     */
	public set listado(value: number[] ) {
		this._listado = value;
	}

    /**
     * Getter noIniciado
     * @return {number}
     */
	public get noIniciado(): number {
		return this._noIniciado;
	}

    /**
     * Setter noIniciado
     * @param {number} value
     */
	public set noIniciado(value: number) {
		this._noIniciado = value;
	}

}
