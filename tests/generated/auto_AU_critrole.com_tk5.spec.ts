import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_critrole.com_tk5', ['https://critrole.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
