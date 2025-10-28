import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_labbe.de_lxo', ['https://www.labbe.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
