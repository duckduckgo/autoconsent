import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_winterthur.com_q66', ['https://winterthur.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
