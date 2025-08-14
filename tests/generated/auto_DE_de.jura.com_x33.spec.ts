import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_de.jura.com_x33', ['https://de.jura.com/de'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
