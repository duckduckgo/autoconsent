import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_boody.com.au_k2q', ['https://www.boody.com.au/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
