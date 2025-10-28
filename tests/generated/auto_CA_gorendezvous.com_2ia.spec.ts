import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_gorendezvous.com_2ia', ['https://www.gorendezvous.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
