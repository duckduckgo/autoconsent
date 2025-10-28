import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_parcel2go.com_ij8', ['https://www.parcel2go.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
