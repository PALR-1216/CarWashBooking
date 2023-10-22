import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import Select from 'react-select';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import { format, addDays } from 'date-fns'; // Import date-fns functions

const BookingForm = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  // Generate a list of times in 12-hour format
  const times = [
    '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
    '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM',
    '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM'
  ];

  return (
    <div className="container mx-auto mt-8 flex justify-center">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6 w-full">
        <h2 className="text-2xl font-semibold mb-4">Book an Appointment</h2>

        <div className="mb-4 flex justify-center"> {/* Center the date picker */}
          <label className="block text-gray-600 text-sm font-semibold">Select Date</label>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            minDate={new Date()}
            filterDate={date => date >= new Date()}
            className="w-full p-2 border rounded"
            dateFormat="MM/dd/yyyy" // Date format
          />
        </div>

        {selectedDate && (
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-semibold">Select Time</label>
            <Select
              options={times.map((time) => ({ value: time, label: time }))}
              value={selectedTime}
              onChange={(time) => setSelectedTime(time)}
              className="w-full p-2 border rounded"
            />
          </div>
        )}

        <button className="bg-blue-500 text-white py-2 px-4 rounded-full">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default BookingForm;
