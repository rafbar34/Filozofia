import React from "react";
import { useNavigate } from "react-router-dom";

export const TopBar = () => {
  const navigate = useNavigate();

  const navigateTo = (prefix)=> navigate(prefix)
  return (
    <div
      style={{
        backgroundColor: "rgba(78, 192, 241, 0.45)",
        display: "flex",
        flexDirection: "row",
      }}
    >

     <Field onClick={()=>navigateTo('/')} title="Strona głowna"/>
     <Field onClick={()=>navigateTo('/blog')} title="Blog"/>
    </div>
  );
};

const Field = ({title, onClick}) => {
  return (
    <div
    onClick={onClick}
      style={{
        cursor:'pointer',
        fontSize: 18,
        padding: 15,
        border: "1px solid rgba(78, 192, 241, 0.75)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        {title}
    </div>
  );
};
