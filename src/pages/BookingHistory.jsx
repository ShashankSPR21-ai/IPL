import { useEffect, useState } from "react";
import { supabase } from "../supabase";

function BookingHistory() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function fetchBookings() {
      setLoading(true);
      setErrorMsg("");

      const { data, error } = await supabase
        .from("bookings")
        .select("*")
        .order("id", { ascending: false });

      if (cancelled) return;

      if (error) {
        console.error("Error fetching bookings:", error);
        setErrorMsg(error.message);
      } else {
        console.log("Bookings:", data);
        setBookings(data ?? []);
      }
      setLoading(false);
    }

    fetchBookings();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <main className="page-container">
      <h1 style={{ color: "#ffffff" }}>Booking History</h1>

      {loading ? (
        <p style={{ color: "#9ca3af" }}>Loading entries...</p>
      ) : errorMsg ? (
        <p style={{ color: "#ef4444" }}>Error: {errorMsg}</p>
      ) : bookings.length === 0 ? (
        <p style={{ color: "#9ca3af" }}>No bookings found.</p>
      ) : (
        <div className="history-list">
          {bookings.map((item, index) => (
            <div className="history-card" key={item.id ?? index}>
              <h3 style={{ color: "#2563eb" }}>👤 {item.name}</h3>
              <p style={{ color: "#374151" }}>
                🎟️ Tickets: <strong style={{ color: "#000000" }}>{item.tickets}</strong>
              </p>
              <p style={{ color: "#374151" }}>
                💺 Stand: <strong style={{ color: "#000000" }}>{item.stand}</strong>
              </p>
              <p style={{ color: "#374151" }}>
                📍 Venue: <strong style={{ color: "#000000" }}>{item.venue}</strong>
              </p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}

export default BookingHistory;