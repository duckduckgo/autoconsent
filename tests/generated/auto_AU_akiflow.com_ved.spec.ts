import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_akiflow.com_ved', ['https://akiflow.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
