import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_dvb.de_qgk', ['https://www.dvb.de/de-de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
