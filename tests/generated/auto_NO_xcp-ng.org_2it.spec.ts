import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_xcp-ng.org_2it', ['https://xcp-ng.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
