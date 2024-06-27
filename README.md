# PreWeather

Welcome to PreWeather, a sophisticated weather app built using React and Redux. This app provides real-time weather updates for multiple locations with various advanced features designed to enhance user experience.

## Features

### 1. Live Weather Data
- Enter any location to receive live weather updates.
- Information includes temperature, feels like temperature, current condition, wind speed, UV level, chance of rain, humidity, cloud cover, and more.

### 2. Auto Daytime Detection
- The app detects the time of day (morning, noon, mid-night, dusk) and adjusts accordingly.

### 3. Forecast Weather Data
- Provides upcoming hourly weather data for the next 10 days.

### 4. Refresh Data
- Update weather data without reloading the page by clicking the refresh button.

### 5. Dynamic Backgrounds
- Background images change based on the time of day in the live location.

### 6. Persistent Local Storage
- All weather data and settings are saved to local storage, ensuring data is retained across sessions.

### 7. Multi-location Mode
- Add multiple locations to your dashboard and view their weather data simultaneously.
- Data for multiple locations is stored separately from the main location and is also saved to local storage.

### 8. Data Management
- Easily remove all location data with a reset button.

### 9. Location Suggestions
- Typing a location name provides auto-complete suggestions for easy selection.

### 10. Iconography
- Numerous icons representing various weather conditions are displayed across all pages.

### 11. Single vs Multi-location Mode
- Multi-location mode operates independently of the single-location mode, ensuring no data conflicts.

### 12. Responsive Design
- The app is fully responsive and designed using Tailwind CSS to ensure it looks great on all devices.

## Deployment

The app is deployed on Vercel and can be accessed at [preweather.vercel.app](https://preweather.vercel.app).

## Technologies Used

- **React**: For building the user interface.
- **Redux/Redux Toolkit**: For state management.
- **Tailwind CSS**: For responsive and modern design.
- **Local Storage**: For persisting data across sessions.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/imatanu108/weather-app.git
    ```

2. Navigate to the project directory:
    ```bash
    cd weather-app
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

4. Start the development server:
    ```bash
    npm start
    ```

The app should now be running on `http://localhost:3000`.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have any improvements or new features to suggest.

---

Enjoy using PreWeather!
