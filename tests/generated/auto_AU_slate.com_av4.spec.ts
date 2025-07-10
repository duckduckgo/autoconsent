import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_slate.com_av4', ['https://slate.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['AU'] });
