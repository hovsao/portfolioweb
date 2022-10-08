// 拡張してSectionBlockとかにできそう

export const SectionTitle = ({
    sectionEng,
    sectionJp
}:{
    sectionEng:string,
    sectionJp:string
}) => {
    return(
        <div className={`flex flex-col items-center`}>
            <div className=' font-sans text-5xl font-bold'>{sectionEng}</div>
            <div className=' font-sans text-base text-Green'>{sectionJp}</div>
        </div>
    );
};


{/* <p>Works</p>
<TmpButton
  buttonText="Button Text"
/> */}