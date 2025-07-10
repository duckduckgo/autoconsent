import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_taxscouts.com_ghb', ['https://taxscouts.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
