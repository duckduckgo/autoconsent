import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_au.swann.com_ahe', ['https://au.swann.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
