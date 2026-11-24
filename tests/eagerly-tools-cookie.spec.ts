import generateCMPTests from '../playwright/runner';

generateCMPTests('eagerly-tools-cookie', ['https://www.voxweb.nl/']);

// newer plugin versions reload the page after saving, so the self-test never runs
generateCMPTests('eagerly-tools-cookie', ['https://www.moviesthatmatter.nl/', 'https://www.kunstcentraal.nl/', 'https://eagerly.nl/'], {
    testSelfTest: false,
});
