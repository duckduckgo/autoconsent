import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_aral.de_miu', ['https://www.aral.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
