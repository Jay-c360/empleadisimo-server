import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  url = "usuarios";
  idChat = ""; 

  constructor(
    private httpClient: HttpClient
  ) {}

}
