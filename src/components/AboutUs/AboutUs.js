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
                <Image src="/images/img_v_1.jpeg" alt="Image" className="img-fluid rellax" width={600} height={400} />
              </div>
              <div className="image-stack__item image-stack__item--top" data-aos="fade-up" data-aos-delay="100" data-rellax-percentage="0.5">
                <Image src="/images/img_v_2.jpeg" alt="Image" className="img-fluid" width={600} height={400} />
              </div>
            </div>
          </div>
          <div className="col-lg-4 order-lg-1">
            <div>
              <h2 className="heading mb-3" data-aos="fade-up" data-aos-delay="100">Explore Kenya with CAWA Kenya Tours & Travels</h2>
              <p data-aos="fade-up" data-aos-delay="200">At CAWA Kenya Tours, we are dedicated to providing exceptional travel experiences across Kenya. Specializing in travel destinations within Kenya, our offerings include a range of safaris in Kenya, from thrilling Maasai Mara tours to luxurious safari packages in Kenya. Whether you are booking a safari or seeking insights from a Kenyan safari guide, our expert team ensures an unforgettable adventure.</p>
              <p data-aos="fade-up" data-aos-delay="300">We also offer tailored travel packages that include everything from Kenya wildlife tours to relaxing beach holidays in the Kenyan Coast. Our commitment extends to showcasing the best of Kenyan national parks, vibrant Kenyan cultural tours, and exciting adventure tours. With our help, you can discover the best time to visit Kenya and enjoy a journey that blends culture, adventure, and relaxation. Trust CAWA Kenya Tours for a memorable exploration of the unique beauty and heritage of Kenya.</p>
              <p className="my-4" data-aos="fade-up" data-aos-delay="300">
                {/* <Link href="/about" className="btn btn-primarys">Read more</Link> */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
