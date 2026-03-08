import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_cicm.org.au_yqj', ['https://cicm.org.au/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
