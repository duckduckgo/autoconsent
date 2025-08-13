import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_gayporn.com_ana', ['https://gayporn.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
