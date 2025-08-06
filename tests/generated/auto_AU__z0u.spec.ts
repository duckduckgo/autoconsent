import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU__z0u', ['about:blank'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
