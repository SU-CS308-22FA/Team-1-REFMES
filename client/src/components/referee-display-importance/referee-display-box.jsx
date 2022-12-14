import React, { useCallback, useState, useEffect } from "react";

import "../referee-display-importance/referee-display-box.css";

function RefereeDisplayBox({ RefereeData }) {

    return (
        <>
        <div className="referee-display-outer-container">
            <div className="referee-display-container">
                <div className="referee-display-left-container ">
                    <div className="referee-display-text">
                        <a>{RefereeData.name} </a>
                    </div>
                </div>
                <div className="referee-display-right-container">
                    <div className="referee-display-text">
                        <a>{RefereeData.ratio} </a>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
  }
  export default RefereeDisplayBox;