import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_france.scc.com_p89', ['https://france.scc.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
