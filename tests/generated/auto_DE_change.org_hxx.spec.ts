import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_change.org_hxx', ['https://www.change.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
