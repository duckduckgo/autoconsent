import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_forum.proxmox.com_3ks', ['https://forum.proxmox.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
