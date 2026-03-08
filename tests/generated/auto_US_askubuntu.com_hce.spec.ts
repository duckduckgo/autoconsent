import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_askubuntu.com_hce', ['https://askubuntu.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
