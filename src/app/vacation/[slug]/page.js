"use client";

import Image from 'next/image';
import { useParams } from 'next/navigation';
import vacations from "@/app/vacation/vacationsData"; // adjust path as needed

const getVacationBySlug = (slug) => {
    return vacations.find(vacation => vacation.slug === slug);
}

const VacationDetails = () => {
    const params = useParams();
    const slug = params.slug;

    const vacation = getVacationBySlug(slug);

    if (!vacation) {
        return <h2>Vacation not found</h2>;
    }

    return (
        <div className="section section-2">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        {/* <Image src={vacation.image} alt={vacation.title} width={800} height={400} /> */}

                        <Image
                            src={vacation.image}  // Dynamic image based on the vacation
                            alt={vacation.title}
                            layout="responsive"
                            width={1920}  // replace with actual width of the image
                            height={1080} // replace with actual height of the image
                            className="img-fluid w-100 vacation-img"
                        />

                        <h4 className='mt-3'>{vacation.title}</h4>
                        <p className="vacation_subtitle">{vacation.subtitle}</p>

                        <div
                            className="vacation-content"
                            dangerouslySetInnerHTML={{ __html: vacation.content }}
                        />
                    </div>

                    {/* Sidebar */}
                    <div className="col-md-4">
                        <div className="card shadow-sm">
                            <div className="card-header bg-primary text-white">
                                <h5 className="mb-0">Explore More Tours</h5>
                            </div>
                            <ul className="list-group list-group-flush tour_list">
                                {vacations.map((tour) => (
                                    <li key={tour.slug} className="list-group-item">
                                        <a href={`/vacation/${tour.slug}`} className="d-flex justify-content-between align-items-center text-decoration-none">
                                            <span className="text-dark">{tour.title}</span>

                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VacationDetails;
