import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_visa.com.au_j3q', ['https://www.visa.com.au/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
