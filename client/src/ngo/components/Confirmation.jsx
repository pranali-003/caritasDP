const Confirmation = ({ appointmentDate }) => {
    return (
      <div className="container mt-4">
        <h3>Appointment Confirmed</h3>
        <p>Thank you for your donation! Your appointment has been booked for:</p>
        <p><strong>{appointmentDate ? appointmentDate.toString() : 'No Date Selected'}</strong></p>
        <p>An SMS has been sent to you and the NGO with the appointment details.</p>
        <button className="btn btn-primary">Join Community</button>
      </div>
    );
  };
  
  export default Confirmation;
  