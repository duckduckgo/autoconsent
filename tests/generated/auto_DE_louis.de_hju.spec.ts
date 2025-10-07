import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_louis.de_hju', ['https://www.louis.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
