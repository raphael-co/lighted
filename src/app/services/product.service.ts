import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Product } from '../interfaces/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getDataBJson(): Promise < Product[] > {
    return new Promise((resolve, rejects) => {
        this.http.request('GET', 'assets/data/detailProduct.json').subscribe((items: any) => {
            items = items.product;
            console.log(items);
            let product: Product[] = []
            for (const item of items) {
              product.push({
                    name: item.name,
                    title: item.title,
                    categorie: item.categorie,
                    description: item.description,
                    image: item.image,
                    type: item.type,
                    prix: item.prix,
                })
            }
            console.log(product);
            resolve(product);
        })
    })

  }

  requestByUrlTrashTalk(): Promise < Product[] > {
    return new Promise((resolve, rejects) => {
        this.http.request('GET', '/src/assets/data/Articles.json').subscribe((data : any) => {
            try {
                let articles: Product[] = []
                // const object = JSON.parse(converter.xml2json(data, { compact: true, spaces: 2 }))
                // const items = object.rss.channel.item
                data = data.product;
                for (const item of data) {
                    articles.push({
                      name: item.name,
                      title: item.title,
                      categorie: item.categorie,
                      description: item.description,
                      image: item.image,
                      type: item.type,
                      prix: item.prix,
                    })
                }
                resolve(articles);
            } catch (err) {
                rejects(false)
            }
        })
    })

  }

}
