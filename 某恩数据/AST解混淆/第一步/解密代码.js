///////////////////////////////////////////////////////////////////
//导库
//导入fs
const fs= require("fs");
//导入babel/parser
const parser=require('@babel/parser')
//导入babel/traverse
const traverse=require('@babel/traverse').default;
//导入babel/types  节点类型
const types=require('@babel/types');
//将AST转换成JavaScript源代码：
const generator = require("@babel/generator").default;
///////////////////////////////////////////////////////////////////
//ob还原代码

var ynfqt = '__0x2fb9f'
  , __0x2fb9f = ['w61yEQYNMcKN', 'UcK/IcOnwpLDkMO5', 'wpbCnjvCvwIaPcOxw7E=', 'w5vDizcu', 'w5LCtBs=', 'JcOreTk=', 'w6HCnjp/Tg==', 'KsOkw50FMQ==', 'w7zDqMOCUXI=', 'w7PCp3lkwokmw6oCXg==', 'CsOyczTDtcKlwpbDqUk=', 'GsKYbsK/w7g=', 'wr/DjhgJcA==', 'UlXChFNH', 'PsO7w4gKwrI=', 'Bn/DrcOrwqrDk8OQAA==', 'w47CtsK5wp7Djw==', 'wr3DsWHCtlk=', 'aGjCjlZF', 'T8KPCsOJBA==', 'w7LDqH7CrsKIMg==', 'MMOvw4UzBA==', 'YsKdIFsz', 'wo3DmcOGwpJn', 'NMOfeXdM', 'wofDicOuwrlS', 'wrlFcFrCvg==', 'wphSd8OrLg==', 'w6XDqFDCk8Ke', 'FMO8AsOFBQ==', 'wqrCtCPCnAw=', 'wpTDj3BHEw==', 'DcOHMcOEDQ==', 'fjsAwp/Chg==', 'HMKaQsKnw4Y=', 'w5otSMKBYQ==', 'w6PCkcK8woTDu0jCiWJRNkI=', 'ScK3wrXCmMOr', 'wonDgBIrc8O/XsOiA8KsXlHDmg==', 'woHCpcKCwpTDncKZFH/CocOVw68=', 'w5/Dh8Olflw=', 'w50owowb', 'bcKsD8On', 'w5/CmcK+wp4=', 'EMKOwqc5', 'NsK5d8Kmw6Y=', 'wr7DqMOnwpdg', 'WcKQWz/Dtywi', 'aE8ww6had8O2', 'w5ZPw7bCskY=', 'w6PClMKQwp7Dh17CgA==', 'U8KRw7fCvyoFw4bDgQ==', 'eHcfw6tP', 'NcOOw5w7EA==', 'wpfDkDs7bw==', 'V8KsK8OfwrE=', 'f8KUw5LCkTwSw4g=', 'wqRrdUXClXZo', 'w5zCp1R8wokxw7g=', 'w6zCn0ta', 'w7olTcK8', 'w6U8w5Bs', 'KcOtw7QPwrc=', 'w4nCgwp3UsOnOA==', 'w4nCkjp+XMOwNnAYbUbCrxU=', 'w53CtsKn', 'PsOgflZX', 'c8KbO8OHBQ==', 'w4bClFdkwp4=', 'LmPDqsOtwpI=', 'w5nDlTUgSMKaGsOlw5w/QnxnwpXCpQ==', 'wph1UkjCjnA=', 'w6TDvGPCqMKD', 'w6XDgzUyDg==', 'w7liwrDDqi/DgDTChMKiw54yeMOzwrnCtg==', 'wr3CvsKJwoPDusKJ', 'C0LDrkzDgw==', 'wonDgBgbMg==', 'wrXDlhgJdcOja8O4IsKySELDhcKWw7k=', 'DMOaCMO2KQ==', 'w6jClsK1wqDDow==', '5Lqa6IGt5Yiq6ZqvwpU5U3/CpMOHfsO2w5A=', 'SFXDjsKaw7E=', 'DcKzwrLDv8KL', 'fFjCjFBVw6/DjsOZw5HCoVVe', 'Y8KSeiHDoT89w4VEw7DDicOX', 'wqXClCrCqToYO8OSw6TDisOtSg==', 'w6JSw5fChjU=', 'JcOkeTPCqw==', 'N8O8w6QJwp/CjBvCllrDs8OKTQ==', 'J0rDolzClQ==', 'FcOyw592w4zCncKow5jCuizCqsKU', 'LsOzw5l3woc=', 'w7fDj8OBwpFKKsKxw7NpKjl2', 'woV0VcOrWw==', 'JsOEw40tGk7DnQdoEUvCjQ==', 'w6JVw4DCkGZhZWfCrg7Dp8O5Bg==', 'dcKJeyDDrD0=', 'McOUw4wsF0w=', 'wrhFecORCw==', 'w6osRMK8bA==', 'e8K+wrfCpcOG', 'A8K3Rg==', 'HcORw5wwAFvDmjY=', 'woDDqRAEZA==', 'CcOwcCnDrg==', 'M8KVcg==', 'wq7DucOU', 'w63DoMOv', 'KW3DvA==', 'J8K7QsKEwrg=', 'Y8KuHMKL', 'cHYlw4JT', 'w79LAw0z', 'w5hYw5E=', 'W8K5BcKz', 'w41Xw4DChmI=', 'w408woIEdsKCw7ldMw==', 'G8KjwpM4RA==', 'E8OXEsOhBcO1KsObd38U', 'w7zCi0VFG8KS', 'Y8KSeg==', 'w4nCi8K3woDDqVrCjkdA', 'KcONw7TDsyY=', 'w7s/wqfDlnU=', 'aFnCgm9H', 'w6rDt8OpwrRk', '5Lqb6ICM5Ymo6Zm/TsOrOUsSbxjCvFI=', 'JsO3w6MewoDClQHCsVI=', 'w6HDjsOIwpBcNMOrw4cw', 'TAsowpjCrXlTwoXCgg==', 'wot1WF3ClWF6IcOH', 'Z8KcwpA=', 'w7jDhiMk', 'KkPDqg==', 'DMOCE8O8IsO8', 'HsOtw45Vw4M=', 'w7APwrQNZQ==', 'w7TCgMKiwoPDnA==', 'w50Cd8KVbg==', 'KW3DqsO6woQ=', 'w6TCvGJiIg==', 'w6HDkcOOwopH', 'DsOAw4PDlgc=', 'wqnCkDrClDQGH8Oiw6fDlcOrU2kn', 'dcKFdxfDmw==', 'w4oKwrcmZA==', 'w6MjwprDkg==', 'FsOYCMOh', 'w5XClsK7woY=', 'GAoywpzCp38=', 'ScKpGMO/', 'wqjDgU/CtkPCmQ==', 'w6LCpWZ8wp8=', 'wqXDmEjCnFrCk8OmwpZcwpzDvgPDvlc=', 'L8OIbSPDjA==', 'w6bDjsOxwpdBM8Krw5Y=', 'w7ofwqI=', 'asOlwrYHw5bCgFjCqATDoMKcWhhvT0jCkMOyIA==', 'w7hYKzAr', 'IMOpw6sSwpI=', 'N0nDj8Ogwq8=', 'w7DCnMKowqTDrA==', 'AmUoBMOkw7U=', 'w5PCjsK0wrDDjg==', 'EMO2w6M8wqI=', 'w7rClCZ8ScOs', 'eDwU', 'w70hQsKiecOhwok=', 'w6l6RG1X', 'a8KTfTY=', 'w7ddEQ==', 'w7oswpc=', 'IcO8w593woI=', 'w4ZxAB4QO8KIw5Y=', 'PMKSwoDDpcO3', 'VUXDrsKDw7wnw7DDrELDq3Y=', 'UlMR', 'I8O4w7UIwoM=', 'GsOYAg==', 'wpjDjV3Dqw==', 'w6LDgMOQwpBW', 'w4/DlDUzfcKYOsOlw4s=', 'wpJpXl0=', 'GsOOFcOwIsO/', 'T1LCnUZtw63DiMO6w4Q=', 'wp5/Q0zClHE=', 'w4bCkgs=', 'w4nCu1xFwoI=', 'R3jCoWFzw4fDvMOUw6/Cg2l4LsK+w4E=', 'wr7DkFzCkVTCicOTwpc=', 'wpsBB8KXHg==', 'TMKdw77CmicZ', 'w7ZtGQ==', 'w5tZdUlZ', 'w4bCm0VcGw==', 'woTDtBUSTA==', 'RcKuCMOaE8OVL0PChQ==', 'bTAtwpfDvQ8Y', 'wphmW0U=', 'w5U9woHDg2RGWHAsbA==', 'dcKBw5nCiSE=', 'wo9KwofCiTRpMVPDux7Cow==', 'bkTCgUBh', 'VcKwFsOKLA==', 'GsOow4shwpU=', 'K3TDt8OFwrs=', 'OMOnKMO4JQ==', 'w5Bgw6PCs3I=', 'wp/DlTEycg==', 'MV/Di3XDlQ==', 'w7jCkVVSHA==', 'w6DCuXd9wpY=', 'CcOpewLDo8KlworDqg==', 'BMK5RsK1w7YOWMKd', 'UVwBw6tF', 'CsOpSDnDuA==', 'w6DCsH98', 'BsOdw7nDjC8=', 'w7hfIQ==', 'w7tXcnhq', 'McK2wrvDoA==', 'woxoRU3CiQ==', 'D0HDtUvDlQ==', 'wqXDiBQLZA==', 'dsKWw6jChx0=', 'Wj0g', 'w7HCnxB9bA==', 'CljDisOYwqI=', 'HsOuflZw', 'LVjDssOfwpk=', 'w4rDi8OqwrNy', 'w4pPZE9x', 'w49+wrHDsRk=', 'w49Xw5zCkWh4', 'wpXDtDkJVw==', 'fMKsDcOvwpLDng==', 'w7Yow49o', 'WcKvN8O6woQ=', 'wo/DgExRJw==', 'wrvCosKP', 'N8OTGQ==', 'AMKGwqwXXE/CtcOa', 'wr7DgV15Pg==', 'w6LDgxgbew==', 'w7vDr8Ox', 'dAM2woDCiw==', 'C8Oww5TDiS8=', 'LW4tD8Ob', 'w70nwosbSQ==', 'w4HCkxxqRA==', 'XHHDssKDw5E=', 'dcK0EcOfNg==', 'w4lZw6HCgXV8bkg=', 'wqbDkQ4A', 'wq5/Y8OsGB9Kw64=', 'DWEqDw==', 'w7HDjcONwo1W', 'w4TDhsODekEE', 'QEvCmER5', 'dn7CnlJN', 'w4XDssORwplC', 'w7k4wpHDlWZ2', 'w5scwo8DZg==', 'w43Dl8OvTnM=', 'wqfCgybCtgAALsOiw4vDisOqRA==', 'ScKjwqXCp8Oc', 'w4XCnMKxwpTDog==', 'w6AiwprDiA==', 'HcOyw5Jjw4HChQ==', 'woJmR8O+Pw==', 'w513woXDhjI=', 'KMOlEsOvPQ==', 'w7BYV1xE', 'w7osQMKiQ8O+wpnCvMKDMQ==', 'w6zDhMOHeUE=', 'cVPChlY=', 'w6F1Fg==', 'NMOEWQ==', 'XWfCuU1d', 'AcOHw4hJw4M=', 'YsKQPsOJNA==', 'w5zDjMOId3g=', 'w5k5w5lzwrk=', 'OMOsdnEq', 'woLDucOPwqdRVMOte2zChcOASw==', 'w6Mzw59yw7HCjMOxa8OHwr/DuMO8', 'wpPCoRvCqjo=', 'SUXDr8KEw5A=', 'w6s5w7tww6Q=', 'UVIAw6lUYA==', 'w6jCsXA=', 'bsKNwpfCiMOaw58x', 'YsKDwqHCgsOVw44=', 'wrLDgR4aeMO2Wg==', 'e1zCg04=', 'GsOyw4U=', 'wqTDgkx5DsKDYMO2RsKgw7shw5sMJlYcICl1YMK6', 'FMOvw4hhw5vCiQ==', 'Yx0mwpjCow==', 'YsKbwpvCnw==', 'MW4CAsOkw7zCmcKMZMKCLw==', 'S8KBKg==', 'w50pdMK+Yg==', 'wrN+Wg==', 'OsOrw5c4MQ==', 'w7TDom/CqsKSMw==', 'w5zCshlvSw==', 'wpXDqMOewrxGQw==', 'ecK2MXgf', 'wqRjVl3Cmw==', 'bcKiDcOowpzDhw==', 'w6otRsKSecOlwpjCqg==', 'wrhzXw==', 'Y8OlwrUHw5LCgF7CqAU=', 'wrLCgSXCsjc=', 'UcKpAsO/wpw=', 'w7kkwpTDpGtwUWw=', 'E8O7w5Nnw57CvsK1w6DCsw==', 'AG/DtUHDhw==', 'UTYtwos=', 'w59/Kw==', 'HsKdwoMNcQ==', 'w5DCk05YLcKVT8Okwr4NAXDDusO2', 'w7pXw6HCsWk=', 'JcOKcUp5', 'w7U0w5tCw7HCiMOgWg==', 'w6EqwokHasKVw6I=', 'w5lTw5HCh35ldG3Cpw3DtMO3', 'w7/CnyFv', 'wrXDhREE', 'LsOzw51ww5Q=', 'GcOscy7Dvw==', 'UkUGw6FbcA==', 'wrd8eA==', 'T8K/N8OIwrQ=', 'XRYTwpLDhg==', 'KcOxw68Cwq8=', 'bcKrBA==', 'dkjCm0pF', 'w5UhwrHDin1nXw==', 'f8KKw5LCkTwSw4g=', 'KMKiY8Kbw6AZVg==', 'wqPCvSg=', 'w5MHwroxdg==', 'w7MuwrvDp3k=', 'w7TCvSk=', 'w6Etwo8ncMKfw7NWJ8Kgw4Ybw4jDrjc=', 'RFQVw4ZMYMO4w6s=', 'A8Oyw49hw4E=', 'PMOIw4vDrwwNwp4=', 'UcKsE8O7wpjDncO2', 'wozDvBE=', 'LXrDgcONwpU=', 'w44nwrQ=', 'R8KNJw==', 'U8K5w4LCjRY=', 'I8OCw4lAw7c=', 'Vk4iw41l', 'bTcrwqHDvAQLe8Kdw4N8', 'GsKBwqIh', 'w6XCvHhxwoo7w6kX', 'HcKJdw==', 'wpjDggQrTw==', 'F2rDocOKwq8=', 'HkfDqU7DisOVw4DDjg==', 'NcOJw6I=', 'FMK7RcKNw74=', 'X8K0E8OH', 'LcK/aMK8w40=', 'XMK8woHCg8OA', 'WTscwrHDgg==', 'wpLCpsKawqzDpw==', 'wp0BG8KHEA==', 'w6NSwq/DpzI=', 'w53Coh5MVA==', 'FsKAwpjDjcOe', 'd8KPGcOnwpQ=', 'BMKswoAfSg==', 'wrjCszPCtyo=', 'FMOgw6jDrQg=', 'BcKxT8KTw6AX', 'wpU7PcK4HE4=', 'wqfDk18=', 'w6HDlcOQwopdPQ==', 'P8Oww6U=', 'ScKUwoHCjg==', 'w6rDlsOLe1Aew4FTXQYBw6zCgijDjsKbIMKJNwDDpSc=', 'wr9+Uw==', 'EsKDwqw6', 'K3Y2KMOUw5s=', 'wr9oRMO9BBI=', 'w6Mlw4hlw6bCmA==', 'w7LDh3LCqsKA', 'wozDrcOC', 'w6XCj0k=', 'wrvCtMKYwofDoMKI', 'w5RYw5vCgQ==', 'eU3Cn05V', 'USEhwobDoQ8=', 'w4YJwr4=', 'wrZdVsOgGg==', 'asKlJmoOwp8=', 'woh3W0DCmXA=', 'w5/CnsK1', 'w681wofDg3xg', 'YwEhwoPCsGBnwprCg8KY', 'FcOtYGds', 'AMOIw5fDsw==', 'Yx0owr7Cp35PwoE=', 'R03CnU1Pw7rDicOo', 'w6XDhiAxWcKROw==', 'w6PCnMK9wrTDgVPCikVdNVQ=', 'U8K+UB/DrA==', 'M8KUwrLDncO2', 'w7DCoWR5wog1', 'WRckwp7Cu31e', 'w49+YA==', 'I8KWwr3DlcO4', 'w7ZXw6LCkmU=', 'L8OwJ8OzFA==', 'DMO9w6YPwoc=', 'BmLDnMOowpXDl8OrCsOHQ1Q=', 'w5Zyw6DCoUs=', 'NsOow6AnJw==', 'WBwkwp7Cu31e', 'wpLChTvCviIFDMO5w7jDjcOrUw==', 'wokiP8K/GlnDs8K/', 'w6syw5hl', 'w7ByPAkJEcKPw4ELwoLCsDF2YcKE', 'w5hOw4bCkGlx', 'w4Mzw59yw7HCjMOxRsOZ', 'Q8KKw7XCnCcU', 'GcOyeSHDrsK0', 'J0fDsQ==', 'MMKtwog=', 'wrHCqDw=', 'e8KdMH8y', 'w4nCmD4=', 'woVgQsO9HDRIw6ZeVA==', 'w693wrDDvxE=', 'WAsRwo/ChA==', 'w5lew5DCkmw=', 'HFzDkUzDoA==', 'w4XCnmB+wpU=', 'woNJQMO6LA==', 'wr/Dk2dIKg==', 'wojDrFbCu0s=', 'OMKewr0jYg==', 'UsKmH8OvwonCpg==', 'w5TCnsKWwpbDrQ==', 'DcOXD8OxI8O2', 'w6bChDtz', 'a8K1F8OuwpPDlw==', 'NMO5w592w4zCncKow7XCpA==', 'wonDhxQYacOjXA==', 'w6Qxw5Njw6PCr8OsU8OO', 'EsK+QsKFw7YKScKsw7zCg8K2Kg==', 'EMOFw5LDvAw=', 'BsOEw40tGk7DnSp2', 'VyswwoLDuw4=', 'w43DgsOLwpNbP8K3', 'w5wlwo8UacKjw7lJMQ==', 'SkjDtMKUw5A=', 'A8OtcHBhc8KLw6g6KwTDpw==', 'JcOwbiXDrMKTwoPDtk/CqA==', 'wpbDvcOI', 'w6zCk8KxwoHCnw==', 'U8K3KcOkJw==', 'w6pyUVxLwrJhw5g=', 'FsK/bcKhw7Y=', 'w5cZw6xzw4w=', 'e8KcLkkb', 'KMOqYVJP', 'QcKvEcObwqo=', 'AMObw57Dvh0G', 'w7p0WH1TwrI=', 'w4nDrio=', 'wojDqFrCtXw=', 'wp7CkDnCqyYGKw==', 'acKqCMOcHsOXNVY=', 'JMO2w7UfwpU=', 'wqnDqsOKwrRF', 'FcO1w5Mzwo0=', 'w5dmJw8MNg==', 'DWYh', 'w5rCk8Kc', 'TcKpD8ObwoQ=', 'wr4zPsKfDlLDkMK+bMKLwqHCosOUw78=', 'w7Iyw690w7rClcOrTg==', 'w65/wobDvynDjB/CjQ==', 'wrU0Kg==', 'ZMK4J24=', 'KcOhcFdN', 'WcKEfzzDqiIEw6hMw7o=', 'acK3E8OdP8OHIEPCmcKrwqHDkcO+Ig==', 'VsK6LG8f', 'wp7CnCbCvyY=', 'w6XDjsOQwodA', 'w4vCl8KgwpbDmw==', 'BmHDt8OtwoQ=', 'wonDux4aZMOnWsO5Mw==', 'w4rDlT8iWcKMLMOJw5MiWGc=', 'w69iwr0=', 'w7bCp34=', 'Q8Kew7c=', 'wotmU03Ck3tk', 'w7fDm8OLckcBw6lYew8=', 'AcOFw5TDvAIwwpPDtn0=', 'bSM2wojDtg8ZZA==', 'w53DjcOdfFE=', 'woJiZxZQLsOTw41SwpvDsQ==', 'w5sxwpQSbMKU', 'NGXDoMOAwo8=', 'S8KjFw==', 'FsKXwq42UE/CtQ==', 'wpBiTnrCk29m', 'w77DplnCosKcMw==', 'w5/DiTMzRcKPKw==', 'WkXDscKb', 'wrF1SQ==', 'W1TCn0pJw63DqsO6w4/Cr1tG', 'C3gyBsO+w7k=', 'ZsKcworCosOB', 'HsKHwoQ=', 'AsK+dsKQw6o=', 'Vwg1woLCow==', 'woDDmFhyCsKFccO3dg==', 'IMOtw7USwojCmwbCsk8=', 'wo7CvMK8wrTDrA==', 'wrLCuj3CrwU=', 'w7kGwofDklQ=', 'wrjCo8Kewo/Dr8KY', 'G0fDt0fDg8OOw47Djh5o', 'dcKddSc=', 'e1LCgUFNw6s=', 'ccKTazfDqw==', 'd8KoPsOlBA==', 'w4DCrnV7Hg==', 'wpPDukxMBw==', 'LMKLwqohRA==', 'wqE9P8K0Cg==', 'wrLCmC7CmTocKsOj', 'woHDuHPCvko=', 'w5XCtsKEwqjDnA==', 'w7HDhMOLwo8=', 'w6s8w4Q=', 'GcKywoLDpMOK', 'w43DjMOLwo1xL8Kjw5dgNwl0w7dT', 'wqzCmCc=', 'YMKTBFM9', 'w4nClSdLT8OrMF0OcnTCpgjCuVA=', 'KnzDtMOgwoLDkw==', 'GMO5w5Vw', 'w4/CkcK1wrDDkUnCjlo=', 'WlbDuMKWw4Es', 'GcOfD8O0IMOyNMOb', 'VFsV', 'Xwsiwo3Ctmg=', 'b8K4MWYbwo4=', 'VxQg', 'w4Rsw6DCmFI=', 'P2PDtXzDoA==', 'wonDlBwacsOj', 'w5rCl8Kgwp/DiUk=', 'w5R3PQsOO8Kcw5Q=', 'IcOIw543BkzDnSB8Cg==', 'w5HCllVfwqM=', 'HmE0EMO1', 'wr3DgBs=', 'wqTDhRMMbsOr', 'woXDrsOJwrRcQQ==', 'wpHDs8OewrFb', 'HWwvAMO1', 'w7zCl0B0FsKUTMOx', 'wqYxIMKTEQ==', 'w4LDgMORwpBENcK3w5VHJCl4w6l1wobDhcOgb8KG', 'EsKoVcKSw6Ee', 'G0jDoA==', 'w6Qewok=', 'Z8KWWxnDnQ==', 'w6DDsDk=', 'w6lsAcOkWgoQw7UPQw8=', 'a8K1BsOowojDh8O3', 'wqrClDDCiCoSKg==', 'DsO+QGtiZg==', 'w5fDjigIUg==', 'N8KvwqPDqcOXw5s=', 'FMO5w592w4zCncKo', 'w6DCtHp8', 'SMKfPsObwqA=', 'woHDu3PCimA=', 'E0nDhVrDrQ==', 'w57Do8Oqwrp+', 'w4jDrsOtwqxJ', 'wqh0WUbCjg==', 'FcKHQMKmw6o=', 'FMO4f2ts', 'w57DgjMzRcKPKw==', 'wqLCkCXCtw==', 'MXAnEcOjw7g=', 'wrx/QsO1CwI=', 'woPDpMOYwrBGQA==', 'FMOSBw==', 'wo3DucOVwoZBXsO8', 'w5toAAMYNw==', 'wqlxXMOs', 'FEfDpQ==', 'wph8X8O7ATVNw7lVWkg9ccKYbg==', 'w7xjQntcwqI=', 'H8O4aCXDtMK1', 'w5zCtn9gwo43w6E=', 'w5hYw5HCh35ldG3Cpw3DtMO3', 'TcKyIHkDwoooZnE=', 'IMOVCMOlJMO+PA==', 'wqXDncOE', 'w6bDt1nCpsKg', 'M0bDnsOFwrY=', 'MWwED8O/w77CsA==', 'w4Y2Y8K8b8OywpY=', 'ZkjDn8Kbw5oqw78=', 'bkfDrcKcw4A=', 'w6t3wobDph0=', 'EcO5WAfDmw==', 'a8K0VhvDrw==', 'w6XDlRItU8KcNA==', 'VsK7AWcVwpk3'];
(function(_0x13ecc8, _0x3e2859) {
    var _0xd14b57 = function(_0x91fb5e) {
        while (--_0x91fb5e) {
            _0x13ecc8['push'](_0x13ecc8['shift']());
        }
    };
    _0xd14b57(++_0x3e2859);
}(__0x2fb9f, 0x80));
var _0x2246 = function(_0x5c2ba4, _0x76e2e) {
    _0x5c2ba4 = _0x5c2ba4 - 0x0;
    var _0x32e905 = __0x2fb9f[_0x5c2ba4];
    if (_0x2246['initialized'] === undefined) {
        (function() {
            var _0x6dc9dd = typeof window !== 'undefined' ? window : typeof process === 'object' && typeof require === 'function' && typeof global === 'object' ? global : this;
            var _0x4dc154 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
            _0x6dc9dd['atob'] || (_0x6dc9dd['atob'] = function(_0x2e7e78) {
                var _0x27fca7 = String(_0x2e7e78)['replace'](/=+$/, '');
                for (var _0x443da7 = 0x0, _0xd245ea, _0x20728f, _0x1a79d3 = 0x0, _0x2add8f = ''; _0x20728f = _0x27fca7['charAt'](_0x1a79d3++); ~_0x20728f && (_0xd245ea = _0x443da7 % 0x4 ? _0xd245ea * 0x40 + _0x20728f : _0x20728f,
                _0x443da7++ % 0x4) ? _0x2add8f += String['fromCharCode'](0xff & _0xd245ea >> (-0x2 * _0x443da7 & 0x6)) : 0x0) {
                    _0x20728f = _0x4dc154['indexOf'](_0x20728f);
                }
                return _0x2add8f;
            }
            );
        }());
        var _0x9bf5c5 = function(_0x29e5a4, _0x4e0418) {
            var _0x317a0c = [], _0x58cb6f = 0x0, _0x1ef9fa, _0x2b84ff = '', _0x406a41 = '';
            _0x29e5a4 = atob(_0x29e5a4);
            for (var _0x5e728c = 0x0, _0x36a9ad = _0x29e5a4['length']; _0x5e728c < _0x36a9ad; _0x5e728c++) {
                _0x406a41 += '%' + ('00' + _0x29e5a4['charCodeAt'](_0x5e728c)['toString'](0x10))['slice'](-0x2);
            }
            _0x29e5a4 = decodeURIComponent(_0x406a41);
            for (var _0x3895f0 = 0x0; _0x3895f0 < 0x100; _0x3895f0++) {
                _0x317a0c[_0x3895f0] = _0x3895f0;
            }
            for (_0x3895f0 = 0x0; _0x3895f0 < 0x100; _0x3895f0++) {
                _0x58cb6f = (_0x58cb6f + _0x317a0c[_0x3895f0] + _0x4e0418['charCodeAt'](_0x3895f0 % _0x4e0418['length'])) % 0x100;
                _0x1ef9fa = _0x317a0c[_0x3895f0];
                _0x317a0c[_0x3895f0] = _0x317a0c[_0x58cb6f];
                _0x317a0c[_0x58cb6f] = _0x1ef9fa;
            }
            _0x3895f0 = 0x0;
            _0x58cb6f = 0x0;
            for (var _0x49f219 = 0x0; _0x49f219 < _0x29e5a4['length']; _0x49f219++) {
                _0x3895f0 = (_0x3895f0 + 0x1) % 0x100;
                _0x58cb6f = (_0x58cb6f + _0x317a0c[_0x3895f0]) % 0x100;
                _0x1ef9fa = _0x317a0c[_0x3895f0];
                _0x317a0c[_0x3895f0] = _0x317a0c[_0x58cb6f];
                _0x317a0c[_0x58cb6f] = _0x1ef9fa;
                _0x2b84ff += String['fromCharCode'](_0x29e5a4['charCodeAt'](_0x49f219) ^ _0x317a0c[(_0x317a0c[_0x3895f0] + _0x317a0c[_0x58cb6f]) % 0x100]);
            }
            return _0x2b84ff;
        };
        _0x2246['rc4'] = _0x9bf5c5;
        _0x2246['data'] = {};
        _0x2246['initialized'] = !![];
    }
    var _0x4b1179 = _0x2246['data'][_0x5c2ba4];
    if (_0x4b1179 === undefined) {
        if (_0x2246['once'] === undefined) {
            _0x2246['once'] = !![];
        }
        _0x32e905 = _0x2246['rc4'](_0x32e905, _0x76e2e);
        _0x2246['data'][_0x5c2ba4] = _0x32e905;
    } else {
        _0x32e905 = _0x4b1179;
    }
    return _0x32e905;
};

///////////////////////////////////////////////////////////////////
//AST解密代码
//导入需要解析树的文件
let jscode=fs.readFileSync('./要解密的.js','utf8');
//解析成树
let ast=parser.parse(jscode);

combinBin={
    CallExpression:function (path) {
        debugger
        if(path.node.callee.name==='_0x2246'){
            // console.log(path.toString());
            a1=path.node.arguments[0].value
            a2=path.node.arguments[1].value
            // console.log(a1,a2);
            jsdata=_0x2246(a1,a2)
            // console.log(jsdata);
            path.replaceWith(
                {
                    type:"StringLiteral",
                    value:jsdata
            }
            );
        }

    }
}
traverse(ast,combinBin,opts={});

///////////////////////////////////////////////////////////////////
//保存还原代码
let{code}=generator(ast);  //{}解包的意思   等价于letcode=generator(ast).code
fs.writeFile('第一步还原.js', code, (err)=>{});