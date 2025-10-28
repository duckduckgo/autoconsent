import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_dafont.com_wba', ['https://www.dafont.com/de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
