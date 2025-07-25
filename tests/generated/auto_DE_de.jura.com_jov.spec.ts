import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_de.jura.com_jov', ['https://de.jura.com/de'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
