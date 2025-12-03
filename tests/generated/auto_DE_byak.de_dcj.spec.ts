import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_byak.de_dcj', ['https://www.byak.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
