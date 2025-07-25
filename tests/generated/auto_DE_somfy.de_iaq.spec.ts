import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_somfy.de_iaq', ['https://www.somfy.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
