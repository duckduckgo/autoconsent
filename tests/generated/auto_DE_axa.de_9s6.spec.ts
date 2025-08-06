import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_axa.de_9s6', ['https://www.axa.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
