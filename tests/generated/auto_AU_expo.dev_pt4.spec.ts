import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_expo.dev_pt4', ['https://expo.dev/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
