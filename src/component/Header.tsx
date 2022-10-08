import { TmpButton } from "./TmpButton";

export const Header = () => {
    return(
        <div className=" bg-red-300 absolute flex flex-row w-full px-10 py-6">
            <div className=" bg-red-400 font-sans text-2xl font-bold flex flex-row items-center">Nekoya Koharu</div>
            <div className=" bg-red-500 flex flex-row ml-auto space-x-12">
                <div className=" flex flex-row space-x-10 items-center">
                    <div className=" px-7 text-base font-sans bg-gray-400">Service</div>
                    <div className=" px-7 text-base font-sans bg-gray-400">Works</div>
                    <div className=" px-7 text-base font-sans bg-gray-400">About</div>
                </div>
                <TmpButton 
                    buttonText="Contact"
                />
            </div>
        </div>
    );
};
