import { ImageComponentProps } from "@/src/interfaces";


export const ImageComponent = ({
    photos
  }: ImageComponentProps) => {

    return (
        <>
            <div className="flex flex-col flex-grow">
                <div className="flex flex-row flex-grow space-x-4">
                    <div className="flex-grow flex items-end justify-end w-1/2">
                        <img 
                            src={photos?.[0]}
                            alt="Image" 
                            className="w-[60%] h-[50%] object-cover"
                        />
                    </div>
                    <div className="flex-grow flex items-end justify-start w-1/2">
                        <img 
                            src={photos?.[1]} 
                            alt="Image" 
                            className="w-4/6 h-[70%] object-cover"
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-col flex-grow">
                <div className="flex flex-row flex-grow space-x-4">
                    <div className="flex-grow flex items-start justify-center">
                        <img 
                            src={photos?.[2]} 
                            alt="Imagen" 
                            className="w-full h-[50%] object-cover"
                        />
                    </div>
                    <div className="flex-shrink-0 w-[30%] flex items-start justify-center">
                        <img 
                            src={photos?.[3]} 
                            alt="Imagen" 
                            className="w-full h-[70%] object-cover"
                        />
                    </div>
                    <div className="flex-grow flex items-start justify-center">
                        <img 
                            src={photos?.[4]} 
                            alt="Imagen" 
                            className="w-full h-[50%] object-cover"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}