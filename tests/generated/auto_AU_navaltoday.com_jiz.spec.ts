import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_navaltoday.com_jiz', ['https://www.navaltoday.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
