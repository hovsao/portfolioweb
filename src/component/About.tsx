import {SectionTitle} from './SectionTitle';
import about_tori from '../assets/img/tori.png'

export const About = () => {
    return(
        <div className=' bg-Gray flex flex-col items-center w-full pt-20 pb-30 space-y-16'>
            <SectionTitle 
                sectionEng='About'
                sectionJp='私について'
            />
            <div className=' flex flex-row space-x-16'>
                <img src={about_tori} alt="" />
                <div className=' flex flex-col space-y-4'>
                    <div className=' font-sans text-3xl'>Someone</div>
                    <p className=' w-480px font-sans text-base'>
                        webエンジニア見習いです。スマホアプリエンジニアを目指します。現在ポートフォリオ作成中です。
                    </p>
                </div>
            </div>
        </div>
    );
};
