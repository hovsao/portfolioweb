import {SectionTitle} from './SectionTitle';
import about_cat from '../assets/img/About_cat.png'

export const About = () => {
    return(
        <div className=' bg-yellow-300 flex flex-col items-center w-full pt-20 pb-30 space-y-16'>
            <SectionTitle 
                sectionEng='About'
                sectionJp='私について'
            />
            <div className=' flex flex-row space-x-16'>
                <img src={about_cat} alt="" />
                <div className=' flex flex-col space-y-4'>
                    <div className=' font-sans text-3xl'>Nekota Koharu</div>
                    <p className=' w-480px font-sans text-base'>
                        札幌市を拠点に活動するwebエンジニアです。テキストテキストテキストテキストテキストテキストテキストテキストテキスト
                    </p>
                </div>
            </div>
        </div>
    );
};
