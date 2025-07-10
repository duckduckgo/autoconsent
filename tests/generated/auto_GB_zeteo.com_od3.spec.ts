import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_zeteo.com_od3', ['https://zeteo.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
