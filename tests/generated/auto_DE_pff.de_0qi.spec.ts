import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_pff.de_0qi', ['https://www.pff.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
