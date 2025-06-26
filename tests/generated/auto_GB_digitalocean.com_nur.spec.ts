import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_digitalocean.com_nur', ['https://www.digitalocean.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
