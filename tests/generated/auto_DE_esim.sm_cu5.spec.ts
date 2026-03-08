import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_esim.sm_cu5', ['https://esim.sm/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
