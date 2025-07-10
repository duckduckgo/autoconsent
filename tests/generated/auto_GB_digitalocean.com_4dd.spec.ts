import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_digitalocean.com_4dd', ['https://www.digitalocean.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
