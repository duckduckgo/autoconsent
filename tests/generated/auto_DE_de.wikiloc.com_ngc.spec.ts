import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_de.wikiloc.com_ngc', ['https://de.wikiloc.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
