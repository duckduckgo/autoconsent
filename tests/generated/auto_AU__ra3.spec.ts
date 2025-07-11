import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU__ra3', ['about:blank'], { testOptIn: false, testSelfTest: false, onlyRegions: ['AU'] });
