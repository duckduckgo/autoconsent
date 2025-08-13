import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_rameder.de_btt', ['https://www.rameder.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
