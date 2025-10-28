import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_foxit.com_egy', ['https://www.foxit.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
