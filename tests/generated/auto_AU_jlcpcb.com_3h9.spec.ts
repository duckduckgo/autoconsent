import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_jlcpcb.com_3h9', ['https://jlcpcb.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
