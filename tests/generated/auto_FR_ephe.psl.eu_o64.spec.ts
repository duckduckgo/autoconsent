import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ephe.psl.eu_o64', ['https://www.ephe.psl.eu/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
