import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_buchmarkt.de_1lp', ['https://buchmarkt.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
