import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_AU_taronga.org.au_3j8', ['https://taronga.org.au/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['AU'] });
