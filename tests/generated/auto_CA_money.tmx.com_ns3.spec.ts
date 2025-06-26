import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_money.tmx.com_ns3', ['https://money.tmx.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
