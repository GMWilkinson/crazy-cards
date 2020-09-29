
function checkData(cards, userData) {
    const accepted = [];
    cards.forEach(card => {
        if (!card.hasRequirement) {
            accepted.push(card);
        } else {
            const matchArr = [];
            userData.forEach(item => {
                card.requirements.forEach(requirement => {
                    if (requirement.hasOwnProperty(item[0])) {
                        if (typeof requirement[item[0]] === 'number') {
                            if (requirement[item[0]] <= parseInt(item[1])) {
                                matchArr.push(card);
                            }
                        } else if (typeof requirement[item[0]] === 'string') {
                            if (requirement[item[0]] === item[1]) {
                                matchArr.push(card);
                            }
                        }
                    }
                })
            })
            if (matchArr.length === card.requirements.length) {
                accepted.push(card);
            }
        }
    })
    const acceptedDupesRemoved = accepted.filter((item, index, self) =>
        index === self.findIndex((t) => (
        t.name === item.name
        ))
    )
    return acceptedDupesRemoved;
}

export default checkData;