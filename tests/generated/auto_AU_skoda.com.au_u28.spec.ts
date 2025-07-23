import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_skoda.com.au_u28', ['https://www.skoda.com.au/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['AU'] });
