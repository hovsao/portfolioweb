//import icon_direction from '../assets/img/icon_direction.png'
import icon_graphic from '../assets/img/icon_graphic.png'

export const ServiceItem = () => {


    return(
        <div className=" flex flex-col w-75 space-y-6 items-center">
            <div className=" rounded-full bg-green-900 w-36 h-36 flex justify-center items-center">
                <img src={icon_graphic} alt="" />
            </div>
            <div className=' font-sans text-2xl font-bold'>Graphic Design</div>
            <p className=' font-sans text-sm'>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
        </div>
    );
};