import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU__mfa', ['about:blank'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
