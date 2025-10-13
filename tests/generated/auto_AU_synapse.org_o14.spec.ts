import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_synapse.org_o14', ['https://www.synapse.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
