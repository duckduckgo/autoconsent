import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_dvb.de_q14', ['https://www.dvb.de/de-de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
