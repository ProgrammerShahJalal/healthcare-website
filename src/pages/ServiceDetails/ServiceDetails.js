import { useParams } from 'react-router';

const ServiceDetails = () => {

    const { serviceId } = useParams()

    return (
        <div className='mt-5 py-5'>
            <h1 className='text-center'>Service Details</h1>
            <h2 className="text-center">Service details of <i className="far fa-hand-point-right highlight"></i> {serviceId}</h2>
            <div>
                { }
            </div>
        </div>
    );
};

export default ServiceDetails;