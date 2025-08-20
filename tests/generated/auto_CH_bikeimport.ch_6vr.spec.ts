import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bikeimport.ch_6vr', ['https://bikeimport.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
