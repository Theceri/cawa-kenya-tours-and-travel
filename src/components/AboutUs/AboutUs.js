// components/AboutUs.js
import Image from 'next/image';
import Link from 'next/link';

const AboutUs = () => {
  return (
    <div className="section section-2">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6 order-lg-2 mb-5 mb-lg-0">
            <div className="image-stack mb-5 mb-lg-0">
              <div className="image-stack__item image-stack__item--bottom" data-aos="fade-up">
                <Image src="/images/img_v_1.jpg" alt="Image" className="img-fluid rellax" width={600} height={400} />
              </div>
              <div className="image-stack__item image-stack__item--top" data-aos="fade-up" data-aos-delay="100" data-rellax-percentage="0.5">
                <Image src="/images/img_v_2.jpeg" alt="Image" className="img-fluid" width={600} height={400} />
              </div>
            </div>
          </div>
          <div className="col-lg-4 order-lg-1">
            <div>
              <h2 className="heading mb-3" data-aos="fade-up" data-aos-delay="100">Explore Kenya with CAWA Kenya Tours & Travels</h2>
              <p data-aos="fade-up" data-aos-delay="200">Welcome to CAWA Kenya Tours and Travels, your gateway to the heart of Africa. As a premier tour operator, we are dedicated to crafting unforgettable travel experiences across the stunning landscapes and vibrant cultures of Kenya. Our expert guides and travel professionals ensure that every journey is seamless and enriching, offering personalized tours from the Maasai Mara to the pristine beaches of the Kenyan coast.</p>
              <p data-aos="fade-up" data-aos-delay="300">At CAWA, we believe in responsible tourism. We work closely with local communities to support conservation and cultural heritage. Whether you are seeking a thrilling safari, cultural exploration, or a beach getaway, we have the perfect itinerary for you.</p>
              <p className="my-4" data-aos="fade-up" data-aos-delay="300">
                <Link href="/about" className="btn btn-primarys">Read more</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
