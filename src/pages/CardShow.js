import React from 'react';
import {
    useLocation,
    useHistory
} from "react-router-dom";

const CardShow = () => {
    const location = useLocation();
    const history = useHistory();
    const card = location.state.card;

    return (
        <main>
            <div>
                <div className="text-box">
                    <h1>{card.name}</h1>
                    <h3>{card.description}</h3>
                </div>
                <div className="card-container">
                    <div className="show-card">
                        <h3>{card.name}</h3>
                        <h5>Apr: {card.apr}%</h5>
                        <h5>Balance Transfer Offer Duration: {card.balanceTransferOfferDurationMonths} months</h5>
                        <h5>Purchase Offer Duration: {card.purchaseOfferDurationMonths} months</h5>
                        <h5>Credit Available: £{card.creditAvailable}</h5>
                    </div>
                </div>
                <button className="back-button" onClick={() => history.goBack()}>&#8678; Back</button>
            </div>
        </main>
    );
}

export default CardShow;