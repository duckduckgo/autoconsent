import generateCMPTests from '../playwright/runner';

const urls = [
    'https://www.fujiya-avic.co.jp/',
    'https://www.iodata.jp/',
    'https://tochigiya.jp/shop/',
    'https://sincia.jp/shop/default.aspx',
];

generateCMPTests('ecbeing', urls, { mobile: false });
generateCMPTests('ecbeing', urls, { mobile: true });
