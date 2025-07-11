import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_tinder.com_93j', ['https://tinder.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['AU'] });
