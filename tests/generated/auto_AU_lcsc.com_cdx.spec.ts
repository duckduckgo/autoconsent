import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_lcsc.com_cdx', ['https://www.lcsc.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
