import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_restoretrust.org.uk_gym', ['https://www.restoretrust.org.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
