import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_forum.proxmox.com_0', ['https://forum.proxmox.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
