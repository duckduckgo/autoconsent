import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_otelo.de_vhj', ['https://www.otelo.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
