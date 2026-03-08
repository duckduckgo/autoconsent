import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_filmpuls.info_2ez', ['https://filmpuls.info/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
