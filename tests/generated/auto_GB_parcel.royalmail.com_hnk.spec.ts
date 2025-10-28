import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_parcel.royalmail.com_hnk', ['https://parcel.royalmail.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
