import React from "react";
import { Link, NavLink } from "react-router-dom";
import { links } from "../data/dummy";

export default function Sidebar() {
  // const activeMenu = true;
  // const activeLink = 'flex items-center gap-5 pl-4 pt-3 b-2.5 rounded-lg text-white text-md m-2';
  // const normalLink = 'flex items-center gap-5 pl-4 pt-3 b-2.5 rounded-lg text-gray-700';

  return (
    <div className="sidebar"  style = {{boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px", width: "200px"}}>
      {links.map((elem) => {
        return (
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              flexDirection: "column",
              textAlign: "center"
             
            }}
          >
            <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase">
                  {elem.title}
                </p>
                {elem.links.map((link) => (
                  <div className="m-3 mt-4"
                   
                    key={link.name}
                    style= {{
                      display: "flex",
                      justifyContent: "space-between",
                      
                    }}
                   
            
                    
                  >
                    {link.icon}
                    <span className="capitalize ">{link.name}</span>
                  </div>
                ))}
              </div>
            
          
        );
      })}
    </div>
  );
}
