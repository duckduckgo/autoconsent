import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_verivox.de_uh1', ['https://www.verivox.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
