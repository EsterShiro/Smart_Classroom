import React from 'react';
import BME280Sensor from './components/BME280Sensor';
import MQ7Sensor from './components/MQ7Sensor';
import SDS011Sensor from './components/SDS011Sensor';
import MQ135Sensor from './components/MQ135Sensor';
import MQ131Sensor from './components/MQ131Sensor';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      <div className="flex-1 p-4">
        <h1 className="text-5xl font-bold mb-8 text-center text-black">Dashboard sensor</h1>
        <div className="flex flex-wrap justify-center gap-8">
          <BME280Sensor />
          <MQ7Sensor />
          <SDS011Sensor />
          <MQ135Sensor />
          <MQ131Sensor />
        </div>
      </div>
    </div>
  );
}

export default App;
