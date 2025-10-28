import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_obi.at_6uh', ['https://www.obi.at/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
