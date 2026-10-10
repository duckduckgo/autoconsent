import generateCMPTests from '../playwright/runner';

const urls = ['https://www.yuntrack.com/', 'https://m.yuntrack.com/'];

generateCMPTests('yuntrack', urls, { mobile: true });
generateCMPTests('yuntrack', urls, { mobile: false });
