import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_ditchcarbon.com_rdv', ['https://ditchcarbon.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
