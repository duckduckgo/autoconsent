import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ek-leipzig.de_jm1', ['https://ek-leipzig.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
