import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_drankdozijn.nl_9yu', ['https://drankdozijn.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
