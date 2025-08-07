import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_nooch.ch_352', ['https://www.nooch.ch/en/home'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
