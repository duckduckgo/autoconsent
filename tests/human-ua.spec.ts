import generateCMPTests from '../playwright/runner';

generateCMPTests('human-ua', ['https://lms.human.ua/', 'https://id.human.ua/'], {
    testSelfTest: false,
});
