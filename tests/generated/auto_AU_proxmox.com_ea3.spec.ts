import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_proxmox.com_ea3', ['https://www.proxmox.com/en/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
