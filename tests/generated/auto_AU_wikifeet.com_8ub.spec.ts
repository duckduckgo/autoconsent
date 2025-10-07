import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_wikifeet.com_8ub', ['about:blank'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
