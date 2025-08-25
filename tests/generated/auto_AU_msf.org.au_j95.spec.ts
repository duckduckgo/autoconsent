import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_msf.org.au_j95', ['https://msf.org.au/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
