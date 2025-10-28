import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_rt.pornhub.org_4xy', ['https://rt.pornhub.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
