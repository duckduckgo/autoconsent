import generateCMPTests from '../playwright/runner';

const urls = ['https://www.studierendenwerk-stuttgart.de/', 'https://www.studierendenhotel-stuttgart.de/'];

generateCMPTests('studierendenwerk-stuttgart', urls);
generateCMPTests('studierendenwerk-stuttgart', urls, { mobile: true });
