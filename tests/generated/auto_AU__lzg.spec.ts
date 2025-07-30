import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU__lzg', ['about:blank'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
