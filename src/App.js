import "./App.css";
import { useState } from "react";

function App() {
  const [activeItems, setActiveItems] = useState([
    { id: 1, name: "Apple" },
    { id: 2, name: "Mango" },
    { id: 3, name: "Banana" },
    { id: 4, name: "Chikoo" },
    { id: 5, name: "Orange" },
    { id: 6, name: "Pineapple" },
  ]);

  const [inactiveItems, setInactiveItems] = useState([
    { id: 7, name: "Grapes" },
    { id: 8, name: "Watermelon" },
    { id: 9, name: "Strawberry" },
    { id: 10, name: "Guava" },
    { id: 11, name: "Pumkin" },
    { id: 12, name: "Pear" },
  ]);

  const handleItemClick = (item, fromList) => {
    if (fromList === "active") {
      setActiveItems(activeItems.filter((i) => i.id !== item.id));
      setInactiveItems([...inactiveItems, item]);
    } else {
      setInactiveItems(inactiveItems.filter((i) => i.id !== item.id));
      setActiveItems([...activeItems, item]);
    }
  };

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredActiveItems = activeItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredInactiveItems = inactiveItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const activeItemNamesAndIds = activeItems.map((item) => {
    return { id: item.id, name: item.name };
  });
  return (
    <div>
      <div
        className="ListHeader-container"
        style={{
          width: "100%",
          display: "flex",
        }}
      >
        <div
          class="List-Header"
          style={{
            width: "50%",
            backgroundColor: "#762b2b",
            color: "#fff",
            textAlign: "center",
            border: "2px solid rgb(52, 52, 52)",
          }}
        >
          <h2>Inactive Items</h2>
        </div>

        <div
          class="List-Header"
          style={{
            width: "50%",
            backgroundColor: "#2e762b",
            color: "#fff",
            textAlign: "center",
            border: "2px solid rgb(52, 52, 52)",
          }}
        >
          <h2>Active Items</h2>
        </div>
      </div>
      <div
        className="ListSearch-container"
        style={{
          width: "100%",
          backgroundColor: "rgb(52, 52, 52)",
          display: "flex",
        }}
      >
        <div
          class="List-InActive-Container"
          style={{
            width: "100%",
            backgroundColor: "#8d8989",
            border: "2px solid rgb(52, 52, 52)",
            padding: "0.5em",
          }}
        >
          <input
            type="text"
            placeholder="Search Item..."
            value={searchTerm}
            onChange={handleSearch}
            style={{
              borderRadius: "0.2rem",
              backgroundColor: "rgb(52, 52, 52)",
              border: "none",
              padding: "0.5em",
              width: "-webkit-fill-available",
              color: "white",
            }}
          />
        </div>
      </div>
      <div
        className="ListMain-container"
        style={{
          width: "100%",
          backgroundColor: "rgb(52, 52, 52)",
          display: "flex",
        }}
      >
        <div
          class="List-InActive-Container"
          style={{
            width: "50%",
            backgroundColor: "#8d8989",
            border: "2px solid rgb(52, 52, 52)",
            height: "10em",
            overflow: "auto",
            cursor: "pointer",
          }}
        >
          <ul style={{ listStyle: "none" }}>
            {filteredInactiveItems.map((item) => (
              <li
                key={item.id}
                onClick={() => handleItemClick(item, "inactive")}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        <div
          class="List-Active-Container"
          style={{
            width: "50%",
            backgroundColor: "#8d8989",
            border: "2px solid rgb(52, 52, 52)",
            height: "10em",
            overflow: "auto",
            cursor: "pointer",
          }}
        >
          <ul style={{ listStyle: "none" }}>
            {filteredActiveItems.map((item) => (
              <li key={item.id} onClick={() => handleItemClick(item, "active")}>
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        className="ListHeader-container"
        style={{
          width: "100%",
          backgroundColor: "rgb(52, 52, 52)",
          display: "flex",
        }}
      >
        <div
          class="List-Header"
          style={{
            width: "-webkit-fill-available",
            color: "#fff",
            border: "2px solid rgb(52, 52, 52)",
          }}
        >
          <table>
            <thead>
              <tr>
                <th style={{ width: "25em" }}>Item Name</th>
                <th>Qty</th>
                <th>Mfg. Date</th>
                <th>Exp. Date</th>
                <th>Mrp.</th>
              </tr>
            </thead>
            <tbody>
              {activeItemNamesAndIds.map((item) => (
                <tr>
                  <td key={item.id}>
                    <input
                      type="text"
                      value={item.name}
                      data-itemid={item.id}
                      disabled="disabled"
                      style={{
                        backgroundColor: "rgb(141, 137, 137)",
                        border: "none",
                        padding: "0.5em",
                        fontSize: "1em",
                        borderRadius: "0.1rem",
                        margin: "0.3em 0.5em",
                        width: "-webkit-fill-available",
                        color: "white",
                      }}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      style={{
                        backgroundColor: "rgb(141, 137, 137)",
                        border: "none",
                        padding: "0.5em",
                        borderRadius: "0.1rem",
                        fontSize: "1em",
                        margin: "0.3em 0.5em",
                        textAlign: "center",
                        width: "5em",
                        color: "white",
                      }}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      style={{
                        backgroundColor: "rgb(141, 137, 137)",
                        border: "none",
                        padding: "0.5em",
                        borderRadius: "0.1rem",
                        fontSize: "1em",
                        margin: "0.3em 0.5em",
                        textAlign: "center",
                        width: "-webkit-fill-available",
                        color: "white",
                      }}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      style={{
                        backgroundColor: "rgb(141, 137, 137)",
                        border: "none",
                        padding: "0.5em",
                        borderRadius: "0.1rem",
                        fontSize: "1em",
                        margin: "0.3em 0.5em",
                        textAlign: "center",
                        width: "-webkit-fill-available",
                        color: "white",
                      }}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      style={{
                        backgroundColor: "rgb(141, 137, 137)",
                        border: "none",
                        padding: "0.5em",
                        borderRadius: "0.1rem",
                        fontSize: "1em",
                        margin: "0.3em 0.5em",
                        textAlign: "center",
                        width: "-webkit-fill-available",
                        color: "white",
                      }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
