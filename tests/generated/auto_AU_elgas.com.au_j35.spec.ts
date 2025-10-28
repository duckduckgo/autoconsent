import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_elgas.com.au_j35', ['https://www.elgas.com.au/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
