import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_de.pornhub.com_orp', ['https://de.pornhub.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
