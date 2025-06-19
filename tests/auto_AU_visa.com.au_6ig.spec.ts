import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_AU_visa.com.au_6ig', ['https://www.visa.com.au/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['AU'] });
