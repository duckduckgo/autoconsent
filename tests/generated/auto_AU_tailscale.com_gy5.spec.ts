import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_tailscale.com_gy5', ['https://tailscale.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
