import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_diagmed.com.au_avj', ['https://diagmed.com.au/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
