import generateCMPTests from '../playwright/runner';

generateCMPTests('cwarn', ['http://www.fukgames.com/', 'http://www.footballgamessite.com/', 'https://www.secondwife.com/'], {
    testSelfTest: false,
});
