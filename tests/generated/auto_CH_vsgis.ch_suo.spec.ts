import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_vsgis.ch_suo', ['https://www.vsgis.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
