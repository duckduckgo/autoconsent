import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU__l8b', ['about:blank'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
