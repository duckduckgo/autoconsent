import generateCMPTests from '../playwright/runner';

generateCMPTests('avada-privacy-bar', ['https://www.levigo.de/']);

// No reject button, consent checkboxes only; no popup shown in the US
generateCMPTests('avada-privacy-bar', ['https://www.bai.org/'], {
    skipRegions: ['US'],
});

// The page reloads after the reject click, so the self-test never runs
generateCMPTests('avada-privacy-bar', ['https://www.ccscollect.co.uk/', 'https://comcavi.it/'], {
    testSelfTest: false,
});
