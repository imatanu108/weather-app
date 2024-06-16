import React from 'react';

const Loading = () => {
    return (
        <div className="flex flex-col p-20 items-center justify-center h-1/2 bg-transparent">
            <div className="relative">
                <div className="w-12 h-12 rounded-full bg-white opacity-75 animate-pulse"></div>
                <div className="absolute top-0 left-0 w-12 h-12 rounded-full bg-white opacity-50 animate-ping"></div>
            </div>
            <div className="mt-6 text-lg text-white">Loading...</div>
        </div>
    );
};

export default Loading;
