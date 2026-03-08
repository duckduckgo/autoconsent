import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_de.upjers.com_me5', ['https://de.upjers.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
