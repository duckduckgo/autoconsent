import generateCMPTests from '../playwright/runner';

generateCMPTests('stright', [
    // 'https://www.kadokawa.co.jp/', // does not serve the banner to CI egress IPs, only reproducible via a regional proxy
    'https://www.toei-anim.co.jp/',
    'https://www.makita.co.jp/',
    'https://www.yamada-denki.jp/',
]);
