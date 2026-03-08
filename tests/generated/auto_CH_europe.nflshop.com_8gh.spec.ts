import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_europe.nflshop.com_8gh', ['https://europe.nflshop.com/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
