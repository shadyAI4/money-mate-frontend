import { Injectable } from '@angular/core';

const ACCESS_TOKEN = '';
const REFRESH_TOKEN = '';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }
  getToken(): string {
    return localStorage.getItem(ACCESS_TOKEN)!;
  }

  getRefreshToken(): string {
    return localStorage.getItem(REFRESH_TOKEN)!;
  }

  saveToken(token: any): void {
    localStorage.setItem(ACCESS_TOKEN, token);
  }

  saveRefreshToken(refreshToken: any): void {
    localStorage.setItem(REFRESH_TOKEN, refreshToken);
  }

  removeToken(): void {
    localStorage.removeItem(ACCESS_TOKEN);
  }

  removeRefreshToken(): void {
    localStorage.removeItem(REFRESH_TOKEN);
  }
}
