import { Injectable } from "@angular/core";
import { Product } from "./../common/interfaces/product.interface";
import { RestApiService } from "./rest-api.service";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CartService {
  private cart: BehaviorSubject<Product[]> = new BehaviorSubject([]);
  public cart$ = this.cart.asObservable();

  constructor(private restApi: RestApiService) {
    const initCart = this.getLocalCart();
    this.cart.next(initCart);
  }

  addToCart(product: Product) {
    const currCart = this.getLocalCart();
    const inCart = currCart.find((item: Product) => item.id === product.id);
    if (!inCart) {
      const updatedCart = [...currCart, product];
      this.cart.next(updatedCart);
      this.updateLocalCart();
    }
  }

  getCart(): Observable<Product[]> {
    return this.cart$;
  }

  purgeCartItem(idx: number) {
    const currCart = this.getLocalCart();
    const updatedCart = currCart.filter((item: Product) => item.id !== idx);
    this.cart.next(updatedCart);
    this.updateLocalCart();
  }

  clearCart() {
    localStorage.removeItem("cart");
    this.cart.next([]);
  }

  getShippingPrices() {
    const path = "../../assets/shipping-rates.json";
    return this.restApi.fetchData(path);
  }

  private getLocalCart() {
    return JSON.parse(localStorage.getItem("cart"));
  }

  private updateLocalCart() {
    const currCart = this.cart.value;
    localStorage.setItem("cart", JSON.stringify(currCart));
  }
}