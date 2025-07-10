import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_yubico.com_i7l', ['https://www.yubico.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['AU'] });
