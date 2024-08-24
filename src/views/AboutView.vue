<template>
  <div>
    <!-- Video Banner Section -->
    <div class="video-banner">
      <video autoplay muted loop>
        <source src="https://kiara-adams.github.io/images/6611030-uhd_3840_2160_25fps (1) (1).mp4" type="video/mp4" />
      </video>
      <div class="overlay-text">
        <h1>DUNE CLAY STUDIO</h1>
        <p>where tradition meets creativity, and every piece tells a story.</p>
      </div>
    </div>

    <div class="container">
      <!-- Header Section -->
      <div class="header">
        <h1>Dune</h1>
        <div class="tagline">Pottery | Ceramics | Sculptures</div>
      </div>

      <!-- First Content Section -->
      <div class="content-section">
        <div class="image-section">
          <img src="https://kiara-adams.github.io/images/Line Vase _ Small _ Sand White Cut _ by Lindform.jpg" alt="Decorative Image 1" />
          <div class="separator"></div>
        </div>
        <div class="text-section">
          <h2>Dune Collection</h2>
          <p>
            Welcome to Dune, where passion meets the fire of the kiln, and creativity is molded with every spin of the wheel. Here, the raw elements of earth and flame come together in an artistic dance, giving life to pieces that are as bold and unique as the women who craft them. Every curve, every texture, every glaze is a reflection of our relentless pursuit of perfection and our deep connection to the art of pottery. At Dune, we don’t just create ceramics; we sculpt stories, build connections, and ignite imaginations. Our work is more than just a craft—it’s a celebration of the untamed beauty of nature and the power of human creativity, infused with a fiery spirit that can’t be tamed.
          </p>
        </div>
      </div>

      <!-- Second Content Section -->
      <div class="content-section">
        <div class="text-section">
          <h2>Explore Our World</h2>
          <h2>About Us</h2>
          <p>
            We are two passionate women who share a love for the art of pottery and ceramics. Our journey began as a simple hobby, spending countless hours shaping clay and experimenting with glazes in a small, cozy studio. What started as a creative outlet soon blossomed into a shared dream – to bring the beauty of handcrafted ceramics to those who appreciate the finer things in life.
          </p>
        </div>
        <div class="image-section">
          <img src="https://kiara-adams.github.io/images/Handmade Ceramic Mug - handmade mug, aesthetic mug, office mug, tea mug, coffee lovers mug,  stoneware mug.jpg" alt="Decorative Image 2" />
          <div class="separator"></div>
        </div>
      </div>

      <!-- Bottom Smaller Images Section -->
      <div class="bottom-images-section">
        <div class="image-container">
          <img src="https://kiara-adams.github.io/images/Beige and white decor.jpg" alt="Smaller Decorative Image 1" />
          <div class="text-content">
            <h2>Our Designs</h2>
            <p>
              Dune represents our vision to create pieces that are not just functional but also carry the essence of our dedication, love, and the natural elements that inspire us. Our designs are a harmonious blend of the earth’s raw beauty and our own artistic expressions. Each item is meticulously crafted, reflecting our commitment to quality and attention to detail.
            </p>
          </div>
        </div>
      </div>

      <!-- Footer Section -->
      <div class="footer">
        <h2>Contact Us</h2>
        <p>For inquiries, reach us at <a href="mailto:info@dune.com">info@dune.com</a></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutUs',
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  background-color: #f5f0e8;
  font-family: 'Spectral', serif;
  color: #3a3a3a;
}
.container {
  width: 85%;
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 2rem;
}
/* Video Banner Section */
.video-banner {
  position: relative;
  height: 500px;
  width: 100%;
  overflow: hidden;
}
.video-banner video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}
.video-banner .overlay-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
}
.video-banner .overlay-text h1 {
  font-family: 'Playfair Display', serif;
  font-size: 3.5rem;
  margin: 0;
}
.video-banner .overlay-text p {
  font-size: 1.5rem;
  margin-top: 1rem;
  font-weight: 300;
  letter-spacing: 0.1em;
}
.header {
  text-align: center;
  margin-bottom: 2rem;
}
.header h1 {
  font-family: 'Playfair Display', serif;
  font-size: 3rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  color: #3a3a3a;
}
.header .tagline {
  font-size: 1rem;
  font-weight: 400;
  color: #6b6b6b;
  letter-spacing: 0.1em;
  margin-top: 0.5rem;
}
.main-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
}
/* Section with image and text */
.content-section {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
}
.content-section .text-section {
  flex: 1;
  font-size: 1.125rem;
  font-weight: 300;
  line-height: 1.8;
  letter-spacing: 0.02em;
  color: #4b4b4b;
}
.content-section .text-section h2 {
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #3a3a3a;
}
.content-section .image-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}
.content-section .image-section img {
  width: 100%;
  border-radius: 5px;
  object-fit: cover;
}
.content-section .image-section .separator {
  position: absolute;
  height: 100%;
  width: 2px;
  background-color: #e0e0e0;
  top: 0;
  right: -1rem;
  /* Adjusted to be between the image and the text */
}
/* Bottom Smaller Images Section */
.bottom-images-section {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  margin-top: 3rem;
  align-items: center;
  flex-direction: column;
}
.bottom-images-section .image-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
}
.bottom-images-section img {
  width: 30%;
  border-radius: 5px;
  object-fit: cover;
}
.bottom-images-section .text-content {
  width: 65%;
  padding-left: 2rem;
  font-size: 1.125rem;
  font-weight: 300;
  line-height: 1.8;
  letter-spacing: 0.02em;
  color: #4b4b4b;
}
.bottom-images-section .text-content h2 {
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #3a3a3a;
}
.footer {
  text-align: center;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #e0e0e0;
}
.footer h2 {
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #3a3a3a;
}
.footer p {
  font-size: 1rem;
  font-weight: 400;
  color: #3a3a3a;
}
.footer p a {
  color: #3a3a3a;
  text-decoration: none;
  font-weight: bold;
  border-bottom: 1px solid #3a3a3a;
  padding-bottom: 0.1rem;
}
</style>
