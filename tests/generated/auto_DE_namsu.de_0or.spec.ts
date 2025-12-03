import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_namsu.de_0or', ['https://www.namsu.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
