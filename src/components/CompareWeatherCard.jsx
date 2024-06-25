import React from 'react'

function CompareWeatherCard({ weatherData }) {
    if (weatherData) {
        const liveWeather = weatherData.current
        const forecastWeather = weatherData.forecast
        const location = weatherData.location

        let dayTime = ''
        let uvLevel = ''

        if (weatherData && liveWeather) {
            let time = String(liveWeather.last_updated.split(" ")[1]);
            let timeInt = parseInt(time.replace(":", ""), 10);

            const timeRanges = [
                { start: 0, end: 100, name: "Mid Night", gradient: "linear-gradient(to bottom, #0f253e, #061424)", color: "#061424" },
                { start: 101, end: 330, name: "Late Night", gradient: "linear-gradient(to bottom, #0f253e, #041b28)", color: "#041b28" },
                { start: 331, end: 500, name: "Dawn", gradient: "linear-gradient(to bottom, #0b5761, #0f3d56, #18273e)", color: "#18273e" },
                { start: 501, end: 659, name: "Early Morning", gradient: "linear-gradient(to bottom, #3e82c5, #1c4f6c)", color: "#1c4f6c" },
                { start: 700, end: 1100, name: "Morning", gradient: "linear-gradient(to bottom, #3e82c5, #3060b8)", color: "#3060b8" },
                { start: 1101, end: 1459, name: "Noon", gradient: "linear-gradient(to bottom, #4a90e2, #5c8ebf)", color: "#5c8ebf" },
                { start: 1500, end: 1700, name: "Afternoon", gradient: "linear-gradient(to bottom, #4a90e2, #75b4f4)", color: "#75b4f4)" },
                { start: 1701, end: 1759, name: "Dusk", gradient: "linear-gradient(to bottom, #ff4500, #d34e39, #ff7f50)", color: "#ff7f50" },
                { start: 1800, end: 2059, name: "Evening", gradient: "linear-gradient(to bottom, #2c3e50, #3f6a95)", color: "#3f6a95" },
                { start: 2100, end: 2359, name: "Night", gradient: "linear-gradient(to bottom, #1b2735, #080614)", color: "#080614" }
            ];

            for (let range of timeRanges) {
                if (timeInt >= range.start && timeInt <= range.end) {
                    dayTime = range.name;
                    document.body.style.backgroundImage = range.gradient;
                    document.body.style.backgroundColor = range.color;
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
                <div className='flex w-fit md:p-1 flex-row flex-wrap justify-center items-center bg-[rgba(27,56,71,0.06)] border-2 border-[rgb(142,208,147)] rounded-xl shadow-xl'>
                    <div className='flex p-4 w-fit flex-col'>
                        <div className='text-center mb-4'>
                            <span className='text-xl'>{location.name}</span>
                            <span className='text-sm text-[rgba(212,252,255,0.71)]'> {location.region}, {location.country} </span>
                        </div>
                        <div>
                            <div className='text-center'>
                                <div className='text-4xl font-medium'>{liveWeather.temp_c} °C
                                    <span className='text-sm text-[rgba(212,252,255,0.71)]'> {dayTime}</span>
                                </div>
                                <div className='text-base text-[rgba(212,252,255,0.71)]'>
                                    Feels like {liveWeather.feelslike_c} °C
                                </div>
                            </div>
                            <div className='flex flex-row items-center justify-center'>
                                <div>
                                    <img src={String(liveWeather.condition.icon)} width={80} alt="weather-icon" />
                                </div>
                                <div>
                                    <div className='text-base mt-2'>{liveWeather.condition.text}</div>
                                    <div className='text-[rgba(212,252,255,0.71)]'>
                                        {forecastWeather.forecastday[0].day.mintemp_c} ~ {forecastWeather.forecastday[0].day.maxtemp_c} °C
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex px-4 py-3 w-fit flex-col gap-1 justify-between'>
                        <div className='flex gap-1'>
                            <span className='mr-1'><img src="/src/assets/humidity.svg" alt="" width={22} /></span>
                            <span className='text-[rgba(212,252,255,0.77)]'>Humidity:</span>
                            {liveWeather.humidity}%
                        </div>
                        <div className='flex gap-3'>
                            <div className='flex gap-1'>
                                <span className='mr-1'><img src="/src/assets/cloud.svg" alt="" width={20} /></span>
                                <span className='text-[rgba(212,252,255,0.77)]'>Cloud:</span>
                                {liveWeather.cloud}%
                            </div>
                            <div className='flex gap-1'>
                                <span className='mr-1'><img src="/src/assets/rain.svg" alt="" width={22} /></span>
                                <span className='text-[rgba(212,252,255,0.77)]'>Rain:</span> {forecastWeather.forecastday[0].day.daily_will_it_rain}%
                            </div>
                        </div>
                        <div className='flex gap-1'>
                            <span className='mr-1'><img src="/src/assets/uv.svg" alt="" width={22} /></span>
                            <span className='text-[rgba(212,252,255,0.77)]'>UV:</span> {liveWeather.uv} {uvLevel}
                        </div>
                        <div className='flex gap-1'>
                            <span className='mr-1'><img src="/src/assets/wind.svg" alt="" width={20} /></span>
                            <span className='text-[rgba(212,252,255,0.77)]'>Wind:</span> {liveWeather.wind_kph} kph {liveWeather.wind_dir}
                        </div>
                        <div className='flex gap-1'>
                            <span className='mr-1'><img src="/src/assets/max-wind.svg" alt="" width={20} /></span>
                            <span className='text-[rgba(212,252,255,0.77)]'>Max Wind Speed:</span> {forecastWeather.forecastday[0].day.maxwind_kph} kph
                        </div>
                        <div className='flex gap-1'>
                            <span className='mr-1'><img src="/src/assets/sunrise.svg" alt="" width={22} /></span>
                            <span className='text-[rgba(212,252,255,0.77)]'>Sunrise:</span> {forecastWeather.forecastday[0].astro.sunrise}
                        </div>
                        <div className='flex gap-1'>
                            <span className='mr-1'><img src="/src/assets/sunset.svg" alt="" width={22} /></span>
                            <span className='text-[rgba(212,252,255,0.77)]'>Sunset:</span> {forecastWeather.forecastday[0].astro.sunset}
                        </div>
                        <div>
                            <span className='text-[rgba(212,252,255,0.77)]'>Last updated at</span> {location.localtime}
                        </div>
                    </div>
                </div>
            )
        }

    }
}

export default CompareWeatherCard