import React from 'react'

function AutoSearchCard({ autoSearchData, onClickHandler }) {

    if (autoSearchData && autoSearchData.length > 0) {
        return (
            <div className='bg-[rgba(44,57,69,0.35)] text-base p-1 rounded-xl w-80'>
                <div className='text-center pt-1 text-[#b6deeb]'>
                    Suggestions
                </div>
                {autoSearchData.map((locationData, index) => {
                    return (
                        <div
                            key={index}
                            onClick={onClickHandler}
                            className='m-1 py-1 px-2 text-[#d4e4e9] cursor-pointer hover:bg-[rgb(55,173,197)] hover:text-slate-50 rounded-md transition duration-200'
                        >
                            {locationData.name}, {locationData.country}
                        </div>
                    )
                })}
            </div>
        )
    } else {
        return null;
    }
}

export default AutoSearchCard