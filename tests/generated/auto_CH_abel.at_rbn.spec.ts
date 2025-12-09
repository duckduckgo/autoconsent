import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_abel.at_rbn', ['https://www.abel.at/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
