import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_cfo.coop_edx', ['https://www.cfo.coop/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
