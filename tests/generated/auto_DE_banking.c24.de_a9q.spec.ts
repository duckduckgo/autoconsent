import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_banking.c24.de_a9q', ['https://banking.c24.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
