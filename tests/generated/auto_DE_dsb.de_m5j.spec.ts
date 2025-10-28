import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_dsb.de_m5j', ['https://www.dsb.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
