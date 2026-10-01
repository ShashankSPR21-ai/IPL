function MatchCard(props) {
  return (
    <div className="match-card">
      <h2>
        {props.team1} vs {props.team2}
      </h2>
      <p>📍 {props.venue}</p>
      <p>📅 {props.date}</p>
    </div>
  );
}

function Matches() {
  const matchesData = [
    {
      team1: "RCB",
      team2: "CSK",
      venue: "M. Chinnaswamy Stadium, Bengaluru",
      date: "25 March 2026",
    },
    {
      team1: "MI",
      team2: "KKR",
      venue: "Wankhede Stadium, Mumbai",
      date: "28 March 2026",
    },
    {
      team1: "GT",
      team2: "RR",
      venue: "Narendra Modi Stadium, Ahmedabad",
      date: "30 March 2026",
    },
    {
      team1: "SRH",
      team2: "DC",
      venue: "Rajiv Gandhi International Stadium, Hyderabad",
      date: "01 April 2026",
    },
    {
      team1: "LSG",
      team2: "PBKS",
      venue: "Ekana Cricket Stadium, Lucknow",
      date: "03 April 2026",
    },
  ];

  return (
    <main className="matches-page">
      <h1>Upcoming IPL Matches</h1>
      <div className="matches-grid">
        {matchesData.map((match, index) => (
          <MatchCard
            key={index}
            team1={match.team1}
            team2={match.team2}
            venue={match.venue}
            date={match.date}
          />
        ))}
      </div>
    </main>
  );
}

export default Matches;