import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_axa.de_vyk', ['https://www.axa.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
