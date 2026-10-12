import generateCMPTests from '../playwright/runner';

generateCMPTests('worldbank', [
    'https://www.worldbank.org/en/programs/lsms/overview',
    'https://www.devcommittee.org/',
    'https://www.subsidydata.org/',
]);
