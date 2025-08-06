import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_ghd.com_2nn', ['https://www.ghd.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
