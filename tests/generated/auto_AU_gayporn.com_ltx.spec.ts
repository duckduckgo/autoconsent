import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_gayporn.com_ltx', ['https://gayporn.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
