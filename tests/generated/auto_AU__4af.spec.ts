import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU__4af', ['about:blank'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
