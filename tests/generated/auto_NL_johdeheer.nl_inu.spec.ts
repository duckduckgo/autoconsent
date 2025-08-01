import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_johdeheer.nl_inu', ['https://www.johdeheer.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
