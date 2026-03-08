import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_docs.ombi.app_i3s', ['https://docs.ombi.app/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
