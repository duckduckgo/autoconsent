import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_al-muradgranite.co.uk_ubd', ['https://al-muradgranite.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
