import generateCMPTests from '../playwright/runner';

const urls = ['https://www.hsbc.com.au/'];

generateCMPTests('hsbc-au', urls, { mobile: true });
generateCMPTests('hsbc-au', urls, { mobile: false });
