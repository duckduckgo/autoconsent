import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_dezwerver.nl_scu', ['https://www.dezwerver.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
