import generateCMPTests from '../playwright/runner';

generateCMPTests('legislation-gov-uk', ['https://www.legislation.gov.uk/'], {
    skipProjects: ['chrome'],
});
