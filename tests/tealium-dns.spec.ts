import generateCMPTests from '../playwright/runner';

// "Do Not Sell" banner variant
generateCMPTests('tealium-dns', ['https://www.wafdbank.com/', 'https://www.mufgamericas.com/']);
