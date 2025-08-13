import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bmeia.gv.at_03n', ['https://www.bmeia.gv.at/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
