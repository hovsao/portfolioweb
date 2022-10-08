import icon_direction from '../assets/img/icon_direction.png'
import icon_graphic from '../assets/img/icon_graphic.png'
import icon_web from '../assets/img/icon_web.png'

const serviceItems =[
    {
        serviceName:"Frontend",
        serviceIconURL: icon_graphic,
        serviceText:"Reactで動きのない画面が作れます。figmaを使っています。",
    },
    {
        serviceName:"Backend",
        serviceIconURL: icon_web,
        serviceText:"Laravelを使ってポートフォリオを作ります。",
    },
    {
        serviceName:"Infrastructure",
        serviceIconURL: icon_direction,
        serviceText:"awsを使いたいです。",
    },
];

export const ServiceList = () => {
    return(
        <>
            {serviceItems.map((serviceItem) => (
                <>
                    <div className=" flex flex-col w-75 space-y-6 items-center">
                        <div className=" rounded-full bg-Green w-36 h-36 flex justify-center items-center">
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
