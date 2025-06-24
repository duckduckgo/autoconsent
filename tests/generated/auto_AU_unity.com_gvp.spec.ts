import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_unity.com_gvp', ['https://unity.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['AU'] });
