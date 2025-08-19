const exampleData = {
  Number: 'INV0001',
  Issued: Date.parse('2020-10-12') / 1000,
  Due: Date.parse('2020-11-12') / 1000,
  Terms: '7 days',

  Invoicer: {
    Name: 'Thunderous Applause',
    Street1: '812 Automated Rd',
    Street2: null,
    City: 'New York',
    State: 'NY',
    Postcode: '10003',
    ABN: '123 000 12 234',
    Email: 'applause@thunder.com',
    Phone: '+1-800-111-1111',
    Website: 'applause.com',
  },

  Client: {
    Name: 'Monkeys Juggling',
    Street1: '100 Banana St',
    City: 'Bananaberg',
    State: 'NJ',
    Postcode: '07048',
  },

  Items: [
    {
      Description: 'Wolf Whistle',
      Price: 35,
      Quantity: 3,
      Total: 105,
    },
    {
      Description: 'Bravo',
      Price: 30,
      Quantity: 17,
      Total: 510,
    },
  ],

  Subtotal: 615,
  Deduction: null,
  Taxes: null,
  Total: 615,
  Paid: true,
};
