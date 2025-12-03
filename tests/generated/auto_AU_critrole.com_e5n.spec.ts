import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_critrole.com_e5n', ['https://critrole.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
