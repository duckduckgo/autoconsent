import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_europe.nflshop.com_zto', ['https://europe.nflshop.com/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
