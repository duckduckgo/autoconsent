import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_flvw.de_0ih', ['https://flvw.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
