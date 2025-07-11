import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_taxscouts.com_y3b', ['https://taxscouts.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
