import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU__v0u', ['about:blank'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
