import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_ecopedia.be_i3b', ['https://www.ecopedia.be/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
