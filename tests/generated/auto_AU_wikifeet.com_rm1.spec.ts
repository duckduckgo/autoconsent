import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_wikifeet.com_rm1', ['about:blank'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
