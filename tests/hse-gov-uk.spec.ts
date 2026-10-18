import generateCMPTests from '../playwright/runner';

// opt-out reloads the page into a confirmation banner, handled by hse-gov-uk-confirmation
generateCMPTests('hse-gov-uk', ['https://www.hse.gov.uk/'], {
    expectedRuns: 2,
});
