import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_fra.europa.eu_rse', ['https://fra.europa.eu/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
