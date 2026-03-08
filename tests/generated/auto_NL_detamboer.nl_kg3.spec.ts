import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_detamboer.nl_kg3', ['https://detamboer.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
