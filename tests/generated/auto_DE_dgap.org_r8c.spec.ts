import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_dgap.org_r8c', ['https://dgap.org/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
