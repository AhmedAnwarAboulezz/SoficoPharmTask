import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import Person from "../models/Person";

@Injectable()
export class PersonService {
  baseURL = "https://tekdi-challenges.appspot.com/api/People";

  constructor(private http: HttpClient) {}

  getPersons() {
    let path = `${this.baseURL}`;
    return this.http.get(path);
  }

  createPerson(person: Person) {
    return this.http.post(this.baseURL, person);
  }

  updatePerson(person: Person) {
    debugger;
    return this.http.put(`${this.baseURL}/${person.id}`, person);
  }
  getPersonsById(id: number) {
    return this.http.get(`${this.baseURL}/${id}`);
  }
  deletePerson(id: number) {
    return this.http.delete(`${this.baseURL}/delete/${id}`);
  }
}
