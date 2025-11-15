export const LoadingScreen = () => {


    return <div className="fixed insert-0 z-50 bg-white text-grey-100 flex flex-col iems-center justify-center">
        
        {/* div is for the type writter effect */}
        <div classname="mb-4 text-4xl font-mono font_bold">
            Good News Everybody! <span className="animate_blink ml-1"> | </span>

        </div>

        {/* for the progress bar */}
        <div>
            <div classname="w-[200px] h-[2px] bg-grey-800 rounded relative overflow-hidden">
                <div className= "w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate_loading_bar">
                    
                </div>
            </div>
        </div>

    </div>
}