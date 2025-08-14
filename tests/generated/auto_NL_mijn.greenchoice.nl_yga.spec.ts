import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_NL_mijn.greenchoice.nl_yga',
    [
        'https://sso.greenchoice.nl/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dapp-mijngreenchoice%26redirect_uri%3Dhttps%253A%252F%252Fmijn.greenchoice.nl%252Fsignin-oidc%26response_type%3Dcode%26scope%3Dopenid%2520profile%2520id%26code_challenge%3DASTst2BJ2E7yzZdNqjNirRVQZlXste46NO6nP51dA9o%26code_challenge_method%3DS256%26response_mode%3Dform_post%26nonce%3D638906408496689495.YTZlZTYxYTAtZWE0NS00ODlhLThiYjktMWY5MDA0OTE0YTY5MDY4ZTc1Y2MtYTM5Ny00YTU0LWI1YTgtY2E5ODFiYTg3YzVh%26state%3DCfDJ8D4MHbvzVMRJqGg_20O30eugnAi_gJey6bK-Zkx3jF0QvHTW5-E08Flu23BJ35pxwbl7NlqkkjG-nsICbAtJZvZETGdiE89gdXFzqUkJY3ogpdiSuo8ygeTf9xGWrEUTv9TpjeGzPJIC5xbHht3AZSK-_fF6Oopdstre9Z0sV6iWpmHg1X8VmyqrfgTxuWVQfb2BCW_iOh00i7ncgwFcMNC8HhbPP_ShQUR4hv7pVZBvuZq151-lwHGWxruFYBTCK5aV-0ekj1Eyv4TEWthZcptfILxO4abEXKZwkNj7JsgPt19VMkMEId5HhHSDH7FM5chEGMLHXIGZIYAAcGj9aO79lfPZUvPzBIpKoY2jTXkQqIgeIFL5GFzHoZJroSCkhA%26x-client-SKU%3DID_NET8_0%26x-client-ver%3D8.0.1.0',
    ],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] },
);
