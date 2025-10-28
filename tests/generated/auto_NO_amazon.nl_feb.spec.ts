import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_amazon.nl_feb', ['https://www.amazon.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
