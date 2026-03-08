import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_accu-24.de_l6i', ['https://accu-24.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
