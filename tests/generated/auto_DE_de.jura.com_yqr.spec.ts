import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_de.jura.com_yqr', ['https://de.jura.com/de'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
