import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_filmhouse.org.uk_p5g', ['https://www.filmhouse.org.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
