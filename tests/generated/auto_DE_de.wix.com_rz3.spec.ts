import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_de.wix.com_rz3', ['https://de.wix.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
