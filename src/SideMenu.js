import React, { useState } from "react";

export default function SideMenu({ menuConfig }) {
  const [expandedTitle, setExpandedTitle] = useState(null);

  const handleMenuItemClick = (title) => {
    if (title === expandedTitle) {
      setExpandedTitle(null);
    } else {
      setExpandedTitle(title);
    }
  };

  return (
    <div className="menu-wrapper">
      {menuConfig.map(({ title, subItems }) => {
        const isExpanded = title === expandedTitle;
        const ulTestId = `ul-${title.toLowerCase()}`;

        return (
          <div key={title}>
            <div>{title}</div>
            {subItems && subItems.length > 0 && (
              <button
                data-test-id={`button-${title.toLowerCase()}`}
                onClick={() => handleMenuItemClick(title)}
              >
                {isExpanded ? "Hide" : "Expand"}
              </button>
            )}
            {isExpanded && subItems && subItems.length > 0 && (
              <ul id={ulTestId}>
                {subItems.map((subItem) => (
                  <li
                    key={subItem}
                    id={`li-${title.toLowerCase()}-${subItem.toLowerCase()}`}
                  >
                    {subItem}
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
}
