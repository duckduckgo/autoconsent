import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_qualipet.ch_hvm', ['https://www.qualipet.ch/de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
