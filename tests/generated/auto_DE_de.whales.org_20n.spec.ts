import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_de.whales.org_20n', ['https://de.whales.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
