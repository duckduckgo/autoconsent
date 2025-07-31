import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU__2sa', ['about:blank'], { testOptIn: false, testSelfTest: false, onlyRegions: ['AU'] });
