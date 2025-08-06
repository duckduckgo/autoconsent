import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_echa.europa.eu_7gg', ['https://echa.europa.eu/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
