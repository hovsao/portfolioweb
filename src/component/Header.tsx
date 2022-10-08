import { TmpButton } from "./TmpButton";

export const Header = () => {
    return(
        <div className=" absolute flex flex-row w-full px-10 py-6">
            <div className=" font-sans text-2xl font-bold flex flex-row items-center">Someone</div>
            <div className=" flex flex-row ml-auto space-x-12">
                <div className=" flex flex-row space-x-10 items-center">
                    <div className=" px-7 text-base font-sans">Service</div>
                    <div className=" px-7 text-base font-sans">Works</div>
                    <div className=" px-7 text-base font-sans">About</div>
                </div>
                <TmpButton 
                    buttonText="Contact"
                />
            </div>
        </div>
    );
};
