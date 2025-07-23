import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_kimkim.com_h0f', ['https://www.kimkim.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['AU'] });
