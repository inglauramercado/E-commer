import "./styles.css";
const DSFooter = () => {
  return (
    
    <footer>
     
      <section className="card">
        <div>
          <img
            src="/src/presentation/assets/img/letreroFooter.png"
            alt="STAY UPTO DATE ABOUT OUR LATEST OFFERS"
          />
        </div>
        <div className="card-input">
          <img
            src="/src/presentation/assets/icon/msj.png"
            alt=""
            className="input-icon"
          />

          <input type="text" placeholder="Enter your email address" />
          <input  type="text" value="Subscribe to Newsletter"className="input-Sub" readOnly
          />
        </div>
      </section>

      <section className="items">
        <div className="items-1">
          <img
            className="logo"
            src="/src/presentation/assets/img/logo.svg"
            alt=""
          />
          <p>
            We have clothes that suits your style and which you’re proud to
            wear. From women to men.
          </p>
          <div className="icons">
            <img src="/src/presentation/assets/img/twiter.png" alt="twiter" />
            <img
              src="/src/presentation/assets/img/facebook.png"
              alt="facebook"
            />
            <img
              src="/src/presentation/assets/img/instagramL.png"
              alt="instagram"
            />
            <img src="/src/presentation/assets/img/GitHub.png" alt="gitHub" />
          </div>
        </div>

        <div className="items-2">
          <img src="/src/presentation/assets/img/company.png" alt="" />
          <p>About</p>
          <p>Features</p>
          <p>Works</p>
          <p>Career</p>
        </div>
        <div>
          <img src="/src/presentation/assets/img/HELP.png" alt="" />
          <p>Customer Support</p>
          <p>Delivery Details</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
        <div>
          <img src="/src/presentation/assets/img/faq.png" alt="FAQ" />
          <p>Account</p>
          <p>Manage Deliveries</p>
          <p>Orders</p>
          <p>Payments</p>
        </div>
        <div>
          <img
            src="/src/presentation/assets/img/Resources.png"
            alt="Resources"
          />
          <p>Free eBooks </p>
          <p>Development Tutorial </p>
          <p>How to - Blog</p>
          <p>Youtube Playlist</p>
        </div>
      </section>
      <div className="hr">
        <hr />
      </div>

      <section className="creditos">
        <p>Shop.co © 2000-2023, All Rights Reserved</p>
        <div className="mediosPago">
          <img src="/src/presentation/assets/img/visa.png" alt="visa" />
          <img
            src="/src/presentation/assets/img/masterCard.png"
            alt="mastercard"
          />
          <img src="/src/presentation/assets/img/paypal.png" alt="paypal" />
          <img src="/src/presentation/assets/img/pay.png" alt="pay" />
          <img
            src="/src/presentation/assets/img/payGogle.png"
            alt="payGoogle"
          />
        </div>
      </section>
    </footer>
  );
};

export default DSFooter;
