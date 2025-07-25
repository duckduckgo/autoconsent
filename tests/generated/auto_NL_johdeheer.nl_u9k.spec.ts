import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_johdeheer.nl_u9k', ['https://www.johdeheer.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
