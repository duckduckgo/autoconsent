import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_AU_boody.com.au_xzp', ['https://www.boody.com.au/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['AU'] });
