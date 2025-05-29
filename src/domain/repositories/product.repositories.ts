import { ErrorResponse } from "../entities/response-error.entity";
import { ProductResponseSuccess } from "../entities/product-response-success.entity";

export interface ProductRepository {
   getAllProducts: () => Promise<ProductResponseSuccess | ErrorResponse>;
  getProductById: (id: string) => Promise<ProductResponseSuccess | ErrorResponse>;
    
}