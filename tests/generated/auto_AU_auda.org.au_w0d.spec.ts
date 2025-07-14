import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_auda.org.au_w0d', ['https://www.auda.org.au/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['AU'] });
