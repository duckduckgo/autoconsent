import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_etzlihuette.ch_36k', ['https://etzlihuette.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
