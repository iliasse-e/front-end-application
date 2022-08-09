import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-view',
  templateUrl: './my-view.component.html',
  styleUrls: ['./my-view.component.css']
})
export class MyViewComponent implements OnInit {

  private baseUrl: string = "https://geo.api.gouv.fr";

  get code() {
    return this.form.get('code')?.value
  }

  response: Departement | undefined;

  communes: Commune[] | undefined;

  public form: FormGroup = new FormGroup({
    code: new FormControl('', Validators.required),
  });

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  
  handleSubmit() {
    this.http.get<Departement>(`${this.baseUrl}/departements/${this.code}`, {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
      })
    }).subscribe((departement: Departement) => {
      this.response = departement;
      this.http.get<Commune[]>(`${this.baseUrl}/communes`, {
        params: {"codePostal": this.code + "000"}
      }).subscribe((communes) => {
        this.communes = communes
      })
    })
  }

}

interface Departement {
  code: string,
  nom: string,
  codeRegion: string
}

interface Commune   {
  nom: string,
  code: string,
  codesPostaux: number[],
  codeDepartement: string,
  codeRegion: string,
  population: number
}