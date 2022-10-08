import { ServiceList } from './ServiceList';
import { SectionTitle } from './SectionTitle';

export const Service = () => {
    return(
        <div className='flex flex-col space-y-16 w-fit '>
            <SectionTitle 
              sectionEng='Skills'
              sectionJp='スキル'
            />
            <div className={`flex flex-row space-x-16`}>
              <ServiceList />
            </div>
        </div>
    );
};
