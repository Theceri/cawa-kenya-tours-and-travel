import Image from 'next/image';
import Link from 'next/link';
import vacationsData from '@/app/vacation/vacationsData'; // Update the import path as needed

const Vacation = () => {
    const imageStyle = {
        border: '2px solid #eee', // Change the color and width as needed
        borderRadius: '5px',
        width: '100%', // Ensure it takes full width
    };

    const linkStyle = {
        textDecoration: 'none',
        color: 'inherit', // Keep the link text color the same as the surrounding text
    };

    return (
        <>
            <div className="section section-2">
                <div className="container">

                    <div className='row'>
                        <div className='col-md-12'>
                            <h3 >VACATIONS & TOURS</h3>
                            <p class="t_sub_t">Embark on a once-in-a-lifetime journey through Kenya&apos;s iconic landscapes, from the thrilling game drives of Masai Mara to the serene beauty of Lake Naivasha and the majestic elephants of Amboseli. Unforgettable wildlife encounters and stunning views await!</p>

                        </div>
                    </div>
                    <div className="row">
                        {vacationsData.map((vacation, index) => (
                            <div className="col-lg-4 col-md-4" key={index}>
                                <Link href={`/vacation/${vacation.slug}`} passHref style={linkStyle}>

                                    <Image
                                        src={vacation.image}
                                        alt={vacation.title}
                                        layout="responsive"
                                        width={1920}  // Adjust as needed or use the actual dimensions
                                        height={1080} // Adjust as needed or use the actual dimensions
                                        className="img-fluid w-100 vacation-img"
                                    />
                                    <div className="vacation_title">
                                        <h5>{vacation.title}</h5>
                                        <p className='duration'>Duration: {vacation.duration}</p>
                                    </div>

                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Vacation;
