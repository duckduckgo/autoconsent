import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_crew-united.com_m9d', ['https://www.crew-united.com/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
