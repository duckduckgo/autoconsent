import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_lcsc.com_cdx', ['https://lcsc.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['AU'] });
