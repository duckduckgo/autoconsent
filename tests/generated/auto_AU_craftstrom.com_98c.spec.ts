import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_craftstrom.com_98c', ['https://craftstrom.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
