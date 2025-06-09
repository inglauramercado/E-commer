import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ProductUseCases } from "../../../application/use-cases/product.use-cases";
import { ProductApi } from "../../../insfrastructure/Product-api";
import { DSDivSign, DSDivTitle, DSFooter, DSNavBar } from "../../components";
import   "./styles.scss";
import { Product } from "../../../domain/entities/product-entity/product.entity";

const DetailPage = () => {
  const { id } = useParams();
  const [open, setOpen] = useState<boolean>(true);
  const handLeOpen = () =>{
    setOpen(!open);
  }
  const user = localStorage.getItem("user");

    const [products, setProducts] = useState<Product[]>([]);
  

  useEffect(() => {
    const fetchProductDetails = async () => {
      const useCase = new ProductUseCases(new ProductApi());
      const response = await useCase.getProductById(id?.toString() ?? "");
      if (response.status === 200) {
        console.log("Product details:", response);
      }
    };
    fetchProductDetails();
  }, [id]);
  
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

  return (
    <section>
      {!user ? open && <DSDivSign onClose={handLeOpen} />:null}

      <DSNavBar/>
      <div className="div-menu">
        <div><p>Home</p></div>
        <div><p>Shop</p></div>
        <div><p>Men</p></div>
        <div><p>T-Shirt</p></div>
      </div>
      <h1>Detail Page</h1>
      <p>This is the detail page {id}.</p>

      <div className="div-arrival">
        <DSDivTitle
          products={products}
          
          title="You might also like"
          onClick={() => {}} />
      </div>
    <DSFooter />

    </section>
  );
};

export default DetailPage;
