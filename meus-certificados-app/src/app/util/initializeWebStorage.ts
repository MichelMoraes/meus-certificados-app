import { Constants } from './constants';


export class InitializeWebStorage {
  constructor() {}

 
  public static initializeWebStorage(): void {
    if (localStorage.getItem(Constants.CERTIFICADO_KEY) != null) {
      return;
    }

    //usuário definido na forma literal
    localStorage.setItem(Constants.CERTIFICADO_KEY, JSON.stringify([]));
    
  }
}