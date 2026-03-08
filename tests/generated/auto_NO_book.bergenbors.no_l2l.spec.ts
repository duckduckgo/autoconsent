import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_book.bergenbors.no_l2l', ['https://book.bergenbors.no/accommodation'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
