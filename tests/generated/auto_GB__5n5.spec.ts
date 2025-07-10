import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB__5n5', ['about:blank'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
