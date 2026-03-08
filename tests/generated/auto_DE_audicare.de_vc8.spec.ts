import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_audicare.de_vc8', ['https://audicare.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
