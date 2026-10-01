import rcbLogo from "./rcb-logo.png"; // Vite turns this into the correct asset URL

function Home() {
  return (
    <main
      style={{
        minHeight: "calc(100vh - 70px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        gap: "20px",
      }}
    >
      <img
        src={rcbLogo}
        alt="RCB Logo"
        style={{
          width: "150px",
          height: "auto",
          filter: "drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.3))",
        }}
      />
      <h1>Welcome to IPL Ticket Booking</h1>
    </main>
  );
}

export default Home;