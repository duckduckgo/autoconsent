import generateCMPTests from '../playwright/runner';

generateCMPTests('fever', ['https://nimrodsmovie2026.com/', 'https://kaleidoentertainment.com/']);

// The Fever-operated sites use a newer banner markup where opting out goes through the settings modal.
generateCMPTests('fever', ['https://feverup.com/', 'https://liveyourcity.com/'], {
    testOptIn: false,
});
