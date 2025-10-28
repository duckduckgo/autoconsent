import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_britishairways.com_g8m', ['https://www.britishairways.com/travel/home/public/en_us/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
