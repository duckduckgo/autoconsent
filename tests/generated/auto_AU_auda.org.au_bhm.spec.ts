import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_auda.org.au_bhm', ['https://www.auda.org.au/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
