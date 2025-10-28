import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_pytorch.org_u2d', ['https://pytorch.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
