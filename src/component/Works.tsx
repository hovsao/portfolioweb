import {TmpButton} from './TmpButton';
import {SectionTitle} from './SectionTitle';
import works01 from '../assets/img/Works-01.png'
import works02 from '../assets/img/Works-02.png'
import works03 from '../assets/img/Works-03.png'
import works04 from '../assets/img/Works-04.png'
import works05 from '../assets/img/Works-05.png'
import works06 from '../assets/img/Works-06.png'

const cardItems =[
    {
        workURL: works01,
        projectName:"プロジェクト名",
        tagName:"グラフィックデザイン",
    },
    {
        workURL: works02,
        projectName:"プロジェクト名",
        tagName:"グラフィックデザイン",
    },
    {
        workURL: works03,
        projectName:"プロジェクト名",
        tagName:"グラフィックデザイン",
    },
    {
        workURL: works04,
        projectName:"プロジェクト名",
        tagName:"グラフィックデザイン",
    },
    {
        workURL: works05,
        projectName:"プロジェクト名",
        tagName:"グラフィックデザイン",
    },
    {
        workURL: works06,
        projectName:"プロジェクト名",
        tagName:"グラフィックデザイン",
    },
    {
        workURL: works06,
        projectName:"プロジェクト名",
        tagName:"グラフィックデザイン",
    },
];

const splitItems:any=[];

for(let i = 0;i<cardItems.length;i+=3){
    splitItems.push(cardItems.slice(i,i+3));
}

console.log("length:",cardItems.length);
console.log("split array:",splitItems);


const Card =({
    workURL,
    projectName,
    tagName,
}:{
    workURL:any,
    projectName:any,
    tagName:any,
}) => {
    return(
        <div className=' flex flex-col space-y-6 items-start'>
            <img src={workURL} alt="work_img" />
            <div className=' font-sans text-lg font-bold'>{projectName}が入ります</div>
            <div className=' font-sans text-sm bg-gray-400 px-2 py-0.5 '>{tagName}</div>
        </div>
    );  
};

export const Works = () => {
    return(
        <div className= "bg-red-300 flex flex-col space-y-20 w-fit items-center">
            <div className=' bg-blue-200 flex flex-col space-y-16'>
                <SectionTitle 
                    sectionEng='Works'
                    sectionJp='製作実績'
                />
                <div className=' flex flex-col space-y-16 items-center'>
                    {splitItems.map((splitItem:any) =>(
                        <div className=' flex flex-row space-x-16 w-works_row'>
                            {splitItem.map((cardItem:any) => (
                                <Card
                                    workURL= {cardItem.workURL}
                                    projectName={cardItem.projectName}
                                    tagName={cardItem.tagName}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <TmpButton buttonText='View More' />
        </div>
    );
};
