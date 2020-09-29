import React from 'react';
import {
    Link
} from "react-router-dom";

const Landing = () => {
    return (
        <main>
            <div>
                <div>
                   <h1>Crazy Cards</h1> 
                </div>
                <div>
                    <p>Welcome to Crazy Cards, the one stop shop for finding your perfect credit card.</p>
                </div>
                <div>
                    <Link to="/application">
                        <button>
                            Apply
                        </button>
                    </Link>
                </div>
            </div>
        </main>
    );
}

export default Landing;