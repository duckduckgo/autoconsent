import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_froxlor.org_8tk', ['https://froxlor.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
