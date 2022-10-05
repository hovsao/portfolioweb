import { ServiceList } from './ServiceList';

export const Service = () => {
    return(
        <>
            <div className='flex flex-col space-y-16 w-fit bg-gray-500'>
                <div className={`flex flex-col items-center`}>
                  <div className=' font-sans text-5xl font-bold'>Service</div>
                  <div className=' font-sans text-base text-green-400'>サービス</div>
                </div>
                <div className={`flex flex-row space-x-16`}>
                  <ServiceList />
                </div>
            </div>
        </>
    );
};
