import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_pytorch.org_3bl', ['https://pytorch.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
