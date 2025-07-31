import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_morgans.com.au_jgz', ['https://morgans.com.au/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['AU'] });
