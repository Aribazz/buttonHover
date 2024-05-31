import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ButtonCnt.css';  // Assuming your CSS is in this file

function ButtonContainer() {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div className="button-container">
            <button onMouseOver={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>
                Hover over me!
            </button>
            {isVisible && (
                <div className="additional-buttons">
                    <Link to="/page1"><button>Page 1</button></Link>
                    <Link to="/page2"><button>Page 2</button></Link>
                    <Link to="/page3"><button>Page 3</button></Link>
                </div>
            )}
        </div>
    );
}

export default ButtonContainer;
