import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_de.tec24.com_e9t', ['https://de.tec24.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
