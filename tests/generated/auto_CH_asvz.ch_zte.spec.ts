import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_asvz.ch_zte', ['https://asvz.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
