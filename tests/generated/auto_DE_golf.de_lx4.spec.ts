import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_golf.de_lx4', ['https://www.golf.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
