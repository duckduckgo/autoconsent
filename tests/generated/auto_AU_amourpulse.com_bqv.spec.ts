import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_amourpulse.com_bqv', ['https://amourpulse.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
