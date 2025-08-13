import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU__aq2', ['about:blank'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
