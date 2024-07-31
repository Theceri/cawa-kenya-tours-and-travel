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
                    <Image src="/images/svg/01.svg" alt="Image" className="img-fluid" width={600} height={400} />
                  </span>
                  <div>
                    <h3>Hotel Booking</h3>
                    <p>Secure your stay at the best hotels in Kenya, handpicked for comfort and luxury.</p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-6 col-lg-3 mb-4 mb-lg-0" data-aos="fade-up" data-aos-delay="200">
                <div className="service-1">
                  <span className="iconics">
                    <Image src="/images/svg/02.svg" alt="Image" className="img-fluid" width={600} height={400} />
                  </span>
                  <div>
                    <h3>Tour and Adventure</h3>
                    <p>Explore the stunning landscapes and wildlife of Kenya with our guided tours and safari adventures.</p>
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
              </div>
              <div className="col-6 col-md-6 col-lg-3 mb-4 mb-lg-0" data-aos="fade-up" data-aos-delay="400">
                <div className="service-1">
                  <span className="iconics">
                    <Image src="/images/svg/04.svg" alt="Image" className="img-fluid" width={600} height={400} />
                  </span>
                  <div>
                    <h3>Airport Lounge Access</h3>
                    <p>Enjoy premium comfort and relaxation with exclusive access to airport lounges.</p>
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
