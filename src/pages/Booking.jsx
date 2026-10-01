import { useState } from "react";
import { supabase } from "../supabase";

function Booking() {
  const [name, setName] = useState("");
  const [tickets, setTickets] = useState("");
  const [stand, setStand] = useState("");
  const [venue, setVenue] = useState("");
  const [loading, setLoading] = useState(false);

  // Shared styles so typed text is always visible
  const fieldStyle = {
    color: "#000000",
    backgroundColor: "#ffffff",
    border: "1px solid #d1d5db",
    borderRadius: "8px",
    padding: "10px 12px",
    fontSize: "1rem",
    width: "100%",
    boxSizing: "border-box",
    marginBottom: "14px",
  };

  const labelStyle = {
    color: "#060606",
    display: "block",
    marginBottom: "4px",
  };

  async function handleBooking() {
    if (!name || !tickets || !stand || !venue) {
      alert("Please fill all details before submitting.");
      return;
    }

    setLoading(true);

    const { error } = await supabase.from("bookings").insert([
      {
        name: name,
        tickets: parseInt(tickets, 10),
        stand: stand,
        venue: venue,
      },
    ]);

    setLoading(false);

    if (error) {
      alert("Error saving booking: " + error.message);
    } else {
      alert("🎉 Ticket booked successfully!");
      setName("");
      setTickets("");
      setStand("");
      setVenue("");
    }
  }

  return (
    <main className="page-container">
      <h1 style={{ color: "#ffffff" }}>Book Your Ticket</h1>
      <div className="booking-form">
        <label htmlFor="name" style={labelStyle}>Full Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          style={fieldStyle}
        />

        <label htmlFor="tickets" style={labelStyle}>Number of Tickets</label>
        <input
          id="tickets"
          type="number"
          min="1"
          value={tickets}
          onChange={(e) => setTickets(e.target.value)}
          placeholder="Enter number of tickets"
          style={fieldStyle}
        />

        <label htmlFor="stand" style={labelStyle}>Select Stand</label>
        <select
          id="stand"
          value={stand}
          onChange={(e) => setStand(e.target.value)}
          style={fieldStyle}
        >
          <option value="">-- Select Stand --</option>
          <option value="General Stand">General Stand</option>
          <option value="VIP Stand">VIP Stand</option>
        </select>

        <label htmlFor="venue" style={labelStyle}>Select Venue</label>
        <select
          id="venue"
          value={venue}
          onChange={(e) => setVenue(e.target.value)}
          style={fieldStyle}
        >
          <option value="">-- Select Venue --</option>
          <option value="M. Chinnaswamy Stadium, Bengaluru">M. Chinnaswamy Stadium, Bengaluru</option>
          <option value="Wankhede Stadium, Mumbai">Wankhede Stadium, Mumbai</option>
          <option value="Narendra Modi Stadium, Ahmedabad">Narendra Modi Stadium, Ahmedabad</option>
          <option value="MA Chidambaram Stadium (Chepauk), Chennai">MA Chidambaram Stadium (Chepauk), Chennai</option>
          <option value="Eden Gardens, Kolkata">Eden Gardens, Kolkata</option>
          <option value="Arun Jaitley Stadium, Delhi">Arun Jaitley Stadium, Delhi</option>
          <option value="Rajiv Gandhi International Stadium, Hyderabad">Rajiv Gandhi International Stadium, Hyderabad</option>
          <option value="Punjab Cricket Association IS Bindra Stadium, Mohali">PCA IS Bindra Stadium, Mohali</option>
          <option value="Maharaja Yadavindra Singh Cricket Stadium, Mullanpur">Maharaja Yadavindra Singh Stadium, Mullanpur</option>
          <option value="Sawai Mansingh Stadium, Jaipur">Sawai Mansingh Stadium, Jaipur</option>
          <option value="Bharat Ratna Shri Atal Bihari Vajpayee Ekana Cricket Stadium, Lucknow">Ekana Cricket Stadium, Lucknow</option>
          <option value="Barsapara Cricket Stadium, Guwahati">Barsapara Cricket Stadium, Guwahati</option>
          <option value="Himachal Pradesh Cricket Association Stadium, Dharamshala">HPCA Stadium, Dharamshala</option>
          <option value="Dr. Y.S. Rajasekhara Reddy ACA-VDCA Cricket Stadium, Visakhapatnam">ACA-VDCA Stadium, Visakhapatnam</option>
          <option value="Green Park Stadium, Kanpur">Green Park Stadium, Kanpur</option>
          <option value="Holkar Cricket Stadium, Indore">Holkar Cricket Stadium, Indore</option>
          <option value="Maharashtra Cricket Association Stadium, Pune">MCA Stadium, Pune</option>
          <option value="Brabourne Stadium, Mumbai">Brabourne Stadium, Mumbai</option>
          <option value="DY Patil Stadium, Navi Mumbai">DY Patil Stadium, Navi Mumbai</option>
          <option value="Saurashtra Cricket Association Stadium, Rajkot">SCA Stadium, Rajkot</option>
          <option value="Shaheed Veer Narayan Singh International Stadium, Raipur">Shaheed Veer Narayan Singh Stadium, Raipur</option>
          <option value="Barabati Stadium, Cuttack">Barabati Stadium, Cuttack</option>
        </select>

        <button onClick={handleBooking} disabled={loading}>
          {loading ? "Saving..." : "Book Ticket"}
        </button>
      </div>

      <section className="booking-details">
        <h3 style={{ color: "#1e293b" }}>Live Preview</h3>
        <p style={{ color: "#475569" }}>
          Name: <strong style={{ color: "#0f172a" }}>{name || "-"}</strong>
        </p>
        <p style={{ color: "#475569" }}>
          Tickets: <strong style={{ color: "#0f172a" }}>{tickets || "-"}</strong>
        </p>
        <p style={{ color: "#475569" }}>
          Stand: <strong style={{ color: "#0f172a" }}>{stand || "-"}</strong>
        </p>
        <p style={{ color: "#475569" }}>
          Venue: <strong style={{ color: "#0f172a" }}>{venue || "-"}</strong>
        </p>
      </section>
    </main>
  );
}

export default Booking;