import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_pytorch.org_6bo', ['https://pytorch.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
