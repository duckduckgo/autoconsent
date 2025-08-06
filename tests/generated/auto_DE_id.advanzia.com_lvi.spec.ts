import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_DE_id.advanzia.com_lvi',
    [
        'https://id.advanzia.com/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dweb%26redirect_uri%3Dhttps%253A%252F%252Fmein.advanzia.com%252Fsignin-oidc%26response_type%3Dcode%26scope%3Dopenid%2520profile%26code_challenge%3DkOHAE79fgr0KPfvW4Gm0vH5PGL1RYpjeIBVJn4OpPQQ%26code_challenge_method%3DS256%26response_mode%3Dform_post%26nonce%3D638900780748832202.NjViNDNhNzEtYjFkZS00ZDdmLTlmOWUtZWI2NzQ3ODAwMTljZWUyZjg0Y2QtZTY5Yi00NGFiLTlhNDQtOTc5Zjc4ZjE5NmJj%26login_hint%3DBrand%253AAdv;Channel%253AWebApp;ProductGroup%253AAdvanziaCreditCard;Market%253AGermany;Language%253AGerman%26state%3DCfDJ8MoBGEc73t5AhjZ6QHr96k1g_EYZDb3QnL1fZKh-KVNsokBY8TPWIMWTqXR4zb8Mt0Z1LWH62pnXLSbzsv8mIZeE9tY3mqHetqD7RTGk83M7vU8FhOEItvIL98aKWtCFS3IJXEk0tl26r5Ls6TEe_3KwA9OL5AYADYFAeODCcuHUdORqjn3Iimfq7YxZKUJxtJa4wKuTHI2yfca1PIZK5rcxTmxAapsgPmMPduS0ZT8P0SbMzOkFVa-ns1rVaqYbKSLrAeJl2n9zr5um5hlpiOeKcgrWjBA0wv6CrDWerc4d6jfs_KlHjW-ph-xeRYXX9DizoK6O45UBhIbFJzMnbRGaMdFjyUYcMM6ASx8VMVXoUJKuI7u01YvQlCjdW21_Xg%26x-client-SKU%3DID_NET8_0%26x-client-ver%3D7.1.2.0',
    ],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] },
);
