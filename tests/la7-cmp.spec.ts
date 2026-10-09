import generateCMPTests from '../playwright/runner';

// the site reloads the page after opt-out, so the self-test cannot run in the original context
generateCMPTests('la7-cmp', ['https://www.la7.it/', 'https://tg.la7.it/', 'https://www.sedanoallegro.it/', 'https://tv.torinofc.it/'], {
    testSelfTest: false,
});
