import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_eda.europa.eu_3p0', ['https://eda.europa.eu/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
