import { ServiceList } from './ServiceList';
import { SectionTitle } from './SectionTitle';

export const Service = () => {
    return(
        <div className='flex flex-col space-y-16 w-fit bg-gray-500'>
            <SectionTitle 
              sectionEng='Service'
              sectionJp='サービス'
            />
            <div className={`flex flex-row space-x-16`}>
              <ServiceList />
            </div>
        </div>
    );
};
