import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_epihunter.eu_hd4', ['http://epihunter.eu/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
