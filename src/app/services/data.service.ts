import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData, addDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Data } from '../models/data.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  firestore: Firestore = inject(Firestore);

  getData(): Observable<any[]> {
    const aCollection = collection(this.firestore, 'data');
    return collectionData(aCollection, { idField: 'id' });
  }

  async createData(data: any): Promise<void> {
    const aCollection = collection(this.firestore, 'data');
    try {
      await addDoc(aCollection, data).then(e => {
        console.log(e);
      });
    } catch (error) {
      console.log(error);

    }
  }


  constructor() { }
}
