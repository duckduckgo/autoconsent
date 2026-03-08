import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_amcham.com.au_p3l', ['https://amcham.com.au/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
