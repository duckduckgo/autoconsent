import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_aviatorhampshire.com_bis', ['https://aviatorhampshire.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
