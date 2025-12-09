import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_wien.gv.at_c3p', ['https://www.wien.gv.at/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
