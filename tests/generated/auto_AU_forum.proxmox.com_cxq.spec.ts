import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_forum.proxmox.com_cxq', ['https://forum.proxmox.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
