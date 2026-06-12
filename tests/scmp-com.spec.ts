import generateCMPTests from '../playwright/runner';

const urls = ['https://www.scmp.com/', 'https://www.scmp.com/news/china'];

generateCMPTests('scmp.com', urls);

generateCMPTests('scmp.com', urls, {
    mobile: true,
});
