import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_iconicauctioneers.com_9ju', ['https://www.iconicauctioneers.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
