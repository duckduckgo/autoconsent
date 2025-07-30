import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_de.pornhub.com_a0v', ['https://de.pornhub.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
