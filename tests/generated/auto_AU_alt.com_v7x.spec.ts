import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_alt.com_v7x', ['https://alt.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
