import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_bamfordguns.co.uk_pfj', ['https://bamfordguns.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
