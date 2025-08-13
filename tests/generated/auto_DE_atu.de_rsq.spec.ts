import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_atu.de_rsq', ['https://www.atu.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
