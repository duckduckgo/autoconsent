import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_tinder.com_415', ['https://tinder.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
