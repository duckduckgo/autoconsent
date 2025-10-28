import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_rafmuseum.org.uk_nqi', ['https://www.rafmuseum.org.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
