import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_phtg.ch_aao', ['https://phtg.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
