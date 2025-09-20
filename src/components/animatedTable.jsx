import React, { useRef, useState, useMemo } from "react";
import { FaSearch, FaFilter } from "react-icons/fa";

export default function AnimatedTable({countries}) {
  const tableRef = useRef();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRegion, setFilterRegion] = useState("");

  // Filter and search functionality
  const filteredValues = useMemo(() => {
    return countries.filter((c) => {
      const matchesSearch =
        c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.code.includes(searchTerm);

      const matchesFilter = !filterRegion || c.region === filterRegion;

      return matchesSearch && matchesFilter;
    });
  }, [searchTerm, filterRegion, countries]);

  return (
    <div className="animated-table-section">
      <div className="animated-table__header">
        <h3 className="animated-table__title">Available Countries & Regions</h3>
        <p className="animated-table__subtitle">
          Complete list of countries where we provide DID numbers with their respective prefixes
        </p>
        <div className="animated-table__filters">
          <div className="animated-table__search">
            <FaSearch />
            <input
              type="text"
              placeholder="Search countries..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="animated-table__filter">
            <FaFilter />
            <select
              value={filterRegion}
              onChange={(e) => setFilterRegion(e.target.value)}
            >
              <option value="">All Regions</option>
              <option value="europe">Europe</option>
              <option value="asia">Asia</option>
              <option value="americas">Americas</option>
              <option value="africa">Africa</option>
              {/* <option value="other">Other</option> */}
            </select>
          </div>
        </div>
      </div>

      <div className="animated-table__container">
        <table ref={tableRef} className="animated-table">
          <thead>
            <tr>
              <th>Country Code</th>
              <th>Country Name</th>
              <th>Channels</th>
            </tr>
          </thead>
          <tbody>
            {filteredValues.map((c, idx) => (
              <tr key={idx}>
                <td className="animated-table__prefix">{c.code}</td>
                <td className="animated-table__country">{c.name}</td>
                <td className="animated-table__channels">{c.channels}</td>
                {/* <td>{c.region}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
        {filteredValues.length === 0 && (
          <div className="animated-table__no-results">
            <p>No countries found matching your search criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}
