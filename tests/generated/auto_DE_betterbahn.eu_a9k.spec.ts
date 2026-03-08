import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_betterbahn.eu_a9k', ['https://betterbahn.eu/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
