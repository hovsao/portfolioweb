export const MainVisual = () => {
    return(
        <div className=" bg-red-400 bg-img-MV bg-no-repeat h-px-720 bg-contain w-pc">
            <div className=" flex flex-col relative top-MV_position_y left-MV_position_x text-white items-center space-y-4">
                <div className=" text-white text-6xl font-sans">Someone</div>
                <p className=" text-white text-base font-sans">エンジニア志望です。</p>
                <p className=" text-white text-selfIntro font-sans">ReactとLaravelを勉強しています。</p>
            </div>
        </div>
    );
};
