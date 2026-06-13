/**
 * 和野贸易 - 多语言支持模块
 */

const I18N = {
    current: localStorage.getItem('lang') || 'zh-CN',

    data: {
        'zh-CN': {
            // 通用
            'site.title': '和野贸易（广州）有限公司 - 基于复合材料的产品轻量化方案提供商',
            'nav.home': '首页',
            'nav.about': '关于我们',
            'nav.services': '服务',
            'nav.team': '客户及合作伙伴',
            'nav.cases': '案例',
            'nav.contact': '联系我们',
            'lang.switch': '日本語',

            // 首页 Hero
            'hero.subtitle': 'HEYE TRADING (GUANGZHOU) CO., LTD.',
            'hero.title': '基于复合材料的产品<span class="highlight">轻量化</span>方案提供商',
            'hero.desc': '专注于碳纤维、玻璃纤维等先进复合材料应用，<br>为汽车、航空航天、交通轨道、医疗器械等行业提供轻量化整体解决方案',
            'hero.btn1': '了解我们的服务',
            'hero.btn2': '联系我们',

            // 关于我们
            'about.tag': 'ABOUT US',
            'about.title': '关于和野贸易',
            'about.desc': '以高品质、高性价比，致力成为备受客户信赖的企业',
            'about.h3': '轻量化创造价值，用创新驱动行业变革',
            'about.p1': '和野贸易（广州）有限公司自2022年4月份正式开始CFRP/GFRP产品事业，并于2025年1月正式成立公司。公司主要运用热压罐成型、模压成形等成熟的碳纤维成形工艺，向广大客户提供基于轻量化解决方案的干碳产品。',
            'about.p2': '公司以"高品质、高性价比"为公司长期战略方针，以出众的品质搭配考究精致的设计，收获了广大客户的一致好评。更快更高效、百分百满足客户的一切合理需求是公司一直以来追求的使命和存在的价值。面向光明未来，我们将砥砺精进，致力成为备受各位客户信赖的企业。',
            'about.industry1': '无人机',
            'about.industry2': '赛车',
            'about.industry3': '高铁',
            'about.industry4': '医疗设备',

            // 服务
            'services.tag': 'OUR SERVICES',
            'services.title': '产品与服务',
            'services.desc': '专业的复合材料轻量化产品与解决方案',
            'services.card1.title': '碳纤维制品-汽车外饰件',
            'services.card1.desc': '提供碳纤维板材、管材、异形件等定制化产品，广泛应用于汽车零部件、无人机结构件等领域。',
            'services.card2.title': '碳纤维制品-汽车内饰件',
            'services.card2.desc': '碳纤维汽车内饰件轻量化解决方案，包括中控面板、门板饰条、方向盘、换挡拨片等定制产品。',
            'services.card3.title': '产品开发ODM',
            'services.card3.desc': '提供复合材料选型、结构设计、工艺优化及批量生产一体化ODM服务，支持联合研发项目。',

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
            'contact.email.val': 'wonster_tech@outlook.com',
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
            'footer.copy': '© 2024 和野贸易（广州）有限公司 HeYe Trading (Guangzhou) Co., Ltd. All Rights Reserved. | 粤ICP备XXXXXXXX号',

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

            // 产品总览页
            'products.title': '碳纤维制品',

            // ODM页
            'odm.title': '产品开发ODM',
            'odm.subtitle': '专业的复合材料选型、结构设计、工艺优化及批量生产一体化服务',
            'odm.section1': '产品开发流程',
            'odm.section2': '产品开发周期',
            'odm.section3': '工艺流程',
        },

        'ja-JP': {
            // 共通
            'site.title': '和野貿易（広州）有限公司 - 複合材料による製品軽量化ソリューションプロバイダー',
            'nav.home': 'ホーム',
            'nav.about': '会社概要',
            'nav.services': 'サービス',
            'nav.team': '顧客・パートナー',
            'nav.cases': '事例',
            'nav.contact': 'お問い合わせ',
            'lang.switch': '中文',

            // ホーム Hero
            'hero.subtitle': 'HEYE TRADING (GUANGZHOU) CO., LTD.',
            'hero.title': '複合材料による製品<span class="highlight">軽量化</span>ソリューションプロバイダー',
            'hero.desc': '炭素繊維、ガラス繊維などの先進複合材料の応用に特化し、<br>自動車、航空宇宙、交通軌道、医療機器などの業界に軽量化トータルソリューションを提供',
            'hero.btn1': 'サービスを見る',
            'hero.btn2': 'お問い合わせ',

            // 会社概要
            'about.tag': 'ABOUT US',
            'about.title': '和野貿易について',
            'about.desc': '高品質・高コストパフォーマンスで、お客様から信頼される企業を目指して',
            'about.h3': '軽量化が価値を創造し、革新が業界を変革する',
            'about.p1': '和野貿易（広州）有限公司は2022年4月よりCFRP/GFRP製品事業を正式に開始し、2025年1月に会社を設立しました。当社は主にオートクレーブ成形、プレス成形などの成熟した炭素繊維成形技術を活用し、軽量化ソリューションに基づくドライカーボン製品をお客様に提供しています。',
            'about.p2': '「高品質・高コストパフォーマンス」を長期戦略方針とし、優れた品質と洗練されたデザインで、多くのお客様から高い評価をいただいています。より速く、より効率的に、お客様のあらゆるご要望に100％お応えすることが、当社の使命であり存在価値です。明るい未来に向けて、精進を続け、お客様から信頼される企業を目指してまいります。',
            'about.industry1': 'ドローン',
            'about.industry2': 'モータースポーツ',
            'about.industry3': '高速鉄道',
            'about.industry4': '医療機器',

            // サービス
            'services.tag': 'OUR SERVICES',
            'services.title': '製品・サービス',
            'services.desc': '専門的な複合材料軽量化製品とソリューション',
            'services.card1.title': 'CFRP製品-自動車外装部品',
            'services.card1.desc': '炭素繊維板材、パイプ、異形材などのカスタマイズ製品を提供し、自動車部品、ドローン構造部品などの分野で広く使用されています。',
            'services.card2.title': 'CFRP製品-自動車内装部品',
            'services.card2.desc': '炭素繊維自動車内装部品の軽量化ソリューション。センターパネル、ドアトリム、ステアリングホイール、パドルシフトなどのカスタマイズ製品を含みます。',
            'services.card3.title': '製品開発ODM',
            'services.card3.desc': '複合材料の選定、構造設計、工程最適化、量産までの一貫ODMサービスを提供し、共同研究開発プロジェクトもサポートします。',

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
            'contact.email.val': 'wonster_tech@outlook.com',
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
            'footer.copy': '© 2024 和野貿易（広州）有限公司 HeYe Trading (Guangzhou) Co., Ltd. All Rights Reserved. | 粤ICP备XXXXXXXX号',

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

            // 製品概要ページ
            'products.title': 'CFRP製品',

            // ODMページ
            'odm.title': '製品開発ODM',
            'odm.subtitle': '複合材料の選定、構造設計、工程最適化、量産までの一貫サービス',
            'odm.section1': '製品開発フロー',
            'odm.section2': '製品開発サイクル',
            'odm.section3': '製造工程',
        }
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
        // Update lang switch button text
        const btn = document.getElementById('langSwitch');
        if (btn) {
            btn.textContent = this.t('lang.switch');
        }

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
        // Create language switch button
        const style = document.createElement('style');
        style.textContent = `
            .lang-switch {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                background: rgba(255,255,255,0.15);
                color: #fff;
                border: 1px solid rgba(255,255,255,0.3);
                border-radius: 20px;
                padding: 6px 16px;
                font-size: 13px;
                cursor: pointer;
                transition: all 0.3s;
                margin-left: 20px;
                font-family: inherit;
                white-space: nowrap;
            }
            .lang-switch:hover {
                background: rgba(255,255,255,0.25);
            }
            .header.scrolled .lang-switch {
                background: var(--primary-light);
                color: var(--primary);
                border-color: var(--primary-light);
            }
            .header.scrolled .lang-switch:hover {
                background: var(--primary);
                color: #fff;
            }
            @media (max-width: 768px) {
                .lang-switch {
                    position: fixed;
                    top: 12px;
                    right: 70px;
                    z-index: 1001;
                    font-size: 12px;
                    padding: 4px 12px;
                    background: var(--primary);
                    color: #fff;
                    border-color: var(--primary);
                }
            }
        `;
        document.head.appendChild(style);

        // Add button to all headers
        document.querySelectorAll('header .nav-list').forEach(navList => {
            const li = document.createElement('li');
            const btn = document.createElement('button');
            btn.id = 'langSwitch';
            btn.className = 'lang-switch';
            btn.textContent = this.t('lang.switch');
            btn.onclick = () => {
                const newLang = this.current === 'zh-CN' ? 'ja-JP' : 'zh-CN';
                this.setLang(newLang);
            };
            li.appendChild(btn);
            navList.appendChild(li);
        });

        // Update page with current language
        this.updatePage();
    }
};

document.addEventListener('DOMContentLoaded', () => {
    I18N.init();
});
