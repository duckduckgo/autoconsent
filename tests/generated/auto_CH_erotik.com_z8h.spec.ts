import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_erotik.com_z8h', ['https://erotik.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
