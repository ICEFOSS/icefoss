import React from "react";
import "./media.css";
import {SOCIALS} from "../../Module/General";

export default function Media() {
  return (
    <div className="media">
      <p>Follow us on social media for updates</p>
      <div className="single">
        <a rel="noreferrer" target="_blank" href={SOCIALS.instagram}>
          <i class="fab fa-3x fa-instagram"></i>
        </a>
      </div>



      <div className="single">
        <a rel="noreferrer" target="_blank" href={SOCIALS.linkedin}>
          <i class="fab fa-3x fa-linkedin-in"></i>
        </a>
      </div>
     

    </div>
  );
}
