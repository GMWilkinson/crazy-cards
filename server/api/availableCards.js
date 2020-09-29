// If requirement is typeof number the checkData function will return true for results >= to requirement, 
// If typeof string it will return true for exact match
// Valid requirements are "employmentStatus, age, doorNumber, annualIncome"

const cards = [
    {
        name: 'Student Life',
        apr: 18.9,
        balanceTransferOfferDurationMonths: 6,
        purchaseOfferDurationMonths: 0,
        creditAvailable: 1200,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        hasRequirement: true,
        requirements: [
            {
                employmentStatus: 'Student'
            }
        ]
    },
    {
        name: 'Anywhere Card',
        apr: 33.9,
        balanceTransferOfferDurationMonths: 0,
        purchaseOfferDurationMonths: 0,
        creditAvailable: 300,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        hasRequirement: false
    },
    {
        name: 'Liquid Card',
        apr: 33.9,
        balanceTransferOfferDurationMonths: 12,
        purchaseOfferDurationMonths: 6,
        creditAvailable: 3000,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        hasRequirement: true,
        requirements: [
            {
                annualIncome: 16000
            }
        ]
    },
    {
        name: 'Random Card',
        apr: 99.9,
        balanceTransferOfferDurationMonths: 18,
        purchaseOfferDurationMonths: 6,
        creditAvailable: 10000,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        hasRequirement: true,
        requirements: [
            {
                doorNumber: 22
            },
            {
                annualIncome: 99000
            }    
        ]
    },
    {
        name: 'Lucky Number 99 Card',
        apr: 0.1,
        balanceTransferOfferDurationMonths: 18,
        purchaseOfferDurationMonths: 6,
        creditAvailable: 1000000,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        hasRequirement: true,
        requirements: [
            {
                doorNumber: '99',
            } 
        ]
    },
    {
        name: 'Over 50s Card',
        apr: 29.99,
        balanceTransferOfferDurationMonths: 18,
        purchaseOfferDurationMonths: 6,
        creditAvailable: 1000,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        hasRequirement: true,
        requirements: [
            {
                age: 50,
            }
            ,
            {
                annualIncome: 8000
            }
        ]
    }
]

module.exports = cards;