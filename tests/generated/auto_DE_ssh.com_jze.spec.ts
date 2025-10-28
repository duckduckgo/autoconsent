import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ssh.com_jze', ['https://www.ssh.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
