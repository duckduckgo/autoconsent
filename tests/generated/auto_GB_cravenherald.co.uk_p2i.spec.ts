import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_cravenherald.co.uk_p2i', ['https://www.cravenherald.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
