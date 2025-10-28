import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_nooch.ch_340', ['https://www.nooch.ch/en/home'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
