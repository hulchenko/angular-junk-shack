import { environment } from "src/environments/environment";

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

// Components
import { AppComponent } from "./app.component";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { CartComponent } from "./cart/cart.component";
import { ShippingComponent } from "./shipping/shipping.component";
import { FooterComponent } from "./footer/footer.component";
import { NewProductComponent } from "./new-product/new-product.component";
import { CheckoutComponent } from "./checkout/checkout.component";

// Primeng
import { ToastModule } from "primeng/toast";
import { MessagesModule } from "primeng/messages";
import { MessageService } from "primeng/api";
import { InputNumberModule } from "primeng/inputnumber";
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from "primeng/inputtextarea";
import { FileUploadModule } from "primeng/fileupload";
import { AccordionModule } from "primeng/accordion";

// Firebase
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    FooterComponent,
    NewProductComponent,
    CheckoutComponent,
  ],
  bootstrap: [AppComponent],
  imports: [
    FontAwesomeModule,
    BrowserModule,
    ReactiveFormsModule,
    MessagesModule,
    ToastModule,
    InputTextModule,
    InputNumberModule,
    InputTextareaModule,
    BrowserAnimationsModule,
    FileUploadModule,
    FormsModule,
    AccordionModule,
    RouterModule.forRoot([
      { path: "", component: ProductListComponent },
      { path: "new", component: NewProductComponent },
      { path: "products/:productId", component: ProductDetailsComponent },
      { path: "cart", component: CartComponent },
      { path: "checkout", component: CheckoutComponent },
      { path: "shipping", component: ShippingComponent },
    ]),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
  ],
  providers: [MessageService, provideHttpClient(withInterceptorsFromDi())],
})
export class AppModule {}
