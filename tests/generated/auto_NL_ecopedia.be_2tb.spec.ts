import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_ecopedia.be_2tb', ['https://www.ecopedia.be/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
