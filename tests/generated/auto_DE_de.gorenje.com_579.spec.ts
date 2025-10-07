import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_de.gorenje.com_579', ['https://de.gorenje.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
