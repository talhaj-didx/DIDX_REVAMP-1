import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const values = [
  ['+355', 'Albania', 2],
  ['+213', 'Algeria', 2],
  ['+244', 'Angola', 2],
  ['+54', 'Argentina', 2],
  ['+61', 'Australia', 2],
  ['+43', 'Austria', 2],
  ['+973', 'Bahrain', 2],
  ['+880', 'Bangladesh', 2],
  ['+1', 'Barbados', 2],
  ['+32', 'Belgium', 2],
  ['+229', 'Benin', 2],
  ['+591', 'Bolivia', 2],
  ['+387', 'Bosnia and Herzegovina', 2],
  ['+55', 'Brazil', 2],
  ['+359', 'Bulgaria', 2],
  ['+855', 'Cambodia', 2],
  ['+1', 'Canada', 2],
  ['+1', 'Cayman Islands', 2],
  ['+56', 'Chile', 2],
  ['+86', 'China', 2],
  ['+57', 'Colombia', 2],
  ['+506', 'Costa Rica', 2],
  ['+385', 'Croatia', 2],
  ['+599', 'Curacao', 2],
  ['+357', 'Cyprus', 2],
  ['+420', 'Czech Republic', 2],
  ['+45', 'Denmark', 2],
  ['+1', 'Dominican Republic', 2],
  ['+503', 'El Salvador', 2],
  ['+372', 'Estonia', 2],
  ['+358', 'Finland', 2],
  ['+33', 'France', 2],
  ['+995', 'Georgia', 2],
  ['+49', 'Germany', 2],
  ['+233', 'Ghana', 2],
  ['+30', 'Greece', 2],
  ['+502', 'Guatemala', 2],
  ['+224', 'Guinea', 2],
  ['+504', 'Honduras', 2],
  ['+852', 'Hong Kong', 2],
  ['+36', 'Hungary', 2],
  ['+354', 'Iceland', 2],
  ['+91', 'India', 2],
  ['+62', 'Indonesia', 2],
  ['+353', 'Ireland', 2],
  ['+972', 'Israel', 2],
  ['+39', 'Italy', 2],
  ['+1', 'Jamaica', 2],
  ['+81', 'Japan', 2],
  ['+962', 'Jordan', 2],
  ['+7', 'Kazakhstan', 2],
  ['+254', 'Kenya', 2],
  ['+686', 'Kuwait', 2],
  ['+996', 'Kyrgyzstan', 2],
  ['+371', 'Latvia', 2],
  ['+370', 'Lithuania', 2],
  ['+352', 'Luxembourg', 2],
  ['+853', 'Macao', 2],
  ['+389', 'North Macedonia', 2],
  ['+60', 'Malaysia', 2],
  ['+356', 'Malta', 2],
  ['+52', 'Mexico', 2],
  ['+373', 'Moldova', 2],
  ['+212', 'Morocco', 2],
  ['+95', 'Myanmar', 2],
  ['+31', 'Netherlands', 2],
  ['+64', 'New Zealand', 2],
  ['+234', 'Nigeria', 2],
  ['+47', 'Norway', 2],
  ['+92', 'Pakistan', 2],
  ['+507', 'Panama', 2],
  ['+595', 'Paraguay', 2],
  ['+51', 'Peru', 2],
  ['+63', 'Philippines', 2],
  ['+48', 'Poland', 2],
  ['+351', 'Portugal', 2],
  ['+1', 'Puerto Rico', 2],
  ['+40', 'Romania', 2],
  ['+7', 'Russia', 2],
  ['+381', 'Serbia', 2],
  ['+248', 'Seychelles', 2],
  ['+65', 'Singapore', 2],
  ['+421', 'Slovakia', 2],
  ['+386', 'Slovenia', 2],
  ['+27', 'South Africa', 2],
  ['+82', 'South Korea', 2],
  ['+34', 'Spain', 2],
  ['+249', 'Sudan', 2],
  ['+49', 'Sweden', 2],
  ['+41', 'Switzerland', 2],
  ['+886', 'Taiwan', 2],
  ['+66', 'Thailand', 2],
  ['+1', 'Trinidad and Tobago', 2],
  ['+216', 'Tunisia', 2],
  ['+90', 'Turkey', 2],
  ['+256', 'Uganda', 2],
  ['+380', 'Ukraine', 2],
  ['+971', 'United Arab Emirates', 2],
  ['+44', 'United Kingdom', 2],
  ['+1', 'United States', 2],
  ['+998', 'Uzbekistan', 2],
  ['+58', 'Venezuela', 2],
  ['+84', 'Vietnam', 2],
  ['+263', 'Zimbabwe', 2]
];

export default function AnimatedTable() {
  const tableRef = useRef();

  useGSAP(() => {
    gsap.from(tableRef.current.querySelectorAll("tbody tr"), {
      opacity: 0,
      y: 20,
      stagger: 0.05,
      duration: 0.6,
      ease: "power3.out",
    });
  }, []);

  return (
    <div style={{ margin: "50px" }}>
      <table
        ref={tableRef}
        className="table-container"
        style={{
          borderCollapse: "collapse",
          fontFamily: "Arial, sans-serif",
          fontSize: "14px",
        }}
      >
        <thead>
          <tr style={{ background: "#004080", color: "#fff" }}>
            <th style={thStyle}>Prefix</th>
            <th style={thStyle}>Destination</th>
            <th style={thStyle}>Channels</th>
          </tr>
        </thead>
        <tbody>
          {values.map(([prefix, country, channels], idx) => (
            <tr
              key={idx}
              style={{
                background: idx % 2 === 0 ? "#e6f2ff" : "#ffffff",
                color: "#333",
              }}
            >
              <td style={tdStyle}>{prefix}</td>
              <td style={{ ...tdStyle, display: "flex", alignItems: "center", gap: "8px" }}>
                {country}
              </td>
              <td style={tdStyle}>{channels}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Scoped CSS for responsiveness */}
      <style jsx>{`
        .table-container {
          width: 100%;
          justify-self: center;
        }

        @media (min-width: 768px) {
          .table-container {
            width: 80%;
          }
        }
      `}</style>
    </div>
  );
}

const thStyle = {
  border: "1px solid #ccc",
  padding: "8px",
  textAlign: "left",
  fontWeight: "bold",
};

const tdStyle = {
  border: "1px solid #ccc",
  padding: "8px",
};
