import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_u-buy.com.au_rg0', ['https://www.u-buy.com.au/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
