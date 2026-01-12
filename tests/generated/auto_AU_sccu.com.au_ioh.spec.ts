import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_sccu.com.au_ioh', ['https://www.sccu.com.au/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
