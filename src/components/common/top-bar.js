import React from "react";
import { useNavigate } from "react-router-dom";
import { Outlet } from 'react-router-dom';

export const TopBar = () => {
  const navigate = useNavigate();

  const navigateTo = (prefix) => navigate(prefix);
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          backgroundColor: "#2c3e50",
          color:"#ffffff",
          position: "fixed",
          zIndex:10
        }}
      >
        <Field
          onClick={() => navigateTo("/")}
          title="Strona głowna"
        />
        <Field
        onClick={() => navigateTo("/artykuly")}
        title="Artykuły"
        />
        <Field
          onClick={() => navigateTo("/blog")}
          title="Blog"
        />
        <Field
          onClick={() => navigateTo("/survey")}
          title="Ankieta"
        />
        <Field
          onClick={() => navigateTo("/charts")}
          title="Wykresy"
        />
      </div>
      <div style={{ flex: 1, backgroundColor: "#f9f9f9", padding: "20px",}}>

      <Outlet />
      </div>
    </div>
  );
};

const Field = ({ title, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        cursor: "pointer",
        fontSize: 18,
        padding: 15,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {title}
    </div>
  );
};
