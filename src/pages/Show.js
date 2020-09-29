import React from 'react';
import {
    useLocation,
    useHistory
} from "react-router-dom";

const Show = () => {
    const location = useLocation();
    const history = useHistory();
    const cards = location.state.cards;
    const [chosenCards, setChosenCards] = React.useState([]);
    const [creditTotal, setCreditTotal] = React.useState(0);

    const selectCard = (e, card) => {
        if (e.target.checked) {
            setCreditTotal(creditTotal + card.creditAvailable);
            chosenCards.push(card);
        } else {
            setCreditTotal(creditTotal - card.creditAvailable);
            const index = chosenCards.findIndex(x => x.name === card.name);
            chosenCards.splice(index, 1);
        }
        setChosenCards(chosenCards);
    }

    const showCard = (card) => {
        history.push('/show-card', {card});
    }

    const placeOrder = () => {
        history.push('/order-placed', {chosenCards});
    }

    return (
        <main>
            {cards.length === 0 ?
            <h2>Sadly, you haven't been approved for any of our cards. Feel free to try again in the future.</h2>
            :
            <div className="container">
                <div>                    
                    <h2>Great news! You have been approved for {cards.length} {cards.length > 1 ? 'cards' : 'card'}.</h2>
                </div>
                <div className="card-container">
                    {cards.map(
                        (card, i) =>
                        <div key={i}>
                            <div className="card" onClick={() => showCard(card)}>
                                <h3>{card.name}</h3>
                                <h5>Apr: {card.apr}%</h5>
                                <h5>Balance Transfer Offer Duration: {card.balanceTransferOfferDurationMonths} months</h5>
                                <h5>Purchase Offer Duration: {card.purchaseOfferDurationMonths} months</h5>
                                <h5>Credit Available: £{card.creditAvailable}</h5>
                            </div>
                            <div className="checkbox-container">
                                <input type="checkbox" name={card.name} value={card.name} onChange={(e) => selectCard(e, card)} />
                                <label htmlFor={card.name}> Add {card.name} to basket</label><br />
                            </div>
                        </div>
                    )}
                </div>
                <div>
                    <h3>Credit total of selected cards: £{creditTotal}</h3>
                </div>
                <div className="buttons">
                    <button className="show-button" onClick={() => history.push('/application')}>Back to form</button>
                    {chosenCards.length > 0 && <button className="show-button order-button" onClick={() => placeOrder()}>Place order</button>}
                </div>
            </div>
            }
        </main>
    );
}

export default Show;