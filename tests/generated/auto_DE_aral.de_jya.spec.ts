import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_aral.de_jya', ['https://www.aral.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
