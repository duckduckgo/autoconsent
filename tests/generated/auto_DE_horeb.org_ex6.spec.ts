import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_horeb.org_ex6', ['https://www.horeb.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
