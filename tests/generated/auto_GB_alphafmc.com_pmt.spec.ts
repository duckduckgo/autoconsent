import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_alphafmc.com_pmt', ['https://alphafmc.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
