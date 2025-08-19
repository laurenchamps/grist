const exampleData = {
  Number: 'INV0001',
  Issued: Date.parse('2020-10-12') / 1000,
  Due: Date.parse('2020-11-12') / 1000,
  Terms: '7 days',

  Invoicer: {
    Name: 'Lauren Champs',
    Street1: '19 Jimmy Watson Dr',
    Street2: null,
    City: 'Woodcroft',
    State: 'SA',
    Postcode: '5162',
    ABN: '000 00 00 00',
    Email: 'hello@laurenchamps.com',
    Phone: '0408 007 598',
    Website: 'laurenchamps.com',
  },

  Client: {
    Contact: 'Juno Champs',
    Name: 'Monkeys Juggling',
    Street1: '100 Banana St',
    City: 'Bananaberg',
    State: 'NJ',
    Postcode: '07048',
  },

  Bank: {
    AccountName: 'Lauren K Champs',
    BSB: '000-000',
    AccountNumber: '123456789',
    PayID: 'hello@laurenchamps.com',
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
