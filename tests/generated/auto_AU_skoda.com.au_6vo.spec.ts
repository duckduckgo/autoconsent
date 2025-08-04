import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_skoda.com.au_6vo', ['https://www.skoda.com.au/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
