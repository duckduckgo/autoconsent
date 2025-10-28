import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_de.book-info.com_69s', ['https://de.book-info.com/index.htm'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
