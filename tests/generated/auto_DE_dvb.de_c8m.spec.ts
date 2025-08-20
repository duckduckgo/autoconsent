import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_dvb.de_c8m', ['https://www.dvb.de/de-de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
