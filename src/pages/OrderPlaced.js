import React from 'react';
import {
    useLocation,
    Link
} from "react-router-dom";

const OrderPlaced = () => {
    const location = useLocation();
    const cards = location.state.chosenCards;

    return (
        <main>
            <div>
                <div>
                   <h1>Fantastic!</h1> 
                </div>
                <div>
                    <p>You have ordered:</p>
                    {cards.map(card =>
                        <h3>{card.name}</h3>
                    )}
                    <p>They will be with you in up to 14 days</p>
                </div>
                <div>
                    <Link to="/">
                        <button>
                            Home
                        </button>
                    </Link>
                </div>
            </div>
        </main>
    );
}

export default OrderPlaced;