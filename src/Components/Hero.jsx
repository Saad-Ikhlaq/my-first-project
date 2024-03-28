const HeroSection = () => {
  return (
    <main className="hero container">
      <div className="hero-content-container">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST and WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-btn">
          <button>Shop Now </button>
          <button className="second-btn">Category </button>
        </div>
        <div className="shopping">
          <p>Also Available On</p>
        </div>
        <div className="brand-icons">
          <img src="/images/amazon.png" alt="amazon-logo"></img>
          <img src="/images/flipkart.png" alt="flipkart-logo"></img>
        </div>
      </div>

      <div className="hero-image-container">
        <div className="shoe-image">
          <img src="/images/shoe_image.png" alt="shoe-logo"></img>
        </div>
      </div>
    </main>
  );
};
export default HeroSection;
