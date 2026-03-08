import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_baat.org_awu', ['https://baat.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
