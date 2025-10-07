import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_de.gorenje.com_i8b', ['https://de.gorenje.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
