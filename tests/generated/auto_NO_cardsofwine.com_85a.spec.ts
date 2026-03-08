import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_cardsofwine.com_85a', ['https://cardsofwine.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
