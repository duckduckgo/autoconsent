import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_erotik.com_yt0', ['https://erotik.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
