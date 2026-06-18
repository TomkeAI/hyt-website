/**
 * 广州旺斯特汽车技术服务有限公司 - 多语言支持模块
 */

const I18N = {
    current: localStorage.getItem('lang') || 'ja-JP',

    data: {
        'zh-CN': {
            // 通用
            'site.title': '广州旺斯特汽车技术服务有限公司 - 基于复合材料的产品轻量化方案提供商',
            'nav.home': '首页',
            'nav.about': '关于我们',
            'nav.services': '产品',
            'nav.team': '客户及合作伙伴',
            'nav.cases': 'OEM服务',
            'nav.contact': '联系我们',
            'lang.switch': 'English',

            // 首页 Hero
            'hero.subtitle': 'Wonster AUTOMOTIVE TECHNICAL SERVICE (GUANGZHOU) CO., LTD.',
            'hero.title': '基于复合材料的产品<span class="highlight">轻量化</span>方案提供商',
            'hero.desc': '专注于碳纤维、玻璃纤维等先进复合材料应用，<br>为汽车、航空航天、交通轨道、医疗器械等行业提供轻量化整体解决方案',
            'hero.btn1': '了解我们的服务',
            'hero.btn2': '联系我们',

            // 关于我们
            'about.tag': 'ABOUT US',
            'about.title': '关于旺斯特',
            'about.desc': '以高品质、高性价比，致力成为备受客户信赖的企业',
            'about.h3': '轻量化创造价值，用创新驱动行业变革',
            'about.p1': '广州旺斯特汽车技术服务有限公司自2020年4月份正式开始CFRP/GFRP产品事业，并于2022年4月正式成立公司。公司主要运用热压罐成型、模压成形等成熟的碳纤维成形工艺，向广大客户提供基于轻量化解决方案的干碳产品。',
            'about.p2': '公司以"高品质、高性价比"为公司长期战略方针，以出众的品质搭配考究精致的设计，收获了广大客户的一致好评。更快更高效、百分百满足客户的一切合理需求是公司一直以来追求的使命和存在的价值。面向光明未来，我们将砥砺精进，致力成为备受各位客户信赖的企业。',
            'about.industry1': '无人机',
            'about.industry2': '赛车',
            'about.industry3': '高铁',
            'about.industry4': '医疗设备',

            // 产品
            'services.tag': 'PRODUCTS',
            'services.title': '产品',
            'services.desc': '专业的复合材料轻量化产品与解决方案',
            'services.card1.title': '碳纤维制品-汽车外饰件',
            'services.card1.desc': '提供碳纤维板材、管材、异形件等定制化产品，广泛应用于汽车零部件、无人机结构件等领域。',
            'services.card2.title': '碳纤维制品-汽车内饰件',
            'services.card2.desc': '碳纤维汽车内饰件轻量化解决方案，包括中控面板、门板饰条、方向盘、换挡拨片等定制产品。',
            'services.card3.title': '产品开发OEM',
            'services.card3.desc': '提供复合材料选型、结构设计、工艺优化及批量生产一体化OEM服务，支持联合研发项目。',
            'services.card4.title': '碳纤维制品-汽车轮毂',
            'services.card4.desc': '碳纤维汽车轮毂轻量化解决方案，大幅降低簧下质量，提升操控性能与燃油效率。',

            // 合作伙伴
            'team.tag': 'OUR CLIENTS & PARTNERS',
            'team.title': '客户及合作伙伴',
            'team.desc': '携手行业领军者，共创轻量化未来',

            // 案例
            'cases.tag': 'OUR CASES',
            'cases.title': '应用案例',
            'cases.desc': '用品质证明，用效果说话',
            'cases.case1.tag': '汽车制造',
            'cases.case1.title': '新能源汽车电池箱体',
            'cases.case1.desc': '为某新能源车企提供碳纤维复合材料电池箱体方案，减重40%同时提升防护等级',
            'cases.case2.tag': '无人机',
            'cases.case2.title': '工业级无人机机身结构',
            'cases.case2.desc': '为某无人机厂商提供全碳纤维机身结构件，实现机身减重35%，续航提升25%',
            'cases.case3.tag': '体育器材',
            'cases.case3.title': '高端碳纤维自行车架',
            'cases.case3.desc': '为某知名自行车品牌提供超轻碳纤维车架方案，整车重量控制在6.8kg以内',

            // 联系我们
            'contact.tag': 'CONTACT US',
            'contact.title': '联系我们',
            'contact.desc': '期待与您合作，共同探索轻量化的无限可能',
            'contact.addr': '公司地址',
            'contact.addr.val': '广州市番禺区大龙街汉碁大道3号2栋211',
            'contact.email': '电子邮箱',
            'contact.email.val': 'wonster_marketing2@wtas.tech',
            'contact.phone': '联系电话',
            'contact.phone.val': '+86 139 2243 0956',
            'contact.hours': '工作时间',
            'contact.hours.val': '周一至周五 9:00 - 18:00',
            'contact.name': '姓名 *',
            'contact.name.ph': '请输入您的姓名',
            'contact.email.label': '邮箱 *',
            'contact.email.ph': '请输入您的邮箱',
            'contact.subject': '主题',
            'contact.subject.ph': '请输入主题',
            'contact.msg': '留言 *',
            'contact.msg.ph': '请输入您的留言内容...',
            'contact.submit': '发送消息',

            // 页脚
            'footer.brand': '创新驱动未来，科技成就梦想。<br>我们期待与您携手共进。',
            'footer.quick': '快速链接',
            'footer.service': '服务项目',
            'footer.follow': '关注我们',
            'footer.copy': '© 2024 广州旺斯特汽车技术服务有限公司 Wonster Automotive Technical Service (Guangzhou) Co., Ltd. All Rights Reserved.',

            // 内饰页
            'interior.title': '碳纤维制品-汽车内饰件',
            'interior.subtitle': '轻量化 · 高质感 · 定制化',
            'interior.p1': '碳纤维车门开关面板，采用热压罐成型工艺，表面光滑平整，碳纤维纹理清晰可见，为车内增添运动气息。',
            'interior.p2': '全碳纤维材质运动方向盘，人体工学设计，握感舒适，大幅减轻方向盘重量，提升转向响应灵敏度。',
            'interior.p3': '碳纤维纹理手动换挡头，精密CNC加工，表面防滑处理，手感出众，为驾驶增添操控乐趣。',
            'interior.p4': '车门饰条与门板碳纤维嵌件，精准贴合原车曲线，提升内饰质感，彰显不凡品味。',
            'interior.p5': '一体式全碳纤维赛车桶椅，极致轻量化设计，优异包裹性与支撑性，赛道与街道兼宜。',
            'interior.p6': '中控区域碳纤维覆盖件，精密切割完美贴合，保护原车内饰的同时提升视觉层次感。',
            'interior.product1': '车门开关面板',
            'interior.product2': '碳纤维方向盘',
            'interior.product3': '手动拨档杆',
            'interior.product4': '车门装饰件',
            'interior.product5': '赛车座椅',
            'interior.product6': '中控台面板',

            // 外饰页
            'exterior.title': '碳纤维制品-汽车外饰件',
            'exterior.subtitle': '轻量化 · 空气动力学 · 高性能',
            'exterior.placeholder': '内容待补充',

            // 轮毂页
            'wheel.title': '碳纤维制品-汽车轮毂',
            'wheel.subtitle': '极致轻量 · 卓越操控 · 高效节能',
            'wheel.placeholder': '内容待补充',

            // 产品总览页
            'products.title': '碳纤维制品',

            // OEM页
            'odm.tag': 'OEM SERVICE',
            'odm.title': '产品开发OEM',
            'odm.desc': '专业的复合材料选型、结构设计、工艺优化及批量生产一体化服务',
            'odm.subtitle': '专业的复合材料选型、结构设计、工艺优化及批量生产一体化服务',
            'odm.section1': '产品开发流程',
            'odm.section2': '产品开发周期',
            'odm.section3': '工艺流程',
            'odm.section4': '部分生产设备',
            'odm.drag.hint': '拖拽节点可调整顺序，点击节点查看详情',
            'equipment.e1.desc': '真空热压罐',
            'equipment.e2.desc': '小吨位模压机',
            'equipment.e3.desc': '五轴CNC',
            'equipment.e4.desc': '水磨车间一角',

            // 流程图1 - 产品开发流程
            'flow1.s1': '输入客户开发需求',
            'flow1.s1.d1': '2D 图纸',
            'flow1.s1.d2': '3D 数模',
            'flow1.s1.d3': '性能要件',
            'flow1.s2': '设计工艺方案',
            'flow1.s2.d1': '材料选择',
            'flow1.s2.d2': '铺层结构',
            'flow1.s2.d3': '最合理工法',
            'flow1.s3': '模具开发方案',
            'flow1.s3.d1': '成型模具',
            'flow1.s3.d2': '胶合治具',
            'flow1.s3.d3': '机加工治具',
            'flow1.s3.d4': '检具',
            'flow1.s4': '试作・调试',
            'flow1.s4.d1': '性能评价',
            'flow1.s4.d2': '外观评价',
            'flow1.s4.d3': '尺寸测量',
            'flow1.s5': '量产',
            'flow1.s5.d1': '提升一次合格率',
            'flow1.s5.d2': '削减加工周期',
            'flow1.s6': '评价・品质保证',
            'flow1.s6.d1': 'VA·VE 工程',
            'flow1.s6.d2': '品质提升',

            // 流程图2 - 产品开发周期
            'flow2.s1': '工艺设计 (1w)',
            'flow2.s2': '模具设计 (1w)',
            'flow2.s3': '模具制作 (2w~6w)',
            'flow2.s4': '模具调试 (1w~2w)',
            'flow2.s5': '试生产 (1w~2w)',
            'flow2.note': '产品开发周期（数据锁定后）：6~12周内进入试生产阶段',

            // 流程图3 - 工艺流程
            'flow3.prep': '预浸料入库',
            'flow3.cold': '冷冻保管',
            'flow3.cut': '预浸料裁剪',
            'flow3.lay': '材料铺贴',
            'flow3.form': '热压罐成形 / PCM成形 / SMC成形',
            'flow3.machine': '机加工',
            'flow3.bond': '胶合（根据需要）',
            'flow3.sand': '打磨修补',
            'flow3.coat': '喷涂',
            'flow3.inspect': '检查',
            'flow3.upper': '材料准备阶段',
            'flow3.center': '成形阶段',
            'flow3.lower': '后处理阶段',
            'flow3.feedback': '可返回成形',
        },

        'ja-JP': {
            // 共通
            'site.title': '广州旺斯特汽車技術服務有限公司 - 複合材料による製品軽量化ソリューションプロバイダー',
            'nav.home': 'ホーム',
            'nav.about': '会社概要',
            'nav.services': '製品',
            'nav.team': '顧客・パートナー',
            'nav.cases': 'OEMサービス',
            'nav.contact': 'お問い合わせ',
            'lang.switch': '中文',

            // ホーム Hero
            'hero.subtitle': 'Wonster AUTOMOTIVE TECHNICAL SERVICE (GUANGZHOU) CO., LTD.',
            'hero.title': '複合材料による製品<span class="highlight">軽量化</span>ソリューションプロバイダー',
            'hero.desc': '炭素繊維、ガラス繊維などの先進複合材料の応用に特化し、<br>自動車、航空宇宙、交通軌道、医療機器などの業界に軽量化トータルソリューションを提供',
            'hero.btn1': 'サービスを見る',
            'hero.btn2': 'お問い合わせ',

            // 会社概要
            'about.tag': 'ABOUT US',
            'about.title': '広州ワンスター',
            'about.desc': '高品質・合理的なコスト・タイムリーな納期で、お客様から信頼される企業を目指して',
            'about.h3': '軽量化が価値を創造し、革新が業界を変革する',
            'about.p1': '広州ワンスターは2020年4月よりCFRP/GFRP製品事業を正式に開始し、2022年4月に会社を設立しました。当社は主にオートクレーブ成形、プレス成形などの成熟した炭素繊維成形技術を活用し、軽量化ソリューションに基づくドライカーボン製品をお客様に提供しています。',
            'about.p2': '会社設立され以来、サイドパネル、リアスポイラー、リアウィングステーなどのエアロパーツとエンジンカバーなど数多いカーボン製可飾品製品を出荷しています。「高品質・高コストパフォーマンス」を長期戦略方針とし、優れた品質と洗練されたデザインで、多くのお客様から高い評価をいただいています。より速く、より効率的に、お客様のあらゆるご要望に100％お応えすることが、当社の使命であり、競争の激しい世界で長く生き残るための価値でもございます。明るい未来に向かって、常に精進し、お客様から信頼される企業を目指して技術と品質を磨き続け、価値ある製品・サービスを提供し続けます。',
            'about.industry1': 'ドローン',
            'about.industry2': 'モータースポーツ',
            'about.industry3': '高速鉄道',
            'about.industry4': '医療機器',

            // サービス
            'services.tag': 'PRODUCTS',
            'services.title': '製品',
            'services.desc': '専門的な複合材料軽量化製品とソリューション',
            'services.card1.title': 'CFRP製品-自動車外装部品',
            'services.card1.desc': '炭素繊維板材、パイプ、異形材などのカスタマイズ製品を提供し、自動車部品、ドローン構造部品などの分野で広く使用されています。',
            'services.card2.title': 'CFRP製品-自動車内装部品',
            'services.card2.desc': '炭素繊維自動車内装部品の軽量化ソリューション。センターパネル、ドアトリム、ステアリングホイール、パドルシフトなどのカスタマイズ製品を含みます。',
            'services.card3.title': '製品開発ODM',
            'services.card3.desc': '複合材料の選定、構造設計、工程最適化、量産までの一貫ODMサービスを提供し、共同研究開発プロジェクトもサポートします。',
            'services.card4.title': 'CFRP製品-自動車ホイール',
            'services.card4.desc': '炭素繊維自動車ホイールの軽量化ソリューション。バネ下重量を大幅に削減し、ハンドリング性能と燃費効率を向上させます。',

            // パートナー
            'team.tag': 'OUR CLIENTS & PARTNERS',
            'team.title': '顧客・パートナー企業',
            'team.desc': '業界のリーダーと共に、軽量化の未来を創造する',

            // 事例
            'cases.tag': 'OUR CASES',
            'cases.title': '導入事例',
            'cases.desc': '品質で証明し、効果で語る',
            'cases.case1.tag': '自動車製造',
            'cases.case1.title': '新エネルギー車バッテリーボックス',
            'cases.case1.desc': '某新エネルギー車メーカーに炭素繊維複合材料バッテリーボックスソリューションを提供、40%の軽量化と保護等級の向上を実現',
            'cases.case2.tag': 'ドローン',
            'cases.case2.title': '産業用ドローン機体構造',
            'cases.case2.desc': '某ドローンメーカーにオールカーボン機体構造部品を提供、機体重量35%削減、航続時間25%向上を達成',
            'cases.case3.tag': 'スポーツ用品',
            'cases.case3.title': '高級カーボン自転車フレーム',
            'cases.case3.desc': '某有名自転車ブランドに超軽量カーボンフレームソリューションを提供、完成車重量を6.8kg以内に抑制',

            // お問い合わせ
            'contact.tag': 'CONTACT US',
            'contact.title': 'お問い合わせ',
            'contact.desc': 'お客様との協業を通じて、軽量化の無限の可能性を共に探求します',
            'contact.addr': '会社住所',
            'contact.addr.val': '広州市番禺区大龍街漢碁大道3号2棟211',
            'contact.email': 'メールアドレス',
            'contact.email.val': 'wonster_marketing2@wtas.tech',
            'contact.phone': '電話番号',
            'contact.phone.val': '+86 139 2243 0956',
            'contact.hours': '営業時間',
            'contact.hours.val': '月曜〜金曜 9:00 - 18:00',
            'contact.name': 'お名前 *',
            'contact.name.ph': 'お名前をご入力ください',
            'contact.email.label': 'メールアドレス *',
            'contact.email.ph': 'メールアドレスをご入力ください',
            'contact.subject': '件名',
            'contact.subject.ph': '件名をご入力ください',
            'contact.msg': 'メッセージ *',
            'contact.msg.ph': 'メッセージをご入力ください...',
            'contact.submit': '送信する',

            // フッター
            'footer.brand': '革新が未来を駆動し、技術が夢を実現する。<br>皆様と共に歩んでいけることを楽しみにしています。',
            'footer.quick': 'クイックリンク',
            'footer.service': 'サービス項目',
            'footer.follow': 'フォローする',
            'footer.copy': '© 2024 広州ワンスター Wonster Automotive Technical Service (Guangzhou) Co., Ltd. All Rights Reserved.',

            // 内装ページ
            'interior.title': 'CFRP製品-自動車内装部品',
            'interior.subtitle': '軽量化 · 高質感 · カスタマイズ',
            'interior.p1': 'カーボンファイバードアスイッチパネル。オートクレーブ成形を採用し、表面は滑らかで平坦、カーボン模様が鮮明に見え、車内にスポーティな雰囲気を演出します。',
            'interior.p2': 'フルカーボンファイバー製スポーツステアリングホイール。人間工学に基づいたデザインで握り心地が良く、大幅な軽量化によりステアリングレスポンスが向上します。',
            'interior.p3': 'カーボンファイバー調マニュアルシフトノブ。精密CNC加工、表面滑り止め加工、優れた手触りで運転の楽しさを高めます。',
            'interior.p4': 'ドアモールとドアパネル用カーボンファイバーインサート。純正カーブに正確にフィットし、内装の質感を高め、卓越したセンスを表現します。',
            'interior.p5': '一体型フルカーボンファイバーレーシングバケットシート。究極の軽量化設計、優れたホールド性とサポート性で、サーキットでもストリートでも最適です。',
            'interior.p6': 'センターコンソールカーボンファイバーカバーパネル。精密カットで完璧にフィットし、純正内装を保護しながら視覚的な階層感を高めます。',
            'interior.product1': 'ドアスイッチパネル',
            'interior.product2': 'カーボンステアリング',
            'interior.product3': 'シフトノブ',
            'interior.product4': 'ドアトリム',
            'interior.product5': 'レーシングシート',
            'interior.product6': 'センターコンソール',

            // 外装ページ
            'exterior.title': 'CFRP製品-自動車外装部品',
            'exterior.subtitle': '軽量化 · エアロダイナミクス · 高性能',
            'exterior.placeholder': '内容準備中',

            // ホイールページ
            'wheel.title': 'CFRP製品-自動車ホイール',
            'wheel.subtitle': '究極の軽量 · 卓越したハンドリング · 高効率',
            'wheel.placeholder': '内容準備中',

            // 製品概要ページ
            'products.title': 'CFRP製品',

            // OEMページ
            'odm.tag': 'OEM SERVICE',
            'odm.title': '製品開発OEM',
            'odm.desc': '複合材料の選定、構造設計、工程最適化、量産までの一貫サービス',
            'odm.subtitle': '複合材料の選定、構造設計、工程最適化、量産までの一貫サービス',
            'odm.section1': '製品開発フロー',
            'odm.section2': '製品開発サイクル',
            'odm.section3': '製造工程',
            'odm.section4': '生産設備の一部',
            'odm.drag.hint': 'ノードをドラッグして順序を変更、クリックで詳細を表示',
            'equipment.e1.desc': 'オートクレーブ成形設備',
            'equipment.e2.desc': '小型プレス設備',
            'equipment.e3.desc': '五軸CNCマシン',
            'equipment.e4.desc': '仕上げ作業現場の一角',

            // フロー1 - 製品開発フロー
            'flow1.s1': '顧客開発要件の入力',
            'flow1.s1.d1': '2D 図面',
            'flow1.s1.d2': '3D モデル',
            'flow1.s1.d3': '性能要件',
            'flow1.s2': '工程方案设计',
            'flow1.s2.d1': '材料選定',
            'flow1.s2.d2': '積層構造',
            'flow1.s2.d3': '最適工法',
            'flow1.s3': '金型開発方案',
            'flow1.s3.d1': '成形金型',
            'flow1.s3.d2': '接着治具',
            'flow1.s3.d3': '機械加工治具',
            'flow1.s3.d4': '検査治具',
            'flow1.s4': '試作・調整',
            'flow1.s4.d1': '性能評価',
            'flow1.s4.d2': '外観評価',
            'flow1.s4.d3': '寸法測定',
            'flow1.s5': '量産',
            'flow1.s5.d1': '初回合格率の向上',
            'flow1.s5.d2': '加工サイクルの短縮',
            'flow1.s6': '評価・品質保証',
            'flow1.s6.d1': 'VA・VE エンジニアリング',
            'flow1.s6.d2': '品質向上',

            // フロー2 - 製品開発サイクル
            'flow2.s1': '工程設計 (1w)',
            'flow2.s2': '金型設計 (1w)',
            'flow2.s3': '金型製作 (2w~6w)',
            'flow2.s4': '金型調整 (1w~2w)',
            'flow2.s5': '試生産 (1w~2w)',
            'flow2.note': '製品開発サイクル（データロック後）：6〜12週間で試生産段階へ',

            // フロー3 - 製造工程
            'flow3.prep': 'プリプレグ入庫',
            'flow3.cold': '冷凍保管',
            'flow3.cut': 'プリプレグ裁断',
            'flow3.lay': '材料積層',
            'flow3.form': 'オートクレーブ成形 / PCM成形 / SMC成形',
            'flow3.machine': '機械加工',
            'flow3.bond': '接着（必要に応じて）',
            'flow3.sand': '研磨・補修',
            'flow3.coat': '塗装',
            'flow3.inspect': '検査',
            'flow3.upper': '材料準備段階',
            'flow3.center': '成形段階',
            'flow3.lower': '後処理段階',
            'flow3.feedback': '成形に戻り可能',
        },

        'en': {
            // General
            'site.title': 'Wonster Automotive Technical Service (Guangzhou) Co., Ltd. - Lightweight Solutions Provider Based on Composite Materials',
            'nav.home': 'Home',
            'nav.about': 'About Us',
            'nav.services': 'Products',
            'nav.team': 'Clients & Partners',
            'nav.cases': 'ODM Service',
            'nav.contact': 'Contact',
            'lang.switch': '日本語',

            // Hero
            'hero.subtitle': 'Wonster TECHNICAL AUTOMOTIVE SERVICE (GUANGZHOU) CO., LTD.',
            'hero.title': 'Lightweight Solutions Provider Based on <span class="highlight">Composite Materials</span>',
            'hero.desc': 'Specializing in advanced composite materials such as carbon fiber and glass fiber,<br>providing comprehensive lightweight solutions for automotive, aerospace, rail transit, and medical industries',
            'hero.btn1': 'Explore Our Services',
            'hero.btn2': 'Contact Us',

            // About
            'about.tag': 'ABOUT US',
            'about.title': 'About Wtas',
            'about.desc': 'Committed to high quality and cost-effectiveness, striving to be a trusted enterprise',
            'about.h3': 'Lightweighting Creates Value, Innovation Drives Industry Transformation',
            'about.p1': 'Wonster Automotive Technical Service (Guangzhou) Co., Ltd. officially launched its CFRP/GFRP product business in April 2022 and was formally established as a company in January 2025. The company primarily utilizes mature carbon fiber molding processes such as autoclave molding and compression molding to provide customers with dry carbon products based on lightweight solutions.',
            'about.p2': 'With "high quality, high cost-effectiveness" as our long-term strategic approach, we have earned widespread recognition from customers for our outstanding quality and refined design. Faster, more efficient, and 100% meeting all reasonable customer needs is the mission and value we have always pursued. Looking towards a bright future, we will continue to strive to become a trusted enterprise for all our clients.',
            'about.industry1': 'Drones',
            'about.industry2': 'Racing',
            'about.industry3': 'High-Speed Rail',
            'about.industry4': 'Medical Equipment',

            // Services
            'services.tag': 'PRODUCTS',
            'services.title': 'Products',
            'services.desc': 'Professional composite material lightweight products and solutions',
            'services.card1.title': 'CFRP Products - Automotive Exterior',
            'services.card1.desc': 'Providing customized carbon fiber panels, tubes, and shaped components widely used in automotive parts, drone structural components, and other fields.',
            'services.card2.title': 'CFRP Products - Automotive Interior',
            'services.card2.desc': 'Lightweight solutions for carbon fiber automotive interior parts, including center panels, door trims, steering wheels, paddle shifters, and other customized products.',
            'services.card3.title': 'Product Development OEM',
            'services.card3.desc': 'Providing integrated OEM services from composite material selection, structural design, process optimization to mass production, supporting joint R&D projects.',
            'services.card4.title': 'CFRP Products - Automotive Wheels',
            'services.card4.desc': 'Lightweight carbon fiber automotive wheel solutions, significantly reducing unsprung mass for improved handling and fuel efficiency.',

            // Partners
            'team.tag': 'OUR CLIENTS & PARTNERS',
            'team.title': 'Clients & Partners',
            'team.desc': 'Working with industry leaders to create a lightweight future',

            // Cases
            'cases.tag': 'OUR CASES',
            'cases.title': 'Application Cases',
            'cases.desc': 'Proven by quality, demonstrated by results',
            'cases.case1.tag': 'Automotive',
            'cases.case1.title': 'NEV Battery Box Housing',
            'cases.case1.desc': 'Provided carbon fiber composite battery box solution for an NEV manufacturer, achieving 40% weight reduction while improving protection rating',
            'cases.case2.tag': 'Drones',
            'cases.case2.title': 'Industrial Drone Fuselage Structure',
            'cases.case2.desc': 'Provided all-carbon fuselage structural components for a drone manufacturer, achieving 35% weight reduction and 25% endurance improvement',
            'cases.case3.tag': 'Sports Equipment',
            'cases.case3.title': 'Premium Carbon Fiber Bicycle Frame',
            'cases.case3.desc': 'Provided ultra-light carbon frame solution for a renowned bicycle brand, controlling complete bike weight within 6.8kg',

            // Contact
            'contact.tag': 'CONTACT US',
            'contact.title': 'Contact Us',
            'contact.desc': 'Looking forward to collaborating with you and exploring the infinite possibilities of lightweighting',
            'contact.addr': 'Address',
            'contact.addr.val': 'Building 2, Unit 211, No.3 Hanqi Avenue, Dalong Street, Panyu District, Guangzhou',
            'contact.email': 'Email',
            'contact.email.val': 'wonster_marketing2@wtas.tech',
            'contact.phone': 'Phone',
            'contact.phone.val': '+86 139 2243 0956',
            'contact.hours': 'Business Hours',
            'contact.hours.val': 'Monday - Friday 9:00 - 18:00',
            'contact.name': 'Name *',
            'contact.name.ph': 'Please enter your name',
            'contact.email.label': 'Email *',
            'contact.email.ph': 'Please enter your email',
            'contact.subject': 'Subject',
            'contact.subject.ph': 'Please enter subject',
            'contact.msg': 'Message *',
            'contact.msg.ph': 'Please enter your message...',
            'contact.submit': 'Send Message',

            // Footer
            'footer.brand': 'Innovation drives the future, technology realizes dreams.<br>We look forward to working with you.',
            'footer.quick': 'Quick Links',
            'footer.service': 'Services',
            'footer.follow': 'Follow Us',
            'footer.copy': '© 2024 Wonster Automotive Technical Service (Guangzhou) Co., Ltd. All Rights Reserved.',

            // Interior page
            'interior.title': 'CFRP Products - Automotive Interior',
            'interior.subtitle': 'Lightweight · Premium Quality · Customized',
            'interior.p1': 'Carbon fiber door switch panel, manufactured using autoclave molding process, with smooth flat surface and clearly visible carbon fiber weave pattern, adding a sporty touch to the interior.',
            'interior.p2': 'Full carbon fiber sport steering wheel with ergonomic design, comfortable grip, significantly reducing weight and improving steering response sensitivity.',
            'interior.p3': 'Carbon fiber manual shift knob with precision CNC machining, anti-slip surface treatment, excellent feel, enhancing driving pleasure.',
            'interior.p4': 'Door trim and door panel carbon fiber inserts, precisely fitted to original vehicle curves, enhancing interior quality and showcasing exceptional taste.',
            'interior.p5': 'One-piece full carbon fiber racing bucket seat with ultimate lightweight design, excellent wrapping and support, suitable for both track and street.',
            'interior.p6': 'Center console carbon fiber cover panel, precision-cut for perfect fit, protecting original interior while enhancing visual hierarchy.',
            'interior.product1': 'Door Switch Panel',
            'interior.product2': 'Carbon Steering Wheel',
            'interior.product3': 'Shift Knob',
            'interior.product4': 'Door Trim',
            'interior.product5': 'Racing Seat',
            'interior.product6': 'Center Console',

            // Exterior page
            'exterior.title': 'CFRP Products - Automotive Exterior',
            'exterior.subtitle': 'Lightweight · Aerodynamics · High Performance',
            'exterior.placeholder': 'Content coming soon',

            // Wheels page
            'wheel.title': 'CFRP Products - Automotive Wheels',
            'wheel.subtitle': 'Ultra Lightweight · Superior Handling · High Efficiency',
            'wheel.placeholder': 'Content coming soon',

            // Products page
            'products.title': 'CFRP Products',

            // OEM page
            'odm.tag': 'OEM SERVICE',
            'odm.title': 'Product Development OEM',
            'odm.desc': 'Integrated services for composite material selection, structural design, process optimization and mass production',
            'odm.subtitle': 'Integrated services for composite material selection, structural design, process optimization and mass production',
            'odm.section1': 'Product Development Process',
            'odm.section2': 'Development Timeline',
            'odm.section3': 'Manufacturing Process',
            'odm.section4': 'Production Equipment',
            'odm.drag.hint': 'Drag nodes to reorder, click to view details',
            'equipment.e1.desc': 'Vacuum Autoclave',
            'equipment.e2.desc': 'Compact Compression Press',
            'equipment.e3.desc': '5-Axis CNC',
            'equipment.e4.desc': 'Water Grinding Workshop',

            // Flow 1 - Product Development
            'flow1.s1': 'Customer Requirements Input',
            'flow1.s1.d1': '2D Drawings',
            'flow1.s1.d2': '3D Models',
            'flow1.s1.d3': 'Performance Requirements',
            'flow1.s2': 'Process Design',
            'flow1.s2.d1': 'Material Selection',
            'flow1.s2.d2': 'Layup Structure',
            'flow1.s2.d3': 'Optimal Process',
            'flow1.s3': 'Mold Development',
            'flow1.s3.d1': 'Forming Molds',
            'flow1.s3.d2': 'Bonding Fixtures',
            'flow1.s3.d3': 'Machining Fixtures',
            'flow1.s3.d4': 'Inspection Jigs',
            'flow1.s4': 'Trial & Debugging',
            'flow1.s4.d1': 'Performance Evaluation',
            'flow1.s4.d2': 'Appearance Evaluation',
            'flow1.s4.d3': 'Dimensional Measurement',
            'flow1.s5': 'Mass Production',
            'flow1.s5.d1': 'Improve First-Pass Yield',
            'flow1.s5.d2': 'Reduce Processing Cycle',
            'flow1.s6': 'Evaluation & QA',
            'flow1.s6.d1': 'VA/VE Engineering',
            'flow1.s6.d2': 'Quality Improvement',

            // Flow 2 - Development Timeline
            'flow2.s1': 'Process Design (1w)',
            'flow2.s2': 'Mold Design (1w)',
            'flow2.s3': 'Mold Manufacturing (2w~6w)',
            'flow2.s4': 'Mold Debugging (1w~2w)',
            'flow2.s5': 'Trial Production (1w~2w)',
            'flow2.note': 'Development Timeline (after data lock): Enter trial production within 6-12 weeks',

            // Flow 3 - Manufacturing Process
            'flow3.prep': 'Prepreg Storage',
            'flow3.cold': 'Cold Storage',
            'flow3.cut': 'Prepreg Cutting',
            'flow3.lay': 'Material Layup',
            'flow3.form': 'Autoclave Molding / PCM / SMC',
            'flow3.machine': 'Machining',
            'flow3.bond': 'Bonding (as needed)',
            'flow3.sand': 'Sanding & Repair',
            'flow3.coat': 'Painting',
            'flow3.inspect': 'Inspection',
            'flow3.upper': 'Material Preparation',
            'flow3.center': 'Forming Stage',
            'flow3.lower': 'Post-Processing',
            'flow3.feedback': 'Return to forming',
        },

    },

    t(key) {
        const langData = this.data[this.current];
        if (!langData) return key;
        return langData[key] || key;
    },

    setLang(lang) {
        this.current = lang;
        localStorage.setItem('lang', lang);
        this.updatePage();
    },

    updatePage() {
        // Update lang switch buttons - highlight current
        document.querySelectorAll('.lang-btn').forEach(btn => {
            const lang = btn.getAttribute('data-lang');
            if (lang === this.current) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const text = this.t(key);
            if (text) {
                // For elements that contain HTML (like hero.title)
                if (text.includes('<')) {
                    el.innerHTML = text;
                } else {
                    el.textContent = text;
                }
            }
        });

        // Update placeholders
        document.querySelectorAll('[data-i18n-ph]').forEach(el => {
            const key = el.getAttribute('data-i18n-ph');
            const text = this.t(key);
            if (text) {
                el.setAttribute('placeholder', text);
            }
        });

        // Update title
        const titleEl = document.querySelector('title[data-i18n="site.title"]');
        if (titleEl) {
            document.title = this.t('site.title');
        }
    },

    init() {
        // Create language switch styles
        const style = document.createElement('style');
        style.textContent = `
            .lang-group {
                display: inline-flex;
                align-items: center;
                gap: 4px;
                margin-left: 20px;
            }
            .lang-btn {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                background: rgba(255,255,255,0.1);
                color: rgba(255,255,255,0.7);
                border: 1px solid rgba(255,255,255,0.2);
                border-radius: 14px;
                padding: 4px 12px;
                font-size: 12px;
                cursor: pointer;
                transition: all 0.3s;
                font-family: inherit;
                white-space: nowrap;
                line-height: 1.4;
            }
            .lang-btn:hover {
                background: rgba(255,255,255,0.25);
                color: #fff;
            }
            .lang-btn.active {
                background: rgba(255,255,255,0.3);
                color: #fff;
                border-color: rgba(255,255,255,0.5);
                font-weight: 600;
            }
            .header.scrolled .lang-btn {
                background: transparent;
                color: var(--text-secondary);
                border-color: var(--border);
            }
            .header.scrolled .lang-btn:hover {
                background: var(--primary-light);
                color: var(--primary);
                border-color: var(--primary-light);
            }
            .header.scrolled .lang-btn.active {
                background: var(--primary);
                color: #fff;
                border-color: var(--primary);
            }
            @media (max-width: 768px) {
                .lang-group {
                    position: fixed;
                    top: 10px;
                    right: 60px;
                    z-index: 1001;
                    gap: 3px;
                    margin-left: 0;
                }
                .lang-btn {
                    font-size: 10px;
                    padding: 3px 8px;
                    border-radius: 10px;
                    background: var(--primary);
                    color: rgba(255,255,255,0.7);
                    border-color: var(--primary);
                }
                .lang-btn.active {
                    background: var(--primary-dark);
                    color: #fff;
                    border-color: var(--primary-dark);
                }
            }
        `;
        document.head.appendChild(style);

        // Language definitions
        const langs = [
            { code: 'zh-CN', label: '中文' },
            { code: 'en', label: 'EN' },
            { code: 'ja-JP', label: '日本語' }
        ];

        // Add language group to all headers
        document.querySelectorAll('header .nav-list').forEach(navList => {
            const li = document.createElement('li');
            const group = document.createElement('div');
            group.className = 'lang-group';

            langs.forEach(lang => {
                const btn = document.createElement('button');
                btn.className = 'lang-btn';
                btn.setAttribute('data-lang', lang.code);
                btn.textContent = lang.label;
                if (lang.code === this.current) {
                    btn.classList.add('active');
                }
                btn.onclick = () => {
                    this.setLang(lang.code);
                };
                group.appendChild(btn);
            });

            li.appendChild(group);
            navList.appendChild(li);
        });

        // Update page with current language
        this.updatePage();
    }
};

document.addEventListener('DOMContentLoaded', () => {
    I18N.init();
});
