import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_comhaltas.ie_9hm', ['https://comhaltas.ie/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
