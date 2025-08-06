import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_helios.ch_osd', ['https://www.helios.ch/de'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
