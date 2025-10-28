import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_pytorch.org_m64', ['https://pytorch.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
