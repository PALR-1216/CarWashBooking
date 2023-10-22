import React, { useState } from 'react';
import Swal from 'sweetalert2';

const BookingForm = () => {
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);

  const availableDates = ['Mon Oct 09 2023'];

  const availableTimes = {
    'Mon Oct 09 2023': [
      'Morning 9:00 am',
      'Morning 10:00 am',
      'Morning 11:00 am',
      'Afternoon 12:00 pm',
      'Afternoon 2:00 pm',
    ],
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
    // Reset the selected time when the date changes
    setTime(null);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleBooking = () => {
    if (date && time) {
      Swal.fire({
        title: 'Booking Confirmation',
        text: `You have successfully booked for ${date} at ${time}.`,
        icon: 'success',
      });
    } else {
      Swal.fire({
        title: 'Oops!',
        text: 'Please select a date and time before booking.',
        icon: 'error',
      });
    }
  };

  return (
    <div className="p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Select Date</h1>
      <select
        className="w-full p-2 border border-gray-300 rounded"
        value={date}
        onChange={handleDateChange}
      >
        <option value="">Select Date</option>
        {availableDates.map((date) => (
          <option key={date} value={date}>
            {date}
          </option>
        ))}
      </select>

      {date && (
        <div>
          <h2 className="text-2xl font-bold mt-4 mb-2">Available Times</h2>
          <select
            className="w-full p-2 border border-gray-300 rounded"
            value={time}
            onChange={handleTimeChange}
          >
            <option value="">Select Time</option>
            {availableTimes[date].map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
      )}

      {date && time && (
        <div className="text-center mt-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleBooking}
          >
            Book
          </button>
        </div>
      )}
    </div>
  );
};

export default BookingForm;
