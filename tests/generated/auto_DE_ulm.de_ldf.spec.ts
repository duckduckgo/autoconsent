import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ulm.de_ldf', ['https://www.ulm.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
