import React from 'react'

function CompareWeatherCard({ weatherData }) {
    if (weatherData) {
        const liveWeather = weatherData.current
        const forecastWeather = weatherData.forecast
        const location = weatherData.location

        let dayTime = ''

        if (weatherData && liveWeather) {
            let time = String(liveWeather.last_updated.split(" ")[1]);
            let timeInt = parseInt(time.replace(":", ""), 10);

            const timeRanges = [
                { start: 0, end: 100, name: "Mid Night" },
                { start: 101, end: 330, name: "Late Night" },
                { start: 331, end: 500, name: "Dawn" },
                { start: 501, end: 659, name: "Early Morning" },
                { start: 700, end: 1100, name: "Morning" },
                { start: 1101, end: 1459, name: "Noon" },
                { start: 1500, end: 1700, name: "Afternoon" },
                { start: 1701, end: 1759, name: "Dusk" },
                { start: 1800, end: 2059, name: "Evening" },
                { start: 2100, end: 2359, name: "Night" }
            ];

            for (let range of timeRanges) {
                if (timeInt >= range.start && timeInt <= range.end) {
                    dayTime = range.name;
                    break;
                }
            }
        }

        if (liveWeather && forecastWeather && location) {
            return (
                <div className='flex flex-row flex-wrap gap-4 mt-4 mb-6 justify-center'>
                    <div className='flex p-4 w-fit flex-col border-2 border-[rgb(142,208,147)] rounded-xl shadow-lg'>
                        <div className='text-center mb-4'>
                            <span className='text-xl'>{location.name}</span>
                            <span className='text-sm text-slate-300'> {location.region}, {location.country} </span>
                        </div>
                        <div>
                            <div className='text-center'>
                                <div className='text-4xl font-medium'>{liveWeather.temp_c} °C
                                    <span className='text-sm text-slate-300'> {dayTime}</span>
                                </div>
                                <div className='text-base text-slate-300'>
                                    Feels like {liveWeather.feelslike_c} °C
                                </div>
                            </div>
                            <div className='flex flex-row items-center justify-center'>
                                <div>
                                    <img src={String(liveWeather.condition.icon)} width={80} alt="weather-icon" />
                                </div>
                                <div>
                                    <div className='text-xl mt-2'>{liveWeather.condition.text}</div>
                                    <div>
                                        {forecastWeather.forecastday[0].day.mintemp_c} ~ {forecastWeather.forecastday[0].day.maxtemp_c} °C
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex px-4 py-3 w-fit flex-col justify-between border-2 border-[rgb(142,208,147)] rounded-xl shadow-lg'>
                        <div>
                            Humidity: {liveWeather.humidity}%
                        </div>
                        <div>
                            Cloud: {liveWeather.cloud}%
                        </div>
                        <div>
                            Rain: {forecastWeather.forecastday[0].day.daily_will_it_rain}%
                        </div>
                        <div>
                            Wind: {liveWeather.wind_kph} kph {liveWeather.wind_dir}
                        </div>
                        <div>
                            Max Wind Speed: {forecastWeather.forecastday[0].day.maxwind_kph} kph
                        </div>
                        <div>
                            Sunrise: {forecastWeather.forecastday[0].astro.sunrise}
                        </div>
                        <div>
                            Sunset: {forecastWeather.forecastday[0].astro.sunset}
                        </div>
                        <div>
                            Last updated at {location.localtime}
                        </div>
                    </div>
                </div>
            )
        }

    }
}

export default CompareWeatherCard