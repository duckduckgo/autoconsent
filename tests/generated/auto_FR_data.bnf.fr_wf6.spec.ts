import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_data.bnf.fr_wf6', ['https://data.bnf.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
