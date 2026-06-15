import generateCMPTests from '../playwright/runner';

generateCMPTests('posthog', ['https://posthog.com/sparks-joy', 'https://posthog.com/', 'https://posthog.com/docs']);
