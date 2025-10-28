import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_pytorch.org_5np', ['https://pytorch.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
