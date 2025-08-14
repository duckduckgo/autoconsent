import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_echa.europa.eu_92n', ['https://echa.europa.eu/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
