export const TmpButton = ({
    buttonText,
}:{ buttonText: string}
    ) => {
    return(
        <div className=" bg-green-800 rounded-full px-12 py-2.5">
            <div className=" text-base">{buttonText}</div>
        </div>
    );
};