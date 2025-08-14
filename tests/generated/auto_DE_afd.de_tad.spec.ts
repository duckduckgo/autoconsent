import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_afd.de_tad', ['https://www.afd.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
