import icon_direction from '../assets/img/icon_direction.png'
import icon_graphic from '../assets/img/icon_graphic.png'
import icon_web from '../assets/img/icon_web.png'

const serviceItems =[
    {
        serviceName:"Graphic Design",
        serviceIconURL: icon_graphic,
        serviceText:"テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    },
    {
        serviceName:"Web Design",
        serviceIconURL: icon_web,
        serviceText:"テキサステキサステキサステキサステキサステキサステキサステキサステキサステキサステキサステキサス",
    },
    {
        serviceName:"Graphic Direction",
        serviceIconURL: icon_direction,
        serviceText:"テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト",
    },
];

export const ServiceList = () => {
    return(
        <>
            {serviceItems.map((serviceItem) => (
                <>
                    <div className=" flex flex-col w-75 space-y-6 items-center">
                        <div className=" rounded-full bg-green-900 w-36 h-36 flex justify-center items-center">
                            <img src={serviceItem.serviceIconURL} alt="" />
                        </div>
                        <div className=' font-sans text-2xl font-bold'>{serviceItem.serviceName}</div>
                        <p className=' font-sans text-sm'>{serviceItem.serviceText}</p>
                    </div>
                </>
            ))}
        </>
    );
};
