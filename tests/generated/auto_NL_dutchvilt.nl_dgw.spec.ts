import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_dutchvilt.nl_dgw', ['https://dutchvilt.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
