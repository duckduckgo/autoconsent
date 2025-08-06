import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_ecopedia.be_8wg', ['https://www.ecopedia.be/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
