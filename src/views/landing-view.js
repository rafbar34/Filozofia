import React from 'react'

export const LandingPage = () => {
  return (
    <div
    style={{
      fontFamily: "Arial, sans-serif",
      margin: 0,
      padding: 0,
      backgroundColor: "#f8f9fa",
      color: "#333",
      width:'100%'
    }}
  >
    <header
      style={{
        backgroundColor: "#e3f2fd",
        color: "#333",
        textAlign: "center",
        padding: "3rem",
        paddingTop:"5rem",
        marginLeft:-20,
        marginRight:-20
        
      }}
    >
      <h1 style={{ margin: 0, fontSize: "2.5rem" }}>The Omega Project</h1>
      <p style={{ fontSize: "1.2rem" }}>
        Wzrost świadomości o pozytywnych aspektach sztucznej inteligencji
      </p>
    </header>

    <section
      style={{
        padding: "2rem",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>O Projekcie</h2>
      <p style={{ fontSize: "1rem", lineHeight: "1.5" }}>
        The Omega Project ma na celu zwiększenie wiedzy i świadomości społecznej
        na temat pozytywnych aspektów sztucznej inteligencji (AI), zgodnie z
        filozofią Pierre’a Teilharda de Chardina. Naszym celem jest zmniejszenie
        obaw dotyczących AI i pokazanie, jak ta technologia może wspierać rozwój
        ludzkości, szczególnie w takich dziedzinach jak medycyna, edukacja czy
        ochrona środowiska.
      </p>
    </section>

    <section
      style={{
        padding: "2rem",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Cel Projektu</h2>
      <ul style={{ fontSize: "1rem", lineHeight: "1.5", paddingLeft: "20px" }}>
        <li>Pokazanie AI jako technologii łączącej ludzi i wspierającej ich rozwój.</li>
        <li>Edukowanie społeczeństwa o pozytywnych zastosowaniach AI.</li>
        <li>Budowanie pozytywnego wizerunku AI jako elementu postępu i jedności społeczeństwa.</li>
      </ul>
    </section>

    <section
      style={{
        padding: "2rem",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Grupa Docelowa</h2>
      <p style={{ fontSize: "1rem", lineHeight: "1.5" }}>
        Projekt jest skierowany do internautów, którzy mają obawy lub są niepewni co do roli sztucznej
        inteligencji w codziennym życiu. Jeśli chcesz dowiedzieć się, jak AI może wpłynąć na medycynę,
        edukację i ochronę środowiska, to jest to miejsce dla Ciebie!
      </p>
    </section>

    
  </div>
  )
}
