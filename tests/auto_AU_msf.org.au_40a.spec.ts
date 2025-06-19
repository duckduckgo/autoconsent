import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_AU_msf.org.au_40a', ['https://msf.org.au/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['AU'] });
