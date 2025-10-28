import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_enableme.ch_djy', ['https://www.enableme.ch/de'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
