import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_localgovernmentlawyer.co.uk_gcp', ['https://www.localgovernmentlawyer.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
