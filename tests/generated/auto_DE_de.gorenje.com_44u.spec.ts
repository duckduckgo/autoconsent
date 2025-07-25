import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_de.gorenje.com_44u', ['https://de.gorenje.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
