import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_instructie.org_qfi', ['https://instructie.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
