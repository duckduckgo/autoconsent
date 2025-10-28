import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_lovecrafts.com_hxj', ['https://www.lovecrafts.com/en-gb/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
