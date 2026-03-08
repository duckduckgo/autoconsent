import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_casp-uk.net_otf', ['https://casp-uk.net/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
