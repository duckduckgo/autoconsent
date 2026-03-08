import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_firecoat.au_ef1', ['https://firecoat.au/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
