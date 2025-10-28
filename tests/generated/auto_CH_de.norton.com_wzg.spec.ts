import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_de.norton.com_wzg', ['https://de.norton.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
