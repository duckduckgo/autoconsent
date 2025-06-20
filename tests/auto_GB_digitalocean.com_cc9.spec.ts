import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_digitalocean.com_cc9', ['https://www.digitalocean.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
