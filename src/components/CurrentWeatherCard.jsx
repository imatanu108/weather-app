import React from 'react'
import { useSelector } from 'react-redux'
import { Loading } from "./index"

function CurrentWeatherCard() {
    const currentWeatherData = useSelector((state) => state.weather.currentWeatherData)
    const liveWeather = currentWeatherData.current
    const forecastWeather = currentWeatherData.forecast
    const location = currentWeatherData.location

    let dayTime = ''
    let uvLevel = ''

    if (currentWeatherData && liveWeather) {
        let time = String(liveWeather.last_updated.split(" ")[1]);
        let timeInt = parseInt(time.replace(":", ""), 10);

        const timeRanges = [
            { start: 0, end: 100, name: "Mid Night", gradient: "linear-gradient(to bottom, #0f253e, #061424)", color: "#061424" },
            { start: 101, end: 330, name: "Late Night", gradient: "linear-gradient(to bottom, #0f253e, #041b28)", color: "#041b28" },
            { start: 331, end: 500, name: "Dawn", gradient: "linear-gradient(to bottom, #0b5761, #0f3d56, #18273e)", color: "#18273e" },
            { start: 501, end: 659, name: "Early Morning", gradient: "linear-gradient(to bottom, #3e82c5, #1c4f6c)", color: "#1c4f6c" },
            { start: 700, end: 1100, name: "Morning", gradient: "linear-gradient(to bottom, #3e82c5, #3060b8)", color: "#3060b8" },
            { start: 1101, end: 1459, name: "Noon", gradient: "linear-gradient(to bottom, #4a90e2, #5c8ebf)", color: "#5c8ebf" },
            { start: 1500, end: 1700, name: "Afternoon", gradient: "linear-gradient(to bottom, #3385e3, #427bb5, #3a5b7d)", color: "#3a5b7d)" },
            { start: 1701, end: 1759, name: "Dusk", gradient: "linear-gradient(to bottom, #6e0a40, #bc4a39, #753d29)", color: "#753d29" },
            { start: 1800, end: 2059, name: "Evening", gradient: "linear-gradient(to bottom, #092846, #28527c)", color: "#28527c" },
            { start: 2100, end: 2359, name: "Night", gradient: "linear-gradient(to bottom, #142538, #040e21)", color: "#040e21" }
        ];

        for (let range of timeRanges) {
            if (timeInt >= range.start && timeInt <= range.end) {
                dayTime = range.name;
                document.body.style.backgroundImage = range.gradient;
                document.body.style.backgroundColor = range.color;
                // background color isn't important but still only for better optimization
                break;
            }
        }

        switch (liveWeather.uv) {
            case 10:
            case 9:
            case 8:
                uvLevel = "Very High"
                break;

            case 7:
            case 6:
                uvLevel = "High"
                break;

            case 5:
            case 4:
            case 3:
                uvLevel = "Medium"
                break;

            case 2:
            case 1:
                uvLevel = "Low"
                break;

            default:
                break;
        }
    }

    if (liveWeather && forecastWeather && location) {
        return (
            <div className='flex flex-row mx-1 flex-wrap gap-4 mt-4 lg:mt-6 mb-6 justify-center'>
                <div className='flex p-3 md:p-4 w-fit flex-col justify-center items-center border-2 border-[rgb(142,204,208)] rounded-xl shadow-lg'>
                    <div className='text-center mb-4'>
                        <span className='text-2xl font-semibold'>{location.name}</span>
                        <span className='text-base text-[#c4dde9fc]'> {location.region}, {location.country} </span>
                    </div>
                    <div>
                        <div className='text-center'>
                            <div className='text-5xl font-extrabold'>{liveWeather.temp_c}
                                <span className='font-semibold text-[#c4dde9fc]'>°C</span>
                                <span className='text-xl font-semibold text-[#c4dde9fc]'> {dayTime}</span>
                            </div>
                            <div className='text-lg mt-1 px-16 mb-2 text-[#c4dde9fc]'>
                                Feels like
                                <span className='font-bold'> {liveWeather.feelslike_c} °C</span>
                            </div>
                        </div>
                        <div className='flex flex-row items-center justify-center'>
                            <div>
                                <img src={String(liveWeather.condition.icon)} width={90} alt="weather-icon" />
                            </div>
                            <div>
                                <div className='text-lg mt-2'>{liveWeather.condition.text}</div>
                                <div className='text-base font-bold text-[#c4dde9fc]'>
                                    {forecastWeather.forecastday[0].day.mintemp_c} ~ {forecastWeather.forecastday[0].day.maxtemp_c} °C
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex px-6 py-4 w-fit flex-col text-base gap-2 justify-between border-2 border-[rgb(142,204,208)] rounded-xl shadow-lg'>
                    <div className='flex gap-1 items-center'>
                        <span className='mr-1'><img src="/humidity.svg" alt="" width={22} /></span>
                        <span className='text-[#c4dde9fc]'>Humidity:</span>
                        <span>{liveWeather.humidity}%</span>
                    </div>
                    <div className='flex gap-3'>
                        <div className='flex gap-1 items-center'>
                            <span className='mr-1'><img src="/cloud.svg" alt="" width={20} /></span>
                            <span className='text-[#c4dde9fc]'>Cloud:</span>
                            <span>{liveWeather.cloud}%</span>
                        </div>
                        <div className='flex gap-1 items-center'>
                            <span className='mr-1'><img src="/rain.svg" alt="" width={20} /></span>
                            <span className='text-[#c4dde9fc]'>Rain:</span> 
                            <span>{forecastWeather.forecastday[0].day.daily_will_it_rain}%</span>
                        </div>
                    </div>
                    <div className='flex gap-1 items-center'>
                        <span className='mr-1'><img src="/uv.svg" alt="" width={22} /></span>
                        <span className='text-[#c4dde9fc]'>UV:</span> 
                        <span>{liveWeather.uv} {uvLevel}</span>
                    </div>
                    <div className='flex gap-1 items-center'>
                        <span className='mr-1'><img src="/wind.svg" alt="" width={20} /></span>
                        <span className='text-[#c4dde9fc]'>Wind:</span> 
                        <span>{liveWeather.wind_kph} kph {liveWeather.wind_dir}</span>
                    </div>
                    <div className='flex gap-1 items-center'>
                        <span className='mr-1'><img src="/max-wind.svg" alt="" width={20} /></span>
                        <span className='text-[#c4dde9fc]'>Max Wind Speed:</span> 
                        <span>{forecastWeather.forecastday[0].day.maxwind_kph} kph</span>
                    </div>
                    <div className='flex gap-1 items-center'>
                        <span className='mr-1'><img src="/sunrise.svg" alt="" width={22} /></span>
                        <span className='text-[#c4dde9fc]'>Sunrise:</span> 
                        <span>{forecastWeather.forecastday[0].astro.sunrise}</span>
                    </div>
                    <div className='flex gap-1 items-center'>
                        <span className='mr-1'><img src="/sunset.svg" alt="" width={22} /></span>
                        <span className='text-[#c4dde9fc]'>Sunset:</span> 
                        <span>{forecastWeather.forecastday[0].astro.sunset}</span>
                    </div>
                    <div>
                        <span className='text-[#c4dde9fc]'>Last updated at</span> 
                        <span> {location.localtime}</span>
                    </div>
                </div>
            </div>
        )
    } else {
        return <Loading />;
    }
}

export default CurrentWeatherCard