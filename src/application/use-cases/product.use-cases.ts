import { ErrorResponse } from "../../domain/entities/response-error.entity";
import { ProductResponseSuccess } from "../../domain/entities/product-response-success.entity";
import { ProductRepository } from "../../domain/repositories/product.repositories";

export class ProductUseCases {
  constructor(private readonly productRepository: ProductRepository) {}

  async getAllProducts(): Promise<ProductResponseSuccess | ErrorResponse> {
    try {
      return await this.productRepository.getAllProducts();
    } catch (error) {
      console.error("Error fetching products:", error);
      throw new Error("Failed to fetch products");
    }
  }

  async getProductById(id: string): Promise<ProductResponseSuccess | ErrorResponse> {
    try {
      return await this.productRepository.getProductById(id);
    } catch (error) {
      console.error("Error fetching product by ID:", error);
      throw new Error("Failed to fetch product by ID");
    }
  }
}
