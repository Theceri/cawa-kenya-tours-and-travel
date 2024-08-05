// components/OurServices.js
import Image from 'next/image';
import Link from 'next/link';

const OurServices = () => {
  return (
    <div className="section service-section-1">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 mb-4 mb-lg-0">
            <div className="heading-content" data-aos="fade-up">
              <h2>Our <span className="d-block">Services</span></h2>
              <p>Welcome to CAWA Kenya Tours and Travels, your gateway to the heart of Africa.</p>
              {/* <p className="my-4" data-aos="fade-up" data-aos-delay="300">
                <Link href="/services" className="btn btn-primary">View All</Link>
              </p> */}
            </div>
          </div>
          <div className="col-lg-9">
            <div className="row">
              <div className="col-6 col-md-6 col-lg-3 mb-4 mb-lg-0" data-aos="fade-up" data-aos-delay="100">
                <div className="service-1">
                  <span className="iconics">
                    <Image src="/images/svg/hotel.svg" alt="Image" className="img-fluid" width={600} height={400} />
                  </span>
                  <div>
                    <h3>Hotel and Airbnb Booking</h3>
                    <p>Enjoy a seamless stay with our curated selection of hotels and Airbnb options. Whether you're looking for luxury, comfort, or a unique local experience, we've got you covered.</p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-6 col-lg-3 mb-4 mb-lg-0" data-aos="fade-up" data-aos-delay="200">
                <div className="service-1">
                  <span className="iconics">
                    <Image src="/images/svg/animals.svg" alt="Image" className="img-fluid" width={600} height={400} />
                  </span>
                  <div>
                    <h3>Safari Tours</h3>
                    <p>Embark on an unforgettable adventure with our expertly guided safari tours. Discover Kenya’s breathtaking wildlife and stunning landscapes up close in comfort and safety.</p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-6 col-lg-3 mb-4 mb-lg-0" data-aos="fade-up" data-aos-delay="300">
                <div className="service-1">
                  <span className="iconics">
                    <Image src="/images/svg/culture.svg" alt="Image" className="img-fluid" width={600} height={400} />
                  </span>
                  <div>
                    <h3>Cultural Tours</h3>
                    <p>Immerse yourself in the rich heritage and traditions of Kenya with our cultural tours. Explore local customs, historic sites, and vibrant communities for a truly authentic experience.</p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-6 col-lg-3 mb-4 mb-lg-0" data-aos="fade-up" data-aos-delay="300">
                <div className="service-1">
                  <span className="iconics">
                    <Image src="/images/svg/beach.svg" alt="Image" className="img-fluid" width={600} height={400} />
                  </span>
                  <div>
                    <h3>Beach Holidays</h3>
                    <p> Relax and unwind on Kenya’s beautiful beaches with our tailored beach holiday packages. From sunbathing on pristine sands to enjoying water sports, your perfect seaside getaway awaits.</p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-6 col-lg-3 mb-4 mb-lg-0" data-aos="fade-up" data-aos-delay="300">
                <div className="service-1">
                  <span className="iconics">
                    <Image src="/images/svg/friends.svg" alt="Image" className="img-fluid" width={600} height={400} />
                  </span>
                  <div>
                    <h3>Tour Guides and Tour Buddies</h3>
                    <p>Enhance your travel experience with our knowledgeable tour guides and friendly tour buddies. They provide insights, support, and local tips to make your trip both enjoyable and memorable.</p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-6 col-lg-3 mb-4 mb-lg-0" data-aos="fade-up" data-aos-delay="300">
                <div className="service-1">
                  <span className="iconics">
                    <Image src="/images/svg/plane.svg" alt="Image" className="img-fluid" width={600} height={400} />
                  </span>
                  <div>
                    <h3>Airport Transfer</h3>
                    <p>Start and end your journey stress-free with our reliable airport transfer services. Enjoy comfortable and timely transportation to and from the airport, tailored to your schedule.</p>
                  </div>
                </div>
              </div>

              {/* <div className="col-6 col-md-6 col-lg-3 mb-4 mb-lg-0" data-aos="fade-up" data-aos-delay="300">
                <div className="service-1">
                  <span className="iconics">
                    <Image src="/images/svg/03.svg" alt="Image" className="img-fluid" width={600} height={400} />
                  </span>
                  <div>
                    <h3>Travel Insurance</h3>
                    <p> Travel with peace of mind knowing you are covered by our comprehensive travel insurance.</p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-6 col-lg-3 mb-4 mb-lg-0" data-aos="fade-up" data-aos-delay="300">
                <div className="service-1">
                  <span className="iconics">
                    <Image src="/images/svg/03.svg" alt="Image" className="img-fluid" width={600} height={400} />
                  </span>
                  <div>
                    <h3>Travel Insurance</h3>
                    <p> Travel with peace of mind knowing you are covered by our comprehensive travel insurance.</p>
                  </div>
                </div>
              </div> */}

              <div className="col-6 col-md-6 col-lg-3 mb-4 mb-lg-0" data-aos="fade-up" data-aos-delay="400">
                <div className="service-1">
                  <span className="iconics">
                    <Image src="/images/svg/book.svg" alt="Image" className="img-fluid" width={600} height={400} />
                  </span>
                  <div>
                    <h3>Flight Bookings and Travel Insurance</h3>
                    <p>Simplify your travel planning with our comprehensive flight booking services and travel insurance options. We handle the details so you can focus on enjoying your trip with peace of mind.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
