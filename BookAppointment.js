import { useState } from 'react';

function BookAppointment() {
  const [appointment, setAppointment] = useState({
    name: '',
    date: '',
    time: '',
    reason: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can later connect this to a backend POST route to save appointment
    alert("Appointment booked!\n" + JSON.stringify(appointment, null, 2));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Book an Appointment</h2>
      <input type="text" placeholder="Full Name" required onChange={e => setAppointment({...appointment, name: e.target.value})} />
      <input type="date" required onChange={e => setAppointment({...appointment, date: e.target.value})} />
      <input type="time" required onChange={e => setAppointment({...appointment, time: e.target.value})} />
      <textarea placeholder="Reason for appointment" required onChange={e => setAppointment({...appointment, reason: e.target.value})}></textarea>
      <button type="submit">Submit</button>
    </form>
  );
}

export default BookAppointment;
