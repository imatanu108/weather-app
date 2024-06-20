import React from 'react'

function AutoSearchCard({ autoSearchData, onClickHandler }) {

    if (autoSearchData && autoSearchData.length > 0) {
        return (
            <div className='bg-[rgba(44,73,102,0.49)] text-slate-50 p-1 rounded-xl w-80'>
                {autoSearchData.map((locationData, index) => {
                    return (
                        <div 
                        key={index} 
                        onClick={onClickHandler}
                        className='m-1 py-1 px-2 cursor-pointer hover:bg-blue-500 rounded-md transition duration-200'
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