import {TmpButton} from './TmpButton';
import {SectionTitle} from './SectionTitle';
import tmp01 from '../assets/img/tmp01.png'

const cardItems =[
    {
        workURL: tmp01,
        projectName:"プロジェクト名",
        tagName:"グラフィックデザイン",
    },
    {
        workURL: tmp01,
        projectName:"プロジェクト名",
        tagName:"グラフィックデザイン",
    },
    {
        workURL: tmp01,
        projectName:"プロジェクト名",
        tagName:"グラフィックデザイン",
    },
    {
        workURL: tmp01,
        projectName:"プロジェクト名",
        tagName:"グラフィックデザイン",
    },
    {
        workURL: tmp01,
        projectName:"プロジェクト名",
        tagName:"グラフィックデザイン",
    },
    {
        workURL: tmp01,
        projectName:"プロジェクト名",
        tagName:"グラフィックデザイン",
    },
    {
        workURL: tmp01,
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
            <div className=' font-sans text-sm bg-Gray px-2 py-0.5 rounded'>{tagName}</div>
        </div>
    );  
};

export const Works = () => {
    return(
        <div className= " flex flex-col space-y-20 w-fit items-center">
            <div className=' flex flex-col space-y-16'>
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
