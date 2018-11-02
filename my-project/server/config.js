const CONF = {
	port: '5757',
	rootPathname: '',

	// 微信小程序 App ID
	appId: 'wx9bb87f2fb40f2b3a',

	// 微信小程序 App Secret
	appSecret: '09d398be75f27b3dcb649d3032126086',

	// 是否使用腾讯云代理登录小程序
	useQcloudLogin: false,

	//以下配置为新增------start----
	serverHost: '',
	tunnelServerUrl: '',
	tunnelSignatureKey: '',
	qcloudAppId: '1257846310',
	qcloudSecretId: 'AKIDEODYmltMuuJG9tjsOOuHi08Q71w2Yx9A',
	qcloudSecretKey: 'hHj2NoTUjJj2ZxBFD2g2KRsGSUPdkny2',
	//以上配置为新增------end----

	/**
	 * MySQL 配置，用来存储 session 和用户信息
	 * 若使用了腾讯云微信小程序解决方案
	 * 开发环境下，MySQL 的初始密码为您的微信小程序 appid
	 */
	mysql: {
		host: '188.131.133.231',
		port: 3306,
		user: 'root',
		db: 'cAuth',
		pass: '123456',
		char: 'utf8mb4'
	},

	cos: {
		/**
		 * 地区简称
		 * @查看 https://cloud.tencent.com/document/product/436/6224
		 */
		region: 'ap-guangzhou',
		// Bucket 名称
		fileBucket: 'qcloudtest',
		// 文件夹
		uploadFolder: ''
	},

	// 微信登录态有效期
	wxLoginExpires: 7200,
	wxMessageToken: 'abcdefgh'
}

module.exports = CONF