import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_pocketbook.de_1t4', ['https://pocketbook.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
