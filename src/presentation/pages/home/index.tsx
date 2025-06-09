import { useEffect, useState } from "react";
import {
  DSButton,
  DSDivSign,
  DSNavBar,
  DSText,
  DSFooter,
  DSDivTitle,
} from "../../components";
import "./styles.scss";
import { ProductUseCases } from "../../../application/use-cases/product.use-cases";
import { ProductApi } from "../../../insfrastructure/Product-api";
import { Product } from "../../../domain/entities/product-entity/product.entity";
const PageHome = () => {
  const [open, setOpen] = useState<boolean>(true);
  const [products, setProducts] = useState<Product[]>([]);
  const user = localStorage.getItem("user");


  useEffect(() => {
    const getData = async () => {
      const useCase = new ProductUseCases(new ProductApi());
      const data = await useCase.getAllProducts();
      if (data.status === 200) {
        if ("response" in data) {
          setProducts(data.response.products);
        }
      }
    };
    getData();
  }, []);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <section>
      {!user ? open && <DSDivSign onClose={handleOpen} /> :null}
      <DSNavBar />
      <div>
        <div className="div-hero">
          <div className="div-hero-text">
            <div className="div-hero-img">
              <div>
                <p className="p-hero">FIND CLOTHES</p>
                <p className="p-hero">THAT MATCHES</p>
                <p className="p-hero">YOUR STYLE</p>
              </div>
              <DSText variant="p" color="black">
                Browse through our diverse range of meticulously crafted
                garments, designed
              </DSText>
              <div className="div-hero-button">
                <DSButton text="Shop Now" onClick={() => {}} />
              </div>
              <div className="div-hero-cards">
                <div>
                  <p className="p-card">200+</p>
                  <DSText variant="p" color="black">
                    International Brands
                  </DSText>
                </div>
                <div>
                  <p className="p-card">2,000+</p>
                  <DSText variant="p" color="black">
                    High-Quality Products
                  </DSText>
                </div>
                <div>
                  <p className="p-card">30,000+</p>
                  <DSText variant="p" color="black">
                    Happy Customers
                  </DSText>
                </div>
              </div>
            </div>
          </div>
          <div className="div-hero-img">
            <img
              className="img-hero"
              src="/src/presentation/assets/img/hero.png"
              alt="Hero"
            />
          </div>
        </div>
        <div className="div-brands">
          <img src="/src/presentation/assets/img/versace.svg" alt="Versace" />
          <img src="/src/presentation/assets/img/zara.svg" alt="Zara" />
          <img src="/src/presentation/assets/img/gucci.svg" alt="Gucci" />
          <img src="/src/presentation/assets/img/prada.svg" alt="Prada" />
          <img
            src="/src/presentation/assets/img/calvin-klein.svg"
            alt="Calvin"
          />
        </div>
      </div>
      <div className="div-arrival">
        <DSDivTitle
        button
          products={products}
          divider
          title="New Arrivals"
          onClick={() => {}} />
        <DSDivTitle
        button
          products={products}
          title="top selling"
          onClick={() => {}}
        />
      </div>
      <br />
      <DSFooter />
    </section>
  );
};

export default PageHome;
