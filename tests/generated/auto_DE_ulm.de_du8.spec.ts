import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ulm.de_du8', ['https://www.ulm.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
