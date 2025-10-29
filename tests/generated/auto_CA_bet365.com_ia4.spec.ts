import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_bet365.com_ia4', ['https://www.bet365.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
