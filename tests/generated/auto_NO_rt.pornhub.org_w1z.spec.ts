import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_rt.pornhub.org_w1z', ['https://rt.pornhub.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
