export type LanguageCode = 'ru' | 'en' | 'es' | 'it' | 'zh' | 'kk' | 'uz' | 'hy';

export interface LanguageOption {
  code: LanguageCode;
  label: string;
  flag: string;
  nativeName: string;
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  { code: 'ru', label: 'Русский', flag: '🇷🇺', nativeName: 'Русский' },
  { code: 'en', label: 'English', flag: '🇬🇧', nativeName: 'English' },
  { code: 'es', label: 'Español', flag: '🇪🇸', nativeName: 'Español' },
  { code: 'it', label: 'Italiano', flag: '🇮🇹', nativeName: 'Italiano' },
  { code: 'zh', label: '中文', flag: '🇨🇳', nativeName: '简体中文' },
  { code: 'kk', label: 'Қазақша', flag: '🇰🇿', nativeName: 'Қазақша' },
  { code: 'uz', label: "O'zbekcha", flag: '🇺🇿', nativeName: "O'zbekcha" },
  { code: 'hy', label: 'Հայերեն', flag: '🇦🇲', nativeName: 'Հայերեն' }
];

export interface TranslationStrings {
  // Nav
  nav_projects: string;
  nav_services: string;
  nav_process: string;
  nav_resources: string;
  nav_contact: string;
  nav_order: string;
  nav_admin_title: string;

  // Hero
  hero_badge: string;
  hero_title: string;
  hero_subtitle: string;
  hero_pipeline_title: string;
  hero_step_idea: string;
  hero_step_proto: string;
  hero_step_product: string;
  hero_step_handover: string;
  btn_view_projects: string;
  btn_discuss_project: string;
  btn_telegram_support: string;
  hero_value_1: string;
  hero_value_2: string;
  hero_value_3: string;
  hero_hologram_core: string;
  hero_hologram_core_desc: string;
  hero_hologram_prod: string;
  hero_hologram_prod_desc: string;
  hero_visual_caption: string;

  // Projects
  projects_badge: string;
  projects_header: string;
  projects_subheader: string;
  cat_all: string;
  cat_ai: string;
  cat_web: string;
  cat_telegram: string;
  cat_automation: string;
  flagship_tag: string;
  btn_view_demo: string;
  btn_details: string;
  btn_order_similar: string;
  demo_by_request: string;
  demo_safe_badge: string;
  key_functions_label: string;

  // Project Modal
  modal_safe_title: string;
  modal_safe_desc: string;
  modal_objective: string;
  modal_audience: string;
  modal_problem: string;
  modal_value: string;
  modal_approach: string;
  modal_tech_stack: string;
  modal_close: string;

  // Services
  services_badge: string;
  services_header: string;
  services_subheader: string;
  btn_order_service: string;
  filter_all: string;
  filter_ai: string;
  filter_web: string;
  filter_telegram: string;
  filter_automation: string;

  // Process / How it works
  process_badge: string;
  process_header: string;
  process_subheader: string;
  step1_title: string;
  step1_subtitle: string;
  step1_desc: string;
  step2_title: string;
  step2_subtitle: string;
  step2_desc: string;
  step3_title: string;
  step3_subtitle: string;
  step3_desc: string;
  step4_title: string;
  step4_subtitle: string;
  step4_desc: string;

  // Handover / Guarantees
  handover_badge: string;
  handover_header: string;
  handover_subheader: string;
  handover_item1_title: string;
  handover_item1_desc: string;
  handover_item2_title: string;
  handover_item2_desc: string;
  handover_item3_title: string;
  handover_item3_desc: string;
  handover_item4_title: string;
  handover_item4_desc: string;
  handover_item5_title: string;
  handover_item5_desc: string;
  handover_item6_title: string;
  handover_item6_desc: string;
  handover_note: string;
  btn_discuss_idea: string;

  // Security & Data Ownership
  security_badge: string;
  security_header: string;
  security_desc: string;
  security_bullet1: string;
  security_bullet2: string;
  security_bullet3: string;

  // Resources
  resources_badge: string;
  resources_header: string;
  resources_subheader: string;
  btn_open_resource: string;
  btn_qr_code: string;

  // Order / Contact
  contact_badge: string;
  contact_header: string;
  contact_subheader: string;
  contact_bot_title: string;
  contact_taplink_title: string;
  privacy_guarantee_title: string;
  privacy_guarantee_desc: string;
  form_title: string;
  label_name: string;
  label_company: string;
  label_contact_method: string;
  label_contact: string;
  label_project_type: string;
  label_budget: string;
  label_desc: string;
  label_features: string;
  label_comment: string;
  label_agree_terms: string;
  and_text: string;
  btn_submit: string;
  btn_submitting: string;
  form_success: string;
  val_err_name: string;
  val_err_contact: string;
  val_err_desc: string;
  val_err_terms: string;

  // QR Modal
  qr_modal_subtitle: string;
  btn_copy_link: string;
  btn_copied: string;
  btn_go_to_link: string;

  // Footer
  footer_tagline: string;
  footer_nav: string;
  footer_legal: string;
  footer_control: string;
  footer_admin_desc: string;
  footer_btn_admin: string;
  footer_rights: string;
  footer_dev_by: string;
}

export const translations: Record<LanguageCode, TranslationStrings> = {
  ru: {
    nav_projects: 'Проекты',
    nav_services: 'Услуги',
    nav_process: 'Как я работаю',
    nav_resources: 'Ресурсы',
    nav_contact: 'Контакты',
    nav_order: 'Обсудить проект',
    nav_admin_title: 'Панель управления MR studio',

    hero_badge: 'Независимый разработчик ИИ и Web • MR studio',
    hero_title: 'Воплощаю идеи в работающие цифровые продукты с помощью AI',
    hero_subtitle: 'Создаю сайты, веб-приложения и цифровые инструменты под конкретные задачи бизнеса. От концепции до запуска и передачи всех прав.',
    hero_pipeline_title: 'Цикл реализации:',
    hero_step_idea: 'Идея',
    hero_step_proto: 'AI-прототип',
    hero_step_product: 'Работающий продукт',
    hero_step_handover: 'Передача владельцу',
    btn_view_projects: 'Посмотреть проекты',
    btn_discuss_project: 'Обсудить свой проект',
    btn_telegram_support: 'Telegram Support Bot',
    hero_value_1: 'Работающий продукт, а не просто код',
    hero_value_2: '100% владение и исходники клиенту',
    hero_value_3: 'Без скрытой абонентской привязки',
    hero_hologram_core: 'AI Studio Core',
    hero_hologram_core_desc: 'Быстрое прототипирование',
    hero_hologram_prod: 'Production Ready',
    hero_hologram_prod_desc: '100% Владение кодом',
    hero_visual_caption: 'Визуальная концепция: Пространство синтеза бизнес-идей в готовые цифровые системы',

    projects_badge: 'ПОРТФОЛИО РАЗРАБОТЧИКА',
    projects_header: 'Мои проекты',
    projects_subheader: 'Реальные цифровые продукты, разработанные под конкретные задачи. От визуальных AI-платформ до высоконагруженных веб-сервисов и ботов.',
    cat_all: 'Все проекты',
    cat_ai: 'AI & SaaS',
    cat_web: 'Веб-сервисы',
    cat_telegram: 'Telegram Mini Apps',
    cat_automation: 'Автоматизация & CRM',
    flagship_tag: '★ Флагманский проект',
    btn_view_demo: 'Посмотреть демо',
    btn_details: 'Подробнее',
    btn_order_similar: 'Заказать похожий',
    demo_by_request: 'Демо по запросу',
    demo_safe_badge: 'Безопасная демонстрационная среда без риска для приватных данных',
    key_functions_label: 'Ключевой функционал:',

    modal_safe_title: 'Безопасный демонстрационный контур',
    modal_safe_desc: 'Демонстрационная версия. Данные и изображения используются только для демонстрации возможностей продукта. Приватные данные клиентов, административные пароли и закрытые базы данных защищены и не экспонируются.',
    modal_objective: 'Цель проекта',
    modal_audience: 'Целевая аудитория',
    modal_problem: 'Решаемая проблема',
    modal_value: 'Ценность для бизнеса',
    modal_approach: 'Подход к разработке',
    modal_tech_stack: 'Стек технологий',
    modal_close: 'Закрыть',

    services_badge: 'КОМПЕТЕНЦИИ & РЕШЕНИЯ',
    services_header: 'Услуги разработки',
    services_subheader: 'Создаю завершенные цифровые инструменты, решающие прикладные задачи бизнеса. Без затянутых сроков, на чистом стеке и с полной передачей прав.',
    btn_order_service: 'Заказать',
    filter_all: 'Все направления',
    filter_ai: 'AI & Нейросети',
    filter_web: 'Веб-приложения & Сайты',
    filter_telegram: 'Telegram & Боты',
    filter_automation: 'Автоматизация & Дашборды',

    process_badge: 'ПРОЗРАЧНЫЙ ПРОЦЕСС',
    process_header: 'Как я работаю: от идеи до запуска',
    process_subheader: 'Цель разработки — не просто красивая демонстрация, а полностью функционирующий продукт, которым вы сможете управлять автономно и развивать свой бизнес.',
    step1_title: 'Обсуждаем идею и задачу',
    step1_subtitle: 'Анализ потребностей и целей бизнеса',
    step1_desc: 'Вы делитесь задачей, идеей или существующим процессом. Мы определяем ключевую ценность продукта, пользователей и технические рамки без лишней бюрократии.',
    step2_title: 'Создаём работающий прототип',
    step2_subtitle: 'Быстрый запуск в AI Studio',
    step2_desc: 'С помощью современного AI-assisted стека разворачиваем интерактивную версию приложения за считанные дни. Вы видите реальный интерфейс и логику на раннем этапе.',
    step3_title: 'Дорабатываем и тестируем',
    step3_subtitle: 'Шлифовка логики, деталей и безопасности',
    step3_desc: 'Тестируем сценарии на реальных устройствах, полируем эргономику интерфейса, настраиваем интеграции, валидацию и защиту от сбоев.',
    step4_title: 'Передаём готовый цифровой продукт',
    step4_subtitle: 'Полная независимость владельца',
    step4_desc: 'Вы получаете опубликованное приложение, администраторский доступ, исходники, ключи, документацию и видеоинструкции. Вы полностью владеете продуктом.',

    handover_badge: 'ГАРАНТИЯ ПЕРЕДАЧИ ВЛАДЕЛЬЦУ',
    handover_header: 'Что вы получаете при передаче готового проекта',
    handover_subheader: 'Вы становитесь полноправным владельцем продукта. Никакой принудительной зависимости от разработчика: вы получаете ключи, исходники и понятные правила эксплуатации.',
    handover_item1_title: 'Опубликованное приложение',
    handover_item1_desc: 'Развернуто на надежном хостинге с SSL-сертификатом и готово к приему пользователей.',
    handover_item2_title: 'Администраторский доступ',
    handover_item2_desc: 'Вы получаете персональные доступы к панели управления, базам данных и сервисам.',
    handover_item3_title: 'Исходный код и репозиторий',
    handover_item3_desc: 'Полный архив исходного кода без скрытых закладок и привязки к разработчику.',
    handover_item4_title: 'Понятные инструкции',
    handover_item4_desc: 'Пошаговые руководства по управлению контентом, модерации заявок и базовому обслуживанию.',
    handover_item5_title: 'Резервные копии и безопасность',
    handover_item5_desc: 'Рекомендации по резервному копированию данных и защите учетных записей.',
    handover_item6_title: 'Опциональное сопровождение',
    handover_item6_desc: 'Возможность заказать дополнительную техническую поддержку или масштабирование как отдельную услугу.',
    handover_note: '* Рутинное наполнение сайта вы производите самостоятельно через удобную админку. Сопровождение и масштабирование новых фичей всегда доступны по отдельному запросу.',
    btn_discuss_idea: 'Обсудить реализацию вашей идеи',

    security_badge: 'БЕЗОПАСНОСТЬ И ВЛАДЕНИЕ ДАННЫМИ',
    security_header: 'Изолированное окружение и суверенитет клиента',
    security_desc: 'Каждое разработанное клиентское приложение работает в собственном изолированном окружении с персональным административным доступом. Максим Ракитянов придерживается строгого стандарта: никаких скрытых бэкдоров, никаких рисков общих баз данных и абсолютный суверенитет клиентских данных.',
    security_bullet1: 'Полное отсутствие скрытых доступов после передачи проекта',
    security_bullet2: 'Изолированные базы данных без совместного использования с другими клиентами',
    security_bullet3: 'Соблюдение конфиденциальности коммерческой информации и алгоритмов',

    resources_badge: 'ОФИЦИАЛЬНЫЕ КАНАЛЫ',
    resources_header: 'Мои ресурсы и точки контакта',
    resources_subheader: 'Официальные сервисные площадки студии. Здесь вы можете мгновенно связаться с поддержкой, ознакомиться с прайсом на Taplink или безопасно провести оплату.',
    btn_open_resource: 'Открыть ресурс',
    btn_qr_code: 'QR-код',

    contact_badge: 'СВЯЗАТЬСЯ СО МНОЙ',
    contact_header: 'Обсудим ваш проект',
    contact_subheader: 'Расскажите о вашей задаче. Мы разберем концепцию, определим технический стек и в короткие сроки создадим работающий MVP в AI Studio.',
    contact_bot_title: 'Telegram Support Bot',
    contact_taplink_title: 'Оплата и Тарифы (Taplink)',
    privacy_guarantee_title: 'Конфиденциальность и открытость',
    privacy_guarantee_desc: 'Ваша идея и контактные данные защищены. Информация не передается третьим лицам. После разработки вы получаете 100% права на готовый продукт и исходный код.',
    form_title: 'Заявка на разработку цифрового продукта',
    label_name: 'Ваше имя',
    label_company: 'Компания / Название проекта',
    label_contact_method: 'Удобный способ связи',
    label_contact: 'Контактный юзернейм / номер / email',
    label_project_type: 'Тип проекта',
    label_budget: 'Ориентировочный бюджет',
    label_desc: 'Описание идеи или задачи',
    label_features: 'Необходимые функции (необязательно)',
    label_comment: 'Дополнительный комментарий',
    label_agree_terms: 'Я согласен с',
    and_text: 'и',
    btn_submit: 'Отправить заявку на разработку',
    btn_submitting: 'Отправка данных...',
    form_success: 'Заявка успешно отправлена! Максим свяжется с вами в ближайшее время.',
    val_err_name: 'Пожалуйста, укажите ваше имя',
    val_err_contact: 'Пожалуйста, укажите контакт для связи (Telegram, телефон или почту)',
    val_err_desc: 'Пожалуйста, кратко опишите вашу идею или задачу',
    val_err_terms: 'Для отправки необходимо согласие с условиями обработки данных',

    qr_modal_subtitle: 'Наведите камеру смартфона, чтобы моментально открыть ссылку',
    btn_copy_link: 'Копировать',
    btn_copied: 'Скопировано',
    btn_go_to_link: 'Перейти',

    footer_tagline: 'Портфолио и цифровая студия Максима Ракитянова. Превращаю бизнес-идеи в готовые веб-сервисы, AI-приложения и Telegram Mini Apps.',
    footer_nav: 'Навигация',
    footer_legal: 'Документы',
    footer_control: 'Управление',
    footer_admin_desc: 'Закрытая административная панель для владельца студии.',
    footer_btn_admin: 'Панель управления',
    footer_rights: 'Все права защищены.',
    footer_dev_by: 'Разработка: Максим Ракитянов'
  },

  en: {
    nav_projects: 'Projects',
    nav_services: 'Services',
    nav_process: 'How It Works',
    nav_resources: 'Resources',
    nav_contact: 'Contact',
    nav_order: 'Order App',
    nav_admin_title: 'MR studio Control Panel',

    hero_badge: 'Independent AI & Web Developer • MR studio',
    hero_title: 'Custom AI Applications & Intelligent Websites',
    hero_subtitle: 'Empowering businesses, fitness professionals, and enterprises with custom-built, high-performance digital solutions and AI integration.',
    hero_pipeline_title: 'Delivery Pipeline:',
    hero_step_idea: 'Idea',
    hero_step_proto: 'AI Prototype',
    hero_step_product: 'Working Product',
    hero_step_handover: 'Full Handover',
    btn_view_projects: 'View Projects',
    btn_discuss_project: 'Order Your Application',
    btn_telegram_support: 'Telegram Support Bot',
    hero_value_1: 'Production-ready product, not just code',
    hero_value_2: '100% code ownership & client handover',
    hero_value_3: 'No vendor lock-in or recurring fees',
    hero_hologram_core: 'AI Studio Core',
    hero_hologram_core_desc: 'Rapid Prototyping',
    hero_hologram_prod: 'Production Ready',
    hero_hologram_prod_desc: '100% Code Ownership',
    hero_visual_caption: 'Visual Concept: Workspace transforming business concepts into functional digital systems',

    projects_badge: 'FEATURED PORTFOLIO',
    projects_header: 'Featured Projects',
    projects_subheader: 'Explore production-ready applications, AI platforms, web services, and Telegram Mini Apps built for real-world impact.',
    cat_all: 'All Projects',
    cat_ai: 'AI & SaaS',
    cat_web: 'Web Services',
    cat_telegram: 'Telegram Mini Apps',
    cat_automation: 'Automation & CRM',
    flagship_tag: '★ Flagship Project',
    btn_view_demo: 'View Demo',
    btn_details: 'Details',
    btn_order_similar: 'Order Similar',
    demo_by_request: 'Demo on Request',
    demo_safe_badge: 'Safe demo environment protecting private client data',
    key_functions_label: 'Key Capabilities:',

    modal_safe_title: 'Safe Demonstration Environment',
    modal_safe_desc: 'Demonstration version. Fictional data and assets are used solely for interactive demo purposes. Client private credentials, passwords, and databases remain strictly isolated.',
    modal_objective: 'Project Objective',
    modal_audience: 'Target Audience',
    modal_problem: 'Problem Solved',
    modal_value: 'Business Value',
    modal_approach: 'Development Approach',
    modal_tech_stack: 'Technology Stack',
    modal_close: 'Close',

    services_badge: 'CAPABILITIES & SOLUTIONS',
    services_header: 'Professional Services',
    services_subheader: 'Tailored digital engineering to scale your operations and engage clients. Fast execution, modern stack, and 100% handover.',
    btn_order_service: 'Order Service',
    filter_all: 'All Disciplines',
    filter_ai: 'AI & Neural Nets',
    filter_web: 'Web Apps & Sites',
    filter_telegram: 'Telegram & Bots',
    filter_automation: 'Automation & Dashboards',

    process_badge: 'TRANSPARENT WORKFLOW',
    process_header: 'How It Works: Concept to Deployment',
    process_subheader: 'The goal is a dependable, fully functional digital asset that you operate independently without ongoing dependencies.',
    step1_title: 'Consultation & Scope',
    step1_subtitle: 'Analyzing business needs and core metrics',
    step1_desc: 'We discuss your business requirements, target audience, and required AI integrations without unnecessary bureaucracy.',
    step2_title: 'Architecture & Design',
    step2_subtitle: 'Rapid deployment in AI Studio',
    step2_desc: 'Designing a modular, secure, high-performance architecture tailored to your brand. Working prototype ready in days.',
    step3_title: 'Development & Testing',
    step3_subtitle: 'Rigorous testing and refinement',
    step3_desc: 'Building the application with thorough testing across mobile and desktop devices and enterprise security parameters.',
    step4_title: 'Deployment & Ownership',
    step4_subtitle: 'Full client independence',
    step4_desc: 'Full handover with isolated client environment setup, admin access, source repositories, keys, and complete data ownership.',

    handover_badge: 'OWNERSHIP GUARANTEE',
    handover_header: 'What You Receive at Project Handover',
    handover_subheader: 'You become the sole owner of the product. No forced developer lock-in: you receive source code, keys, and operational guides.',
    handover_item1_title: 'Live Published Application',
    handover_item1_desc: 'Deployed on high-reliability hosting with SSL certificate, ready for users.',
    handover_item2_title: 'Dedicated Admin Access',
    handover_item2_desc: 'Full control over administrative dashboard, data tables, and integrations.',
    handover_item3_title: 'Full Source Code & Git Repo',
    handover_item3_desc: 'Clean, modular repository with zero backdoors or hidden proprietary locks.',
    handover_item4_title: 'User & Admin Manuals',
    handover_item4_desc: 'Step-by-step guides for content moderation, order management, and operations.',
    handover_item5_title: 'Backups & Security Specs',
    handover_item5_desc: 'Best practices for routine backups, credential rotation, and data safety.',
    handover_item6_title: 'Optional Maintenance',
    handover_item6_desc: 'Future feature expansions and dedicated SLA support available on demand.',
    handover_note: '* Daily content management is performed directly via your admin dashboard. Ongoing support for new features is always available.',
    btn_discuss_idea: 'Discuss Your Project Idea',

    security_badge: 'SECURITY & DATA SOVEREIGNTY',
    security_header: 'Security & Client Data Ownership',
    security_desc: 'Every sold client application runs in its own isolated environment with dedicated administrative access. Maxim Rakitannov maintains a strict privacy standard: no hidden backdoors, no shared multi-tenant database risks, and absolute client data sovereignty.',
    security_bullet1: 'Zero developer backdoors or hidden administrative access after handover',
    security_bullet2: 'Isolated databases never co-mingled with third-party client records',
    security_bullet3: 'Full confidentiality of your intellectual property, algorithms, and leads',

    resources_badge: 'OFFICIAL TOUCHPOINTS',
    resources_header: 'My Resources & Contact Channels',
    resources_subheader: 'Official communication and payment hubs. Connect with the support bot, review services on Taplink, or initiate secure payments.',
    btn_open_resource: 'Open Resource',
    btn_qr_code: 'QR Code',

    contact_badge: 'ORDER YOUR APPLICATION',
    contact_header: 'Let’s Build Your Digital Product',
    contact_subheader: 'Submit your requirements or reach out directly. We will analyze the scope, select the optimal stack, and ship a functional product.',
    contact_bot_title: 'Telegram Support Bot',
    contact_taplink_title: 'Taplink Payments & Services',
    privacy_guarantee_title: 'Privacy & Ownership Standard',
    privacy_guarantee_desc: 'Your concept and contact information are strictly confidential. You receive full IP rights and clean source code upon completion.',
    form_title: 'Project Specification & Request Form',
    label_name: 'Your Name',
    label_company: 'Company / Project Name',
    label_contact_method: 'Preferred Contact Method',
    label_contact: 'Contact Handle / Phone / Email',
    label_project_type: 'Project Type',
    label_budget: 'Estimated Budget',
    label_desc: 'Project Description & Requirements',
    label_features: 'Required Features (optional)',
    label_comment: 'Additional Notes & Deadlines',
    label_agree_terms: 'I agree with the',
    and_text: 'and',
    btn_submit: 'Submit Project Order',
    btn_submitting: 'Submitting Request...',
    form_success: 'Order submitted successfully! Maxim will contact you shortly via Telegram or email.',
    val_err_name: 'Please enter your name',
    val_err_contact: 'Please provide a valid contact (Telegram handle, phone, or email)',
    val_err_desc: 'Please provide a brief description of your idea or requirements',
    val_err_terms: 'Please agree to the privacy policy to submit',

    qr_modal_subtitle: 'Scan with your smartphone camera to open the link instantly',
    btn_copy_link: 'Copy Link',
    btn_copied: 'Copied!',
    btn_go_to_link: 'Open Link',

    footer_tagline: 'Portfolio & Digital Studio of Maxim Rakitannov. Transforming business ideas into working web services, AI tools, and Telegram Mini Apps.',
    footer_nav: 'Navigation',
    footer_legal: 'Legal & Compliance',
    footer_control: 'Studio Control',
    footer_admin_desc: 'Restricted administrative dashboard for studio owner.',
    footer_btn_admin: 'Admin Panel',
    footer_rights: 'All rights reserved.',
    footer_dev_by: 'Engineering: Maxim Rakitannov'
  },

  es: {
    nav_projects: 'Proyectos',
    nav_services: 'Servicios',
    nav_process: 'Cómo Trabajo',
    nav_resources: 'Recursos',
    nav_contact: 'Contacto',
    nav_order: 'Pedir App',
    nav_admin_title: 'Panel de Control MR studio',

    hero_badge: 'Desarrollador Independiente de IA y Web • MR studio',
    hero_title: 'Transformo ideas en productos digitales funcionales con IA',
    hero_subtitle: 'Desarrollo sitios web, aplicaciones web y herramientas digitales adaptadas a las necesidades específicas de su negocio.',
    hero_pipeline_title: 'Ciclo de Entrega:',
    hero_step_idea: 'Idea',
    hero_step_proto: 'Prototipo IA',
    hero_step_product: 'Producto Funcional',
    hero_step_handover: 'Entrega Total',
    btn_view_projects: 'Ver Proyectos',
    btn_discuss_project: 'Pedir Presupuesto',
    btn_telegram_support: 'Bot de Soporte Telegram',
    hero_value_1: 'Producto real listo, no solo código',
    hero_value_2: '100% de propiedad del código al cliente',
    hero_value_3: 'Sin tarifas mensuales forzadas',
    hero_hologram_core: 'AI Studio Core',
    hero_hologram_core_desc: 'Prototipado Rápido',
    hero_hologram_prod: 'Production Ready',
    hero_hologram_prod_desc: '100% Código Propio',
    hero_visual_caption: 'Concepto visual: Espacio de síntesis de ideas de negocio en sistemas digitales listos',

    projects_badge: 'PORTAFOLIO DESTACADO',
    projects_header: 'Proyectos Destacados',
    projects_subheader: 'Explore aplicaciones preparadas para producción y demostraciones interactivas desarrolladas para impacto real.',
    cat_all: 'Todos los Proyectos',
    cat_ai: 'IA y SaaS',
    cat_web: 'Servicios Web',
    cat_telegram: 'Telegram Mini Apps',
    cat_automation: 'Automatización y CRM',
    flagship_tag: '★ Proyecto Insignia',
    btn_view_demo: 'Ver Demostración',
    btn_details: 'Detalles',
    btn_order_similar: 'Pedir Similar',
    demo_by_request: 'Demo a Petición',
    demo_safe_badge: 'Entorno de prueba seguro que protege datos confidenciales',
    key_functions_label: 'Funciones Clave:',

    modal_safe_title: 'Entorno de Demostración Seguro',
    modal_safe_desc: 'Versión de demostración. Los datos e imágenes se utilizan únicamente para ilustrar capacidades. Las contraseñas y bases de datos privadas permanecen estrictamente aisladas.',
    modal_objective: 'Objetivo del Proyecto',
    modal_audience: 'Público Objetivo',
    modal_problem: 'Problema Resuelto',
    modal_value: 'Valor de Negocio',
    modal_approach: 'Enfoque de Desarrollo',
    modal_tech_stack: 'Tecnologías',
    modal_close: 'Cerrar',

    services_badge: 'COMPETENCIAS Y SOLUCIONES',
    services_header: 'Servicios Profesionales',
    services_subheader: 'Ingeniería digital a medida para escalar sus operaciones y cautivar clientes. Entrega rápida y propiedad total.',
    btn_order_service: 'Contratar',
    filter_all: 'Todas las Áreas',
    filter_ai: 'IA y Redes Neuronales',
    filter_web: 'Apps Web y Sitios',
    filter_telegram: 'Telegram y Bots',
    filter_automation: 'Automatización y Paneles',

    process_badge: 'PROCESO TRANSPARENTE',
    process_header: 'Cómo Trabajo: De la Idea al Despliegue',
    process_subheader: 'El objetivo es entregar una herramienta digital funcional que usted controle de forma autónoma.',
    step1_title: 'Consulta y Alcance',
    step1_subtitle: 'Análisis de requerimientos de negocio',
    step1_desc: 'Analizamos sus objetivos, público destinatario e integraciones de IA necesarias sin burocracia innecesaria.',
    step2_title: 'Arquitectura y Diseño',
    step2_subtitle: 'Prototipo ágil en AI Studio',
    step2_desc: 'Diseñamos una arquitectura modular y segura adaptada a su marca. Prototipo funcional en cuestión de días.',
    step3_title: 'Desarrollo y Pruebas',
    step3_subtitle: 'Pruebas rigurosas en dispositivos',
    step3_desc: 'Construcción con pruebas exhaustivas en móviles y ordenadores con parámetros de alta seguridad.',
    step4_title: 'Despliegue y Entrega',
    step4_subtitle: 'Independencia total del cliente',
    step4_desc: 'Entrega completa con entorno aislado, accesos de administrador, repositorios de código y soberanía de datos.',

    handover_badge: 'GARANTÍA DE PROPIEDAD',
    handover_header: 'Qué Recibe al Finalizar el Proyecto',
    handover_subheader: 'Usted es el único propietario. Sin ataduras con el desarrollador: recibe código fuente, claves e instrucciones claras.',
    handover_item1_title: 'Aplicación Publicada y Activa',
    handover_item1_desc: 'Desplegada en infraestructura segura con certificado SSL y lista para usuarios.',
    handover_item2_title: 'Acceso de Administrador',
    handover_item2_desc: 'Panel de control privado para gestionar datos, contenidos y solicitudes.',
    handover_item3_title: 'Código Fuente y Repositorio Git',
    handover_item3_desc: 'Archivo limpio del código sin accesos ocultos ni dependencias forzadas.',
    handover_item4_title: 'Guías de Operación Claras',
    handover_item4_desc: 'Instrucciones paso a paso para moderar contenidos y operar la plataforma.',
    handover_item5_title: 'Copias de Seguridad y Seguridad',
    handover_item5_desc: 'Recomendaciones prácticas para respaldar información y proteger credenciales.',
    handover_item6_title: 'Mantenimiento Opcional',
    handover_item6_desc: 'Ampliación de funcionalidades y soporte técnico disponibles según necesidad.',
    handover_note: '* La gestión cotidiana de contenido la realiza usted desde su panel. Soporte para nuevas funciones disponible en cualquier momento.',
    btn_discuss_idea: 'Discutir su Idea de Proyecto',

    security_badge: 'SEGURIDAD Y SOBERANÍA DE DATOS',
    security_header: 'Seguridad y Propiedad de Datos del Cliente',
    security_desc: 'Cada aplicación de cliente se ejecuta en su propio entorno aislado con acceso administrativo exclusivo. Maxim Rakitannov mantiene un estándar estricto: sin puertas traseras ocultas, sin riesgos de bases de datos compartidas y con absoluta soberanía de datos para el cliente.',
    security_bullet1: 'Cero puertas traseras o accesos encubiertos tras la entrega',
    security_bullet2: 'Bases de datos aisladas nunca compartidas con otros clientes',
    security_bullet3: 'Confidencialidad absoluta de sus datos y lógica de negocio',

    resources_badge: 'CANALES OFICIALES',
    resources_header: 'Mis Recursos y Canales de Contacto',
    resources_subheader: 'Espacios oficiales de la agencia. Contacte con el bot de soporte, consulte tarifas en Taplink o realice pagos seguros.',
    btn_open_resource: 'Abrir Recurso',
    btn_qr_code: 'Código QR',

    contact_badge: 'PEDIR SU APLICACIÓN',
    contact_header: 'Hablemos de su Proyecto',
    contact_subheader: 'Cuénteme su reto. Evaluaremos la viabilidad técnica y construiremos un producto digital funcional con IA.',
    contact_bot_title: 'Bot de Soporte Telegram',
    contact_taplink_title: 'Pagos y Servicios en Taplink',
    privacy_guarantee_title: 'Privacidad y Confidencialidad',
    privacy_guarantee_desc: 'Su idea y datos de contacto están protegidos. Tras la entrega, usted posee el 100% de la propiedad intelectual.',
    form_title: 'Formulario de Solicitud de Proyecto',
    label_name: 'Su Nombre',
    label_company: 'Empresa o Nombre del Proyecto',
    label_contact_method: 'Canal de Contacto Preferido',
    label_contact: 'Usuario Telegram / Teléfono / Correo',
    label_project_type: 'Tipo de Proyecto',
    label_budget: 'Presupuesto Estimado',
    label_desc: 'Descripción de la Idea y Objetivos',
    label_features: 'Funciones Requeridas (opcional)',
    label_comment: 'Comentarios Adicionales',
    label_agree_terms: 'Acepto la',
    and_text: 'y el',
    btn_submit: 'Enviar Solicitud de Proyecto',
    btn_submitting: 'Enviando Datos...',
    form_success: '¡Solicitud enviada con éxito! Maxim se pondrá en contacto con usted a la brevedad.',
    val_err_name: 'Por favor, indique su nombre',
    val_err_contact: 'Por favor, proporcione un canal de contacto válido',
    val_err_desc: 'Por favor, describa brevemente su idea o requerimiento',
    val_err_terms: 'Debe aceptar la política de privacidad para enviar',

    qr_modal_subtitle: 'Escanee con la cámara de su móvil para abrir el enlace inmediatamente',
    btn_copy_link: 'Copiar Enlace',
    btn_copied: '¡Copiado!',
    btn_go_to_link: 'Abrir Enlace',

    footer_tagline: 'Estudio y portafolio digital de Maxim Rakitannov. Convertimos ideas de negocio en aplicaciones web, servicios con IA y Telegram Mini Apps.',
    footer_nav: 'Navegación',
    footer_legal: 'Legal y Privacidad',
    footer_control: 'Control del Estudio',
    footer_admin_desc: 'Panel de administración reservado para el titular del estudio.',
    footer_btn_admin: 'Panel de Control',
    footer_rights: 'Todos los derechos reservados.',
    footer_dev_by: 'Desarrollado por: Maxim Rakitannov'
  },

  it: {
    nav_projects: 'Progetti',
    nav_services: 'Servizi',
    nav_process: 'Come Lavoro',
    nav_resources: 'Risorse',
    nav_contact: 'Contatto',
    nav_order: 'Ordina App',
    nav_admin_title: 'Pannello di Controllo MR studio',

    hero_badge: 'Sviluppatore Indipendente AI & Web • MR studio',
    hero_title: 'Trasformo idee in prodotti digitali funzionanti con l’AI',
    hero_subtitle: 'Creo siti web, applicazioni web e strumenti digitali su misura per specifici obiettivi aziendali. Dal concept al rilascio con pieno passaggio di proprietà.',
    hero_pipeline_title: 'Ciclo di Rilascio:',
    hero_step_idea: 'Idea',
    hero_step_proto: 'Prototipo AI',
    hero_step_product: 'Prodotto Funzionante',
    hero_step_handover: 'Consegna Completa',
    btn_view_projects: 'Vedi i Progetti',
    btn_discuss_project: 'Richiedi la Tua App',
    btn_telegram_support: 'Bot di Supporto Telegram',
    hero_value_1: 'Prodotto funzionante reale, non solo codice',
    hero_value_2: '100% proprietà del codice al cliente',
    hero_value_3: 'Nessun canone obbligatorio nascosto',
    hero_hologram_core: 'AI Studio Core',
    hero_hologram_core_desc: 'Prototipazione Rapida',
    hero_hologram_prod: 'Production Ready',
    hero_hologram_prod_desc: '100% Proprietà Codice',
    hero_visual_caption: 'Concetto visivo: Ambiente per trasformare idee di business in sistemi digitali pronti',

    projects_badge: 'PORTFOLIO PROGETTI',
    projects_header: 'Progetti in Evidenza',
    projects_subheader: 'Scopri applicazioni pronte per la produzione, piattaforme AI e Telegram Mini Apps create per generare valore reale.',
    cat_all: 'Tutti i Progetti',
    cat_ai: 'AI & SaaS',
    cat_web: 'Servizi Web',
    cat_telegram: 'Telegram Mini Apps',
    cat_automation: 'Automazione & CRM',
    flagship_tag: '★ Progetto Principale',
    btn_view_demo: 'Guarda la Demo',
    btn_details: 'Dettagli',
    btn_order_similar: 'Ordina Simile',
    demo_by_request: 'Demo su Richiesta',
    demo_safe_badge: 'Ambiente di prova sicuro che protegge dati riservati',
    key_functions_label: 'Funzionalità Chiave:',

    modal_safe_title: 'Ambiente Demo Protetto',
    modal_safe_desc: 'Versione dimostrativa. Dati e schermate sono usati unicamente a scopo illustrativo. Password amministrative e database privati rimangono totalmente isolati.',
    modal_objective: 'Obiettivo del Progetto',
    modal_audience: 'Target di Riferimento',
    modal_problem: 'Problema Risolto',
    modal_value: 'Valore per il Business',
    modal_approach: 'Metodologia di Sviluppo',
    modal_tech_stack: 'Stack Tecnologico',
    modal_close: 'Chiudi',

    services_badge: 'COMPETENZE E SOLUZIONI',
    services_header: 'Servizi Professionali',
    services_subheader: 'Ingegneria digitale su misura per scalare le attività e coinvolgere i clienti. Consegna rapida e piena sovranità.',
    btn_order_service: 'Ordina Servizio',
    filter_all: 'Tutte le Aree',
    filter_ai: 'AI & Reti Neurali',
    filter_web: 'Web App & Siti',
    filter_telegram: 'Telegram & Bot',
    filter_automation: 'Automazione & Dashboard',

    process_badge: 'PROCESSO TRASPARENTE',
    process_header: 'Come Lavoro: Dall’Idea al Lancio',
    process_subheader: 'L’obiettivo è fornirti uno strumento digitale operativo e autonomo da gestire nel tempo.',
    step1_title: 'Consulenza e Requisiti',
    step1_subtitle: 'Analisi dei bisogni aziendali',
    step1_desc: 'Definiamo insieme il valore centrale del prodotto, gli utenti e le integrazioni AI necessarie senza burocrazia.',
    step2_title: 'Architettura e Prototipo',
    step2_subtitle: 'Sviluppo rapido con AI Studio',
    step2_desc: 'Progettiamo un’architettura modulare e sicura. Prototipo interattivo pronto in pochi giorni.',
    step3_title: 'Sviluppo e Collaudo',
    step3_subtitle: 'Test accurati su ogni dispositivo',
    step3_desc: 'Costruzione dell’applicazione con verifiche approfondite di sicurezza ed ergonomia mobile e desktop.',
    step4_title: 'Rilascio e Passaggio di Consegne',
    step4_subtitle: 'Autonomia completa per il cliente',
    step4_desc: 'Rilascio con ambiente isolato, accessi amministrativi, codice sorgente e piena proprietà dei dati.',

    handover_badge: 'GARANZIA DI PROPRIETÀ',
    handover_header: 'Cosa Ricevi alla Consegna del Progetto',
    handover_subheader: 'Diventi il titolare unico della soluzione. Nessun vincolo col fornitore: ricevi repository, chiavi e istruzioni operative.',
    handover_item1_title: 'Applicazione Pubblicata Online',
    handover_item1_desc: 'Ospitata su hosting affidabile con certificato SSL, pronta per gli utenti.',
    handover_item2_title: 'Accesso Amministratore Riservato',
    handover_item2_desc: 'Pieno controllo sul pannello di gestione dei contenuti e degli ordini.',
    handover_item3_title: 'Codice Sorgente e Repo Git',
    handover_item3_desc: 'Archivio completo e pulito senza backdoor o blocchi di terzi.',
    handover_item4_title: 'Istruzioni e Manuali Chiari',
    handover_item4_desc: 'Guide passo-passo per moderare contenuti e gestire le operazioni quotidiane.',
    handover_item5_title: 'Backup e Standard di Sicurezza',
    handover_item5_desc: 'Procedure consigliate per il salvataggio dei dati e la tutela delle credenziali.',
    handover_item6_title: 'Supporto Opzionale Continuativo',
    handover_item6_desc: 'Evoluzioni future e assistenza tecnica disponibili a richiesta.',
    handover_note: '* La gestione ordinaria dei contenuti viene eseguita direttamente dal tuo pannello. Nuove funzionalità attivabili su misura.',
    btn_discuss_idea: 'Discuti la Tua Idea di Progetto',

    security_badge: 'SICUREZZA E SOVRANITÀ DEI DATI',
    security_header: 'Sicurezza e Proprietà dei Dati del Cliente',
    security_desc: 'Ogni applicazione venduta è eseguita in un ambiente isolato con accesso amministrativo esclusivo. Maxim Rakitannov adotta uno standard rigoroso: nessuna backdoor occulta, nessun database condiviso e assoluta sovranità dei dati del cliente.',
    security_bullet1: 'Nessun accesso nascosto o secondario dopo il passaggio di consegne',
    security_bullet2: 'Database completamente isolati senza condivisione con terzi',
    security_bullet3: 'Riservatezza totale sulle informazioni commerciali e sugli algoritmi',

    resources_badge: 'CANALI UFFICIALI',
    resources_header: 'Risorse e Canali di Contatto',
    resources_subheader: 'I canali ufficiali dello studio. Contatta il bot di assistenza, verifica le tariffe su Taplink o effettua pagamenti protetti.',
    btn_open_resource: 'Apri Canale',
    btn_qr_code: 'Codice QR',

    contact_badge: 'ORDINA LA TUA APPLICAZIONE',
    contact_header: 'Realizziamo il Tuo Prodotto Digitale',
    contact_subheader: 'Spiegami la tua esigenza. Analizzeremo il progetto e svilupperemo un’applicazione moderna ed efficiente.',
    contact_bot_title: 'Telegram Support Bot',
    contact_taplink_title: 'Pagamenti e Tariffe su Taplink',
    privacy_guarantee_title: 'Riservatezza e Trasparenza',
    privacy_guarantee_desc: 'La tua idea e i recapiti inviati sono protetti. Alla consegna ricevi il 100% della proprietà intellettuale e del codice.',
    form_title: 'Modulo di Richiesta Progetto',
    label_name: 'Il Tuo Nome',
    label_company: 'Azienda o Nome del Progetto',
    label_contact_method: 'Metodo di Contatto Preferito',
    label_contact: 'Username Telegram / Telefono / Email',
    label_project_type: 'Tipologia di Progetto',
    label_budget: 'Budget Indicativo',
    label_desc: 'Descrizione dell’Idea o Esigenza',
    label_features: 'Funzionalità Richieste (facoltativo)',
    label_comment: 'Note Aggiuntive e Scadenze',
    label_agree_terms: 'Accetto la',
    and_text: 'e i',
    btn_submit: 'Invia Richiesta di Progetto',
    btn_submitting: 'Invio in corso...',
    form_success: 'Richiesta inviata con successo! Maxim ti contatterà al più presto via Telegram o email.',
    val_err_name: 'Inserisci il tuo nome',
    val_err_contact: 'Inserisci un recapito valido (Telegram, telefono o email)',
    val_err_desc: 'Descrivi brevemente la tua idea o richiesta',
    val_err_terms: 'È necessario accettare l’informativa privacy per inviare',

    qr_modal_subtitle: 'Inquadra con la fotocamera dello smartphone per aprire subito il link',
    btn_copy_link: 'Copia Link',
    btn_copied: 'Copiato!',
    btn_go_to_link: 'Apri Link',

    footer_tagline: 'Studio digitale e portfolio di Maxim Rakitannov. Trasformo idee in servizi web, strumenti AI e Telegram Mini Apps.',
    footer_nav: 'Navigazione',
    footer_legal: 'Informazioni Legali',
    footer_control: 'Controllo Studio',
    footer_admin_desc: 'Pannello di amministrazione riservato al titolare dello studio.',
    footer_btn_admin: 'Pannello di Controllo',
    footer_rights: 'Tutti i diritti riservati.',
    footer_dev_by: 'Sviluppo: Maxim Rakitannov'
  },

  zh: {
    nav_projects: '项目案例',
    nav_services: '服务项目',
    nav_process: '开发流程',
    nav_resources: '官方资源',
    nav_contact: '联系我们',
    nav_order: '订制开发',
    nav_admin_title: 'MR studio 管理面板',

    hero_badge: '独立人工智能与网络全栈开发者 • MR studio',
    hero_title: '借助 AI 力量，将商业构想转化为高效数字产品',
    hero_subtitle: '量身定制网站、云端应用与智能工具，覆盖商业运作、健身教练与各类行业，全套代码与数字资产完整交付。',
    hero_pipeline_title: '交付流程：',
    hero_step_idea: '构想',
    hero_step_proto: 'AI 交互原型',
    hero_step_product: '可用产品',
    hero_step_handover: '所有权交付',
    btn_view_projects: '查看项目案例',
    btn_discuss_project: '咨询并订制应用',
    btn_telegram_support: 'Telegram 客服机器人',
    hero_value_1: '真正可商用的完整成品，而非仅是代码',
    hero_value_2: '100% 源代码与完全知识产权归客户所有',
    hero_value_3: '无捆绑消费，无强制性后续订阅支出',
    hero_hologram_core: 'AI Studio Core',
    hero_hologram_core_desc: '极速原型设计',
    hero_hologram_prod: 'Production Ready',
    hero_hologram_prod_desc: '100% 代码归属',
    hero_visual_caption: '视觉概念：将业务构想在虚拟空间中快速凝练为成熟数字化系统的工程工坊',

    projects_badge: '代表作精选',
    projects_header: '精选项目展示',
    projects_subheader: '探索已投产的高性能应用、人工智能平台以及 Telegram Mini Apps 演示。',
    cat_all: '全部项目',
    cat_ai: 'AI 与 SaaS',
    cat_web: '网络应用',
    cat_telegram: 'Telegram 小程序',
    cat_automation: '自动化与 CRM',
    flagship_tag: '★ 旗舰代表作',
    btn_view_demo: '查看演示',
    btn_details: '详细方案',
    btn_order_similar: '定制同类方案',
    demo_by_request: '申请演示',
    demo_safe_badge: '安全演示沙盒，严格隔离客户私密数据',
    key_functions_label: '核心功能亮点：',

    modal_safe_title: '安全演示说明',
    modal_safe_desc: '演示版本中展示的数据与模拟资料仅用于功能演示。客户核心商业数据、数据库与管理密码均经过安全隔离，不作公开。',
    modal_objective: '项目目标',
    modal_audience: '受众群体',
    modal_problem: '解决的痛点',
    modal_value: '商业价值',
    modal_approach: '开发方式',
    modal_tech_stack: '技术栈组成',
    modal_close: '关闭窗口',

    services_badge: '核心技术能力与方案',
    services_header: '专业工程服务',
    services_subheader: '定制化软件工程赋能业务规模化发展。快速原型、纯净技术栈与完整权利交付。',
    btn_order_service: '定制咨询',
    filter_all: '全部分类',
    filter_ai: 'AI 与智能助理',
    filter_web: 'Web 应用与网站',
    filter_telegram: 'Telegram 与机器人',
    filter_automation: '企业流程自动化',

    process_badge: '规范透明的研发流程',
    process_header: '合作流程：从概念到上线',
    process_subheader: '目标是为您打造稳定、可持续自主运营的数字资产，无需时刻受制于外部团队。',
    step1_title: '咨询与需求确定',
    step1_subtitle: '深入梳理核心痛点',
    step1_desc: '探讨产品定位、目标用户群体与所需接入的 AI 模块，无多余繁文缛节。',
    step2_title: '架构与原型开发',
    step2_subtitle: '在 AI Studio 中极速搭建',
    step2_desc: '设计模块化高并发架构，数天之内呈现可交互的直观原型。',
    step3_title: '迭代与全端测试',
    step3_subtitle: '性能调优与安全测试',
    step3_desc: '针对移动端与桌面设备进行详尽压力与安全测试，优化界面操作手感。',
    step4_title: '正式交付与知识转移',
    step4_subtitle: '客户获得绝对掌控权',
    step4_desc: '交付上线应用、管理账户、源代码仓库、相关秘钥及配套管理指南。',

    handover_badge: '100% 知识产权与交付保障',
    handover_header: '交付时您将获得的全部内容',
    handover_subheader: '您将拥有产品的完全控制权。不存在任何隐藏门槛：代码、配置及指南均完整交付。',
    handover_item1_title: '已正式部署上线的应用',
    handover_item1_desc: '部署于稳定云主机并配置高安全性 SSL 证书，即刻面向公众服务。',
    handover_item2_title: '专属后台管理最高权限',
    handover_item2_desc: '您拥有管理后台、业务数据和内容模块的绝对控制权。',
    handover_item3_title: '完整源代码与 Git 仓库',
    handover_item3_desc: '纯净、结构清晰的代码仓库，无任何后门或专属依赖锁定。',
    handover_item4_title: '操作指南与管理说明',
    handover_item4_desc: '图文详实的日常维护指南、内容发布与订单审核说明。',
    handover_item5_title: '备份恢复与安全建议',
    handover_item5_desc: '关键数据安全存储、访问凭据防泄漏及备份方案规范。',
    handover_item6_title: '可选的长期扩展支持',
    handover_item6_desc: '未来如需二次开发或扩展业务，随时提供专业技术支持。',
    handover_note: '* 日常内容更新由您通过管理后台轻松完成。如需全新功能开发，随时可作为独立需求合作。',
    btn_discuss_idea: '预约构想沟通',

    security_badge: '数据安全与自主权',
    security_header: '客户数据安全与专属环境',
    security_desc: '每个交付给客户的项目均部署在独立的计算环境中，配备专属管理入口。Maxim Rakitannov 坚持严苛隐私准则：绝无后门、绝无多租户共用数据库隐患，切实保障客户对数据的完全主权。',
    security_bullet1: '交付后开发者完全撤出，无隐藏后台权限',
    security_bullet2: '独立数据库架构，绝不与其他客户数据发生混杂',
    security_bullet3: '对客户的商业逻辑与客户资料严格保密',

    resources_badge: '官方渠道入口',
    resources_header: '官方服务资源与联系入口',
    resources_subheader: '官方认证联系点。随时连接 Telegram 客服机器人、在 Taplink 查看价目或进行线上支付。',
    btn_open_resource: '访问资源',
    btn_qr_code: '二维码',

    contact_badge: '即刻定制您的专属应用',
    contact_header: '开启您的数字化项目',
    contact_subheader: '告诉我们您的业务需求，我们将迅速评估方案，在最短时间内交付高水准的 AI 数字化系统。',
    contact_bot_title: 'Telegram 官方客服机器人',
    contact_taplink_title: 'Taplink 支付与服务主页',
    privacy_guarantee_title: '严格隐私承诺',
    privacy_guarantee_desc: '您的商业构想与联络方式将严格保密，完成交付后所有代码资产及知识产权归您所有。',
    form_title: '项目订制需求登记表',
    label_name: '您的姓名',
    label_company: '公司名称或项目名',
    label_contact_method: '偏好的沟通工具',
    label_contact: 'Telegram 账号 / 电话 / 邮箱',
    label_project_type: '项目类型',
    label_budget: '预估预算范围',
    label_desc: '业务构想与核心需求简述',
    label_features: '需要实现的特定功能（可选）',
    label_comment: '补充备注或期望时间节点',
    label_agree_terms: '我同意',
    and_text: '与',
    btn_submit: '提交项目开发需求',
    btn_submitting: '正在提交...',
    form_success: '需求已成功提交！Maxim 会在第一时间通过 Telegram 或邮件与您取得联系。',
    val_err_name: '请填写您的姓名',
    val_err_contact: '请提供有效的联系方式（Telegram 账号、手机号或邮箱）',
    val_err_desc: '请简要说明您的项目构想或需求',
    val_err_terms: '提交前请勾选并同意隐私政策',

    qr_modal_subtitle: '使用手机相机扫码即可直接在移动端打开该链接',
    btn_copy_link: '复制链接',
    btn_copied: '已复制！',
    btn_go_to_link: '直接前往',

    footer_tagline: 'Maxim Rakitannov 数字化工程工作室。专注将商业构想转化为高性能 Web 应用、AI 智能工具及 Telegram 小程序。',
    footer_nav: '快速导航',
    footer_legal: '法律与政策',
    footer_control: '后台管理',
    footer_admin_desc: '工作室管理员专属管理入口。',
    footer_btn_admin: '进入管理后台',
    footer_rights: '保留所有权利。',
    footer_dev_by: '工程开发：Maxim Rakitannov'
  },

  kk: {
    nav_projects: 'Жобалар',
    nav_services: 'Қызметтер',
    nav_process: 'Жұмыс реті',
    nav_resources: 'Ресурстар',
    nav_contact: 'Байланыс',
    nav_order: 'Тапсырыс беру',
    nav_admin_title: 'MR studio Басқару тақтасы',

    hero_badge: 'Тәуелсіз AI және Web әзірлеушісі • MR studio',
    hero_title: 'Идеяларды AI көмегімен жұмыс істейтін цифрлық өнімге айналдырамын',
    hero_subtitle: 'Бизнесіңіздің нақты міндеттеріне арналған сайттар, веб-қосымшалар және цифрлық құралдар жасаймын. Басынан бастап іске қосуға дейін барлық құқықты тапсырумен.',
    hero_pipeline_title: 'Жүзеге асыру кезеңдері:',
    hero_step_idea: 'Идея',
    hero_step_proto: 'AI-прототип',
    hero_step_product: 'Дайын өнім',
    hero_step_handover: 'Иесіне тапсыру',
    btn_view_projects: 'Жобаларды көру',
    btn_discuss_project: 'Жобаңызды талқылау',
    btn_telegram_support: 'Telegram Қолдау боты',
    hero_value_1: 'Жай ғана код емес, жұмыс істейтін дайын өнім',
    hero_value_2: '100% бастапқы код пен құқық тапсырыс берушіде',
    hero_value_3: 'Жасырын ай сайынғы төлемдерсіз',
    hero_hologram_core: 'AI Studio Core',
    hero_hologram_core_desc: 'Жылдам прототиптеу',
    hero_hologram_prod: 'Production Ready',
    hero_hologram_prod_desc: '100% Бастапқы код',
    hero_visual_caption: 'Көрнекі тұжырымдама: Бизнес идеяларды дайын цифрлық жүйелерге айналдыру кеңістігі',

    projects_badge: 'ӘЗІРЛЕУШІ ПОРТФОЛИОСЫ',
    projects_header: 'Менің жобаларым',
    projects_subheader: 'Нақты бизнес мәселелерін шешу үшін әзірленген нақты цифрлық өнімдер.',
    cat_all: 'Барлық жобалар',
    cat_ai: 'AI & SaaS',
    cat_web: 'Веб-сервистер',
    cat_telegram: 'Telegram Mini Apps',
    cat_automation: 'Автоматтандыру & CRM',
    flagship_tag: '★ Басты жоба',
    btn_view_demo: 'Демоны көру',
    btn_details: 'Толығырақ',
    btn_order_similar: 'Осыған ұқсасқа тапсырыс беру',
    demo_by_request: 'Сұраныс бойынша демо',
    demo_safe_badge: 'Жеке мәліметтер қорғалған қауіпсіз демо ортасы',
    key_functions_label: 'Негізгі функциялары:',

    modal_safe_title: 'Қауіпсіз демонстрациялық орта',
    modal_safe_desc: 'Демонстрациялық нұсқа. Деректер өнім мүмкіндіктерін көрсету үшін ғана қолданылады. Клиенттердің құпия ақпараты сенімді қорғалған.',
    modal_objective: 'Жоба мақсаты',
    modal_audience: 'Мақсатты аудитория',
    modal_problem: 'Шешілетін мәселе',
    modal_value: 'Бизнес үшін құндылығы',
    modal_approach: 'Әзірлеу тәсілі',
    modal_tech_stack: 'Технологиялық стек',
    modal_close: 'Жабу',

    services_badge: 'ҚҰЗЫРЕТТЕР МЕН ШЕШІМДЕР',
    services_header: 'Әзірлеу қызметтері',
    services_subheader: 'Бизнесіңіздің нақты қажеттіліктерін шешетін заманауи құралдар.',
    btn_order_service: 'Тапсырыс беру',
    filter_all: 'Барлық бағыттар',
    filter_ai: 'AI & Нейрожелілер',
    filter_web: 'Веб-қосымшалар мен сайттар',
    filter_telegram: 'Telegram & Боттар',
    filter_automation: 'Автоматтандыру & Дашбордтар',

    process_badge: 'АШЫҚ ҮДЕРІС',
    process_header: 'Қалай жұмыс істеймін: Идеядан бастап іске қосуға дейін',
    process_subheader: 'Мақсат — сіз дербес басқара алатын сенімді жұмыс құралын тапсыру.',
    step1_title: 'Идея мен міндетті талқылау',
    step1_subtitle: 'Бизнес қажеттіліктерін талдау',
    step1_desc: 'Қажетті құндылықты, аудиторияны және AI интеграциясын анықтаймыз.',
    step2_title: 'Жұмыс істейтін прототип жасау',
    step2_subtitle: 'AI Studio-да жылдам іске қосу',
    step2_desc: 'Қосымшаның интерактивті нұсқасын бірнеше күн ішінде дайындаймыз.',
    step3_title: 'Жетілдіру және сынау',
    step3_subtitle: 'Логика мен қауіпсіздікті тексеру',
    step3_desc: 'Құрылғыларда толық сынақтан өткізіп, қауіпсіздік талаптарын реттейміз.',
    step4_title: 'Дайын өнімді иесіне тапсыру',
    step4_subtitle: 'Тапсырыс берушінің толық тәуелсіздігі',
    step4_desc: 'Орнатылған қосымша, админ кіру жолдары, код мұрағаты және нұсқаулықтар беріледі.',

    handover_badge: 'ТОЛЫҚ ҚҰҚЫҚТЫ ТАПСЫРУ КЕПІЛДІГІ',
    handover_header: 'Жоба аяқталғанда не аласыз',
    handover_subheader: 'Сіз өнімнің толық құқылы иесі боласыз: ешқандай жасырын тәуелділіксіз бастапқы код пен нұсқаулықтар беріледі.',
    handover_item1_title: 'Жарияланған жұмыс істейтін қосымша',
    handover_item1_desc: 'Сенімді хостингте SSL сертификатымен орнатылған, пайдаланушыларға дайын.',
    handover_item2_title: 'Администраторлық кіру рұқсаты',
    handover_item2_desc: 'Басқару тақтасына және деректерге толық қолжетімділік.',
    handover_item3_title: 'Бастапқы код және Git репозиторийі',
    handover_item3_desc: 'Жасырын кілттерсіз, таза және құрылымдалған код мұрағаты.',
    handover_item4_title: 'Түсінікті нұсқаулықтар',
    handover_item4_desc: 'Мазмұнды басқару, өтінімдерді қарау бойынша қадамдық нұсқаулықтар.',
    handover_item5_title: 'Сақтық көшірмелер мен қауіпсіздік',
    handover_item5_desc: 'Мәліметтерді қауіпсіз сақтау және қорғау бойынша ұсыныстар.',
    handover_item6_title: 'Қосымша қолдау мүмкіндігі',
    handover_item6_desc: 'Жаңа функцияларды қосу және техникалық сүйемелдеуге мүмкіндік бар.',
    handover_note: '* Күнделікті мазмұн толтыруды өзіңіз админка арқылы жасайсыз. Жаңа мүмкіндіктерді қосу жеке сұраныспен жасалады.',
    btn_discuss_idea: 'Жоба идеяңызды талқылау',

    security_badge: 'ҚАУІПСІЗДІК ЖӘНЕ ДЕРЕККЕ ИЕЛІК ЕТУ',
    security_header: 'Оқшауланған орта және клиенттің дербестігі',
    security_desc: 'Әрбір клиенттік қосымша жеке оқшауланған ортада жұмыс істейді. Максим Ракитянов қатаң құпиялылық стандартын ұстанады: жасырын есіктер мен жалпы ортақ базалар болмайды.',
    security_bullet1: 'Жоба тапсырылғаннан кейін әзірлеуші тарапынан жасырын рұқсаттардың болмауы',
    security_bullet2: 'Басқа клиенттермен ортақтастырылмаған оқшауланған деректер базасы',
    security_bullet3: 'Коммерциялық құпия мен алгоритмдердің толық сақталуы',

    resources_badge: 'РЕСМИ АРНАЛАР',
    resources_header: 'Менің ресурстарым мен байланыс нүктелерім',
    resources_subheader: 'Қолдау ботымен байланысыңыз, Taplink арқылы бағалармен танысыңыз немесе қауіпсіз төлем жасаңыз.',
    btn_open_resource: 'Ресурсты ашу',
    btn_qr_code: 'QR-код',

    contact_badge: 'БАЙЛАНЫСУ',
    contact_header: 'Жобаңызды талқылайық',
    contact_subheader: 'Мақсатыңызды баяндаңыз. Оңтайлы технологияларды таңдап, қысқа мерзімде жұмыс істейтін MVP жасаймыз.',
    contact_bot_title: 'Telegram Қолдау боты',
    contact_taplink_title: 'Төлем және қызметтер (Taplink)',
    privacy_guarantee_title: 'Құпиялылық және ашықтық',
    privacy_guarantee_desc: 'Сіздің идеяңыз бен байланыс деректеріңіз қорғалған. Дайын болған соң барлық зияткерлік меншік құқығы сізге өтеді.',
    form_title: 'Цифрлық өнімді әзірлеуге өтінім',
    label_name: 'Атыңыз',
    label_company: 'Компания / Жоба атауы',
    label_contact_method: 'Қолайлы байланыс түрі',
    label_contact: 'Telegram юзернейм / телефон / email',
    label_project_type: 'Жоба түрі',
    label_budget: 'Болжамды бюджет',
    label_desc: 'Идея немесе міндеттің сипаттамасы',
    label_features: 'Қажетті функциялар (міндетті емес)',
    label_comment: 'Қосымша пікір мен мерзім',
    label_agree_terms: 'Мен келісемін:',
    and_text: 'және',
    btn_submit: 'Әзірлеуге өтінім жіберу',
    btn_submitting: 'Жіберілуде...',
    form_success: 'Өтінім сәтті жіберілді! Максим сізбен жақын арада байланысады.',
    val_err_name: 'Атыңызды көрсетіңіз',
    val_err_contact: 'Байланыс дерегін көрсетіңіз (Telegram, телефон немесе пошта)',
    val_err_desc: 'Идеяңызды қысқаша сипаттаңыз',
    val_err_terms: 'Өңдеу шарттарымен келісу қажет',

    qr_modal_subtitle: 'Сілтемені лезде ашу үшін смартфон камерасын бағыттаңыз',
    btn_copy_link: 'Көшіру',
    btn_copied: 'Көшірілді',
    btn_go_to_link: 'Өту',

    footer_tagline: 'Максим Ракитяновтың портфолиосы мен цифрлық студиясы. Бизнес идеяларды веб-қосымшаларға, AI шешімдерге және боттарға айналдырамын.',
    footer_nav: 'Навигация',
    footer_legal: 'Құжаттар',
    footer_control: 'Басқару',
    footer_admin_desc: 'Студия иесіне арналған жабық әкімшілік панель.',
    footer_btn_admin: 'Басқару тақтасы',
    footer_rights: 'Барлық құқықтар қорғалған.',
    footer_dev_by: 'Әзірлеген: Максим Ракитянов'
  },

  uz: {
    nav_projects: 'Loyihalar',
    nav_services: 'Xizmatlar',
    nav_process: 'Ish tartibi',
    nav_resources: 'Resurslar',
    nav_contact: 'Aloqa',
    nav_order: 'Ilova buyurtma qilish',
    nav_admin_title: 'MR studio Boshqaruv paneli',

    hero_badge: "Mustaqil AI va Web dasturchi • MR studio",
    hero_title: "G'oyalarni AI yordamida ishlaydigan raqamli mahsulotlarga aylantiraman",
    hero_subtitle: "Biznesingizning aniq vazifalari uchun saytlar, veb-ilovalar va raqamli vositalar yarataman. G'oyadan boshlab to'liq huquqlarni topshirishgacha.",
    hero_pipeline_title: 'Amalga oshirish bosqichlari:',
    hero_step_idea: "G'oya",
    hero_step_proto: 'AI-prototip',
    hero_step_product: 'Ishlaydigan mahsulot',
    hero_step_handover: "Egaga topshirish",
    btn_view_projects: "Loyihalarni ko'rish",
    btn_discuss_project: "Loyihangizni muhokama qilish",
    btn_telegram_support: "Telegram Qo'llab-quvvatlash boti",
    hero_value_1: "Faqat kod emas, ishlaydigan tayyor mahsulot",
    hero_value_2: "100% kod va huquqlar mijozga topshiriladi",
    hero_value_3: "Yashirin oylik to'lovlarsiz",
    hero_hologram_core: 'AI Studio Core',
    hero_hologram_core_desc: 'Tezkor prototiplash',
    hero_hologram_prod: 'Production Ready',
    hero_hologram_prod_desc: "100% To'liq kod",
    hero_visual_caption: "Vizual tushuncha: Biznes g'oyalarni tayyor raqamli tizimlarga aylantirish maydoni",

    projects_badge: "DASTURCHI PORTFOLIYASI",
    projects_header: 'Mening loyihalarim',
    projects_subheader: "Biznes vazifalarini hal qilish uchun ishlab chiqilgan haqiqiy raqamli yechimlar.",
    cat_all: 'Barcha loyihalar',
    cat_ai: 'AI & SaaS',
    cat_web: 'Veb-servislar',
    cat_telegram: 'Telegram Mini Apps',
    cat_automation: 'Avtomatlashtirish & CRM',
    flagship_tag: '★ Asosiy loyiha',
    btn_view_demo: "Demoni ko'rish",
    btn_details: "Batafsil",
    btn_order_similar: "Shunga o'xshashini buyurtma qilish",
    demo_by_request: "So'rov bo'yicha demo",
    demo_safe_badge: "Shaxsiy ma'lumotlar himoyalangan xavfsiz demo muhiti",
    key_functions_label: 'Asosiy funksiyalar:',

    modal_safe_title: "Xavfsiz namoyish muhiti",
    modal_safe_desc: "Namoyish versiyasi. Ma'lumotlar mahsulot imkoniyatlarini ko'rsatish uchun foydalaniladi. Mijozlarning shaxsiy ma'lumotlari ishonchli himoyalangan.",
    modal_objective: "Loyiha maqsadi",
    modal_audience: "Maqsadli auditoriya",
    modal_problem: "Yechilayotgan muammo",
    modal_value: "Biznes uchun foyda",
    modal_approach: "Yondashuv",
    modal_tech_stack: "Texnologiyalar to'plami",
    modal_close: "Yopish",

    services_badge: "IMKONIYATLAR VA YECHIMLAR",
    services_header: 'Dasturlash xizmatlari',
    services_subheader: "Biznesni rivojlantirishga qaratilgan zamonaviy vositalar va tizimlar.",
    btn_order_service: 'Buyurtma qilish',
    filter_all: "Barcha yo'nalishlar",
    filter_ai: 'AI & Neyrotizimlar',
    filter_web: 'Veb-ilovalar va saytlar',
    filter_telegram: 'Telegram & Botlar',
    filter_automation: 'Avtomatlashtirish & Boshqaruv',

    process_badge: 'SHAFFAF JARAYON',
    process_header: "Qanday ishlayman: G'oyadan boshlab ishga tushirishgacha",
    process_subheader: "Maqsad — o'zingiz mustaqil boshqara oladigan barqaror tizimni taqdim etish.",
    step1_title: "G'oya va vazifani muhokama qilish",
    step1_subtitle: 'Biznes ehtiyojlarini tahlil qilish',
    step1_desc: "Kerakli qiymatni, auditoriyani va AI integratsiyasini ortiqcha byurokratiyasiz aniqlaymiz.",
    step2_title: 'Ishlaydigan prototip yaratish',
    step2_subtitle: 'AI Studio orqali tezkor ishga tushirish',
    step2_desc: "Bir necha kunda ilovaning interaktiv namunasini tayyorlab, amalda ko'rsatamiz.",
    step3_title: 'Mukammallashtirish va sinov',
    step3_subtitle: 'Xavfsizlik va mantiqni tekshirish',
    step3_desc: "Barcha qurilmalarda to'liq sinovdan o'tkazib, xavfsizlik choralarini ta'minlaymiz.",
    step4_title: 'Tayyor mahsulotni egasiga topshirish',
    step4_subtitle: "Mijozning to'liq mustaqilligi",
    step4_desc: "O'rnatilgan ilova, admin ruxsatlari, manba kodi va qo'llanmalar topshiriladi.",

    handover_badge: "HUQUQ VA EGALIK KAFOLATI",
    handover_header: 'Loyiha yakunida nimalarga ega bo‘lasiz',
    handover_subheader: "Siz mahsulotning yagona egasi bo'lasiz: dasturchiga hech qanday bog'liqliksiz barcha kodlar va qo'llanmalar beriladi.",
    handover_item1_title: 'Jonli ishga tushirilgan ilova',
    handover_item1_desc: "Ishonchli xostingda SSL sertifikati bilan foydalanuvchilar uchun tayyor holda.",
    handover_item2_title: 'Maxsus administrator ruxsati',
    handover_item2_desc: "Boshqaruv paneli, ma'lumotlar bazasi va buyurtmalar ustidan to'liq nazorat.",
    handover_item3_title: "To'liq manba kodi va Git repozitoriy",
    handover_item3_desc: "Toza, xavfsiz va hech qanday yashirin qulflarsiz manba kodi.",
    handover_item4_title: "Tushunarli qo'llanmalar",
    handover_item4_desc: "Saytni boshqarish, yangilash va buyurtmalarni ko'rish bo'yicha ko'rsatmalar.",
    handover_item5_title: "Zaxira nusxalar va xavfsizlik",
    handover_item5_desc: "Ma'lumotlar xavfsizligini ta'minlash va zaxiralash bo'yicha tavsiyalar.",
    handover_item6_title: "Qo'shimcha texnik qo'llab-quvvatlash",
    handover_item6_desc: "Kelgusida yangi funksiyalar qo'shish va texnik ko'mak imkoniyati.",
    handover_note: "* Kundalik ma'lumotlarni o'zingiz admin panel orqali kiritasiz. Yangi imkoniyatlar qo'shish alohida kelishuv asosida amalga oshiriladi.",
    btn_discuss_idea: "Loyihangiz g'oyasini muhokama qilish",

    security_badge: "XAVFSIZLIK VA MA'LUMOTLAR MUSTAQILLIGI",
    security_header: "Xavfsizlik va mijoz ma'lumotlariga egalik",
    security_desc: "Har bir mijoz ilovasi alohida ajratilgan muhitda ishlaydi. Maksim Rakityanov qat'iy qoidalarga amal qiladi: yashirin eshiklar va umumiy bazalar xavfi yo'q.",
    security_bullet1: "Loyiha topshirilgach hech qanday yashirin kirish yo'llari qolmaydi",
    security_bullet2: "Boshqa mijozlar bilan aralashtirilmagan mustaqil ma'lumotlar bazasi",
    security_bullet3: "Tijoriy g'oya va algoritmlarning to'liq sir saqlanishi",

    resources_badge: 'RASMIY ALOQA YO‘LLARI',
    resources_header: 'Mening resurslarim va aloqa nuqtalarim',
    resources_subheader: "Yordam boti bilan bog'laning, Taplink orqali narxlar bilan tanishing yoki to'lovlarni amalga oshiring.",
    btn_open_resource: 'Resursni ochish',
    btn_qr_code: 'QR-kod',

    contact_badge: 'ALOQA VA BUYURTMA',
    contact_header: 'Loyihangizni birgalikda quramiz',
    contact_subheader: "Vazifangizni bayon qiling. Optimal texnologiyalarni tanlab, qisqa muddatda ishlaydigan raqamli mahsulot yaratamiz.",
    contact_bot_title: 'Telegram Qo‘llab-quvvatlash boti',
    contact_taplink_title: "To'lovlar va xizmatlar (Taplink)",
    privacy_guarantee_title: 'Maxfiylik kafolati',
    privacy_guarantee_desc: "G'oyangiz va kontaktlaringiz himoyalangan. Tayyor bo'lgach barcha intellektual mulk sizga tegishli bo'ladi.",
    form_title: 'Raqamli mahsulot buyurtma qilish formasi',
    label_name: 'Ismingiz',
    label_company: 'Kompaniya / Loyiha nomi',
    label_contact_method: 'Qulay aloqa usuli',
    label_contact: 'Telegram username / telefon / email',
    label_project_type: 'Loyiha turi',
    label_budget: 'Mo‘ljallangan byudjet',
    label_desc: "G'oya yoki vazifaning tavsifi",
    label_features: 'Kerakli funksiyalar (ixtiyoriy)',
    label_comment: "Qo'shimcha izoh va muddat",
    label_agree_terms: 'Men shartlarga roziman:',
    and_text: 'va',
    btn_submit: 'Buyurtmani yuborish',
    btn_submitting: 'Yuborilmoqda...',
    form_success: "Buyurtma muvaffaqiyatli yuborildi! Maksim tez orada siz bilan bog'lanadi.",
    val_err_name: 'Iltimos, ismingizni kiriting',
    val_err_contact: "Bog'lanish uchun ma'lumot kiriting (Telegram, telefon yoki email)",
    val_err_desc: "G'oyangizni qisqacha ta'riflang",
    val_err_terms: "Yuborish uchun shartlarga rozilik bildirish lozim",

    qr_modal_subtitle: 'Havolani darhol ochish uchun smartfon kamerasini yo‘naltiring',
    btn_copy_link: 'Nusxalash',
    btn_copied: 'Nusxalandi',
    btn_go_to_link: "O'tish",

    footer_tagline: "Maksim Rakityanovning portfoliyasi va raqamli studiyasi. Biznes g'oyalarni veb-servislar, AI vositalar va botlarga aylantiraman.",
    footer_nav: 'Navigatsiya',
    footer_legal: 'Hujjatlar',
    footer_control: 'Boshqaruv',
    footer_admin_desc: 'Studiya egasi uchun maxsus yopiq panel.',
    footer_btn_admin: 'Boshqaruv paneli',
    footer_rights: 'Barcha huquqlar himoyalangan.',
    footer_dev_by: 'Dasturchi: Maksim Rakityanov'
  },

  hy: {
    nav_projects: 'Նախագծեր',
    nav_services: 'Ծառայություններ',
    nav_process: 'Ինչպես եմ աշխատում',
    nav_resources: 'Ռեսուրսներ',
    nav_contact: 'Կապ',
    nav_order: 'Պատվիրել հավելված',
    nav_admin_title: 'MR studio Կառավարման վահանակ',

    hero_badge: 'Անկախ AI և Web ծրագրավորող • MR studio',
    hero_title: 'Գաղափարները վերածում եմ աշխատող թվային արտադրանքի AI-ի օգնությամբ',
    hero_subtitle: 'Ստեղծում եմ կայքեր, վեբ-հավելվածներ և թվային գործիքներ բիզնեսի համար։ Կոնցեպտից մինչև գործարկում և բոլոր իրավունքների փոխանցում։',
    hero_pipeline_title: 'Իրականացման փուլեր՝',
    hero_step_idea: 'Գաղափար',
    hero_step_proto: 'AI-նախատիպ',
    hero_step_product: 'Աշխատող արդյունք',
    hero_step_handover: 'Փոխանցում տիրոջը',
    btn_view_projects: 'Դիտել նախագծերը',
    btn_discuss_project: 'Քննարկել նախագիծը',
    btn_telegram_support: 'Telegram Աջակցության բոտ',
    hero_value_1: 'Իրական աշխատող արդյունք, ոչ միայն կոդ',
    hero_value_2: '100% կոդի և հեղինակային իրավունքների փոխանցում',
    hero_value_3: 'Առանց թաքնված ամսական վճարների',
    hero_hologram_core: 'AI Studio Core',
    hero_hologram_core_desc: 'Արագ նախատիպավորում',
    hero_hologram_prod: 'Production Ready',
    hero_hologram_prod_desc: '100% Կոդի սեփականություն',
    hero_visual_caption: 'Տեսողական կոնցեպտ. բիզնես գաղափարները թվային համակարգերի վերածելու միջավայր',

    projects_badge: 'ԾՐԱԳՐԱՎՈՐՈՂԻ ՊՈՐՏՖՈԼԻՈ',
    projects_header: 'Իմ նախագծերը',
    projects_subheader: 'Իրական թվային լուծումներ՝ ստեղծված բիզնեսի հստակ խնդիրների լուծման համար։',
    cat_all: 'Բոլոր նախագծերը',
    cat_ai: 'AI & SaaS',
    cat_web: 'Վեբ-ծառայություններ',
    cat_telegram: 'Telegram Mini Apps',
    cat_automation: 'Ավտոմատացում & CRM',
    flagship_tag: '★ Առանցքային նախագիծ',
    btn_view_demo: 'Դիտել դեմոն',
    btn_details: 'Մանրամասն',
    btn_order_similar: 'Պատվիրել նմանատիպ',
    demo_by_request: 'Դեմո ըստ հարցման',
    demo_safe_badge: 'Անվտանգ ցուցադրական միջավայր՝ անձնական տվյալների պաշտպանությամբ',
    key_functions_label: 'Հիմնական գործառույթներ՝',

    modal_safe_title: 'Անվտանգ ցուցադրական միջավայր',
    modal_safe_desc: 'Ցուցադրական տարբերակ։ Տվյալները օգտագործվում են միայն հնարավորությունները ցույց տալու համար։ Հաճախորդների գաղտնի տվյալները լիովին պաշտպանված են։',
    modal_objective: 'Նախագծի նպատակը',
    modal_audience: 'Թիրախային լսարան',
    modal_problem: 'Լուծվող խնդիրը',
    modal_value: 'Արժեքը բիզնեսի համար',
    modal_approach: 'Մշակման մոտեցումը',
    modal_tech_stack: 'Տեխնոլոգիաների փաթեթ',
    modal_close: 'Փակել',

    services_badge: 'ՀՄՏՈՒԹՅՈՒՆՆԵՐ ԵՎ ԼՈՒԾՈՒՄՆԵՐ',
    services_header: 'Ծառայություններ',
    services_subheader: 'Բիզնեսի զարգացմանը միտված ժամանակակից թվային գործիքներ և կայքեր։',
    btn_order_service: 'Պատվիրել',
    filter_all: 'Բոլոր ուղղությունները',
    filter_ai: 'AI & Նեյրոցանցեր',
    filter_web: 'Վեբ-հավելվածներ և կայքեր',
    filter_telegram: 'Telegram & Բոտեր',
    filter_automation: 'Ավտոմատացում & Վահանակներ',

    process_badge: 'ԹԱՓԱՆՑԻԿ ԳՈՐԾԸՆԹԱՑ',
    process_header: 'Ինչպես եմ աշխատում՝ գաղափարից մինչև գործարկում',
    process_subheader: 'Նպատակը՝ ստեղծել ինքնուրույն աշխատող թվային գործիք, որը դուք կարող եք կառավարել անկախ։',
    step1_title: 'Գաղափարի քննարկում',
    step1_subtitle: 'Բիզնես պահանջների վերլուծություն',
    step1_desc: 'Որոշում ենք նախագծի արժեքը, լսարանը և AI հնարավորությունները առանց ավելորդ բյուրոկրատիայի։',
    step2_title: 'Աշխատող նախատիպի ստեղծում',
    step2_subtitle: 'Արագ մեկնարկ AI Studio-ում',
    step2_desc: 'Մի քանի օրում ստեղծում ենք հավելվածի ինտերակտիվ տարբերակը և ցուցադրում։',
    step3_title: 'Կատարելագործում և թեստավորում',
    step3_subtitle: 'Տրամաբանության և անվտանգության ստուգում',
    step3_desc: 'Բոլոր սարքերում մանրակրկիտ ստուգում ենք կայունությունն ու հարմարավետությունը։',
    step4_title: 'Պատրաստի արտադրանքի հանձնում',
    step4_subtitle: 'Պատվիրատուի լիակատար անկախություն',
    step4_desc: 'Տրամադրվում են տեղադրված հավելվածը, ադմին մուտքը, կոդը և ուղեցույցները։',

    handover_badge: 'ԻՐԱՎՈՒՆՔՆԵՐԻ ԼԻԱՐԺԵՔ ՓՈԽԱՆՑՄԱՆ ԵՐԱՇԽԻՔ',
    handover_header: 'Ինչ եք ստանում նախագիծն ավարտելիս',
    handover_subheader: 'Դուք դառնում եք արտադրանքի միակ սեփականատերը՝ առանց որևէ կախվածության ծրագրավորողից։',
    handover_item1_title: 'Հրապարակված գործող հավելված',
    handover_item1_desc: 'Տեղադրված է հուսալի հոսթինգում SSL վկայագրով՝ պատրաստ օգտատերերի համար։',
    handover_item2_title: 'Ադմինիստրատորի ամբողջական մուտք',
    handover_item2_desc: 'Կառավարման վահանակի և տվյալների բազայի լիակատար վերահսկողություն։',
    handover_item3_title: 'Սկզբնական կոդ և Git ռեպոզիտորիա',
    handover_item3_desc: 'Մաքուր, հստակ կառուցվածքով կոդ՝ առանց թաքնված ելքերի կամ արգելափակումների։',
    handover_item4_title: 'Մատչելի ուղեցույցներ',
    handover_item4_desc: 'Քայլ առ քայլ հրահանգներ կայքի կառավարման և պատվերների մշակման համար։',
    handover_item5_title: 'Պահուստային պատճեններ և անվտանգություն',
    handover_item5_desc: 'Տվյալների պաշտպանության և կրկնօրինակման հուսալի մեթոդներ։',
    handover_item6_title: 'Լրացուցիչ աջակցության հնարավորություն',
    handover_item6_desc: 'Հետագայում նոր գործառույթների ավելացման և տեխնիկական սպասարկման հնարավորություն։',
    handover_note: '* Ամենօրյա բովանդակությունը դուք ինքնուրույն եք կառավարում ադմինկայի միջոցով։ Նոր գործառույթների ավելացումը հասանելի է առանձին պատվերով։',
    btn_discuss_idea: 'Քննարկել Ձեր նախագծի գաղափարը',

    security_badge: 'ԱՆՎՏԱՆԳՈՒԹՅՈՒՆ ԵՎ ՏՎՅԱԼՆԵՐԻ ԻՆՔՆԻՇԽԱՆՈՒԹՅՈՒՆ',
    security_header: 'Անվտանգ միջավայր և տվյալների սեփականություն',
    security_desc: 'Յուրաքանչյուր հաճախորդի հավելված աշխատում է առանձին մեկուսացված միջավայրում։ Մաքսիմ Ռակիտյանովը խստորեն պահպանում է գաղտնիության սկզբունքները՝ բացառելով թաքնված մուտքերը և ընդհանուր բազաները։',
    security_bullet1: 'Նախագծի հանձնումից հետո թաքնված մուտքերի իսպառ բացակայություն',
    security_bullet2: 'Առանձնացված տվյալների բազաներ՝ առանց այլ հաճախորդների հետ խառնվելու',
    security_bullet3: 'Առևտրային գաղտնիքի և ալգորիթմների լիակատար պահպանում',

    resources_badge: 'ՊԱՇՏՈՆԱԿԱՆ ՈՒՂԻՆԵՐ',
    resources_header: 'Իմ ռեսուրսներն ու կապի կետերը',
    resources_subheader: 'Կապվեք աջակցության բոտի հետ, ծանոթացեք արժեքներին Taplink-ում կամ կատարեք ապահով վճարումներ։',
    btn_open_resource: 'Բացել ռեսուրսը',
    btn_qr_code: 'QR-կոդ',

    contact_badge: 'ՊԱՏՎԻՐԵԼ ՁԵՐ ՀԱՎԵԼՎԱԾԸ',
    contact_header: 'Եկեք քննարկենք Ձեր նախագիծը',
    contact_subheader: 'Նկարագրեք Ձեր խնդիրը։ Մենք կընտրենք օպտիմալ տեխնոլոգիաները և սեղմ ժամկետում կստեղծենք աշխատող թվային լուծում։',
    contact_bot_title: 'Telegram Աջակցության բոտ',
    contact_taplink_title: 'Վճարումներ և ծառայություններ (Taplink)',
    privacy_guarantee_title: 'Գաղտնիություն և բացահայտում',
    privacy_guarantee_desc: 'Ձեր գաղափարը և կոնտակտները պաշտպանված են։ Ավարտից հետո ամբողջ մտավոր սեփականությունը պատկանում է Ձեզ։',
    form_title: 'Թվային արտադրանքի պատվերի հայտ',
    label_name: 'Ձեր անունը',
    label_company: 'Ընկերության կամ նախագծի անվանումը',
    label_contact_method: 'Կապի նախընտրելի եղանակ',
    label_contact: 'Telegram յուզերնեյմ / հեռախոս / էլ․ հասցե',
    label_project_type: 'Նախագծի տեսակը',
    label_budget: 'Մոտավոր բյուջե',
    label_desc: 'Գաղափարի կամ խնդրի նկարագրություն',
    label_features: 'Անհրաժեշտ գործառույթներ (ոչ պարտադիր)',
    label_comment: 'Լրացուցիչ մեկնաբանություն և ժամկետներ',
    label_agree_terms: 'Ես համաձայն եմ',
    and_text: 'և',
    btn_submit: 'Ուղարկել պատվերի հայտը',
    btn_submitting: 'Ուղարկվում է...',
    form_success: 'Հայտն ուղարկված է։ Մաքսիմը շուտով կապ կհաստատի Ձեզ հետ։',
    val_err_name: 'Խնդրում ենք նշել Ձեր անունը',
    val_err_contact: 'Խնդրում ենք նշել կապի միջոց (Telegram, հեռախոս կամ էլ․ հասցե)',
    val_err_desc: 'Խնդրում ենք հակիրճ նկարագրել Ձեր գաղափարը',
    val_err_terms: 'Անհրաժեշտ է համաձայնել գաղտնիության քաղաքականությանը',

    qr_modal_subtitle: 'Ուղղեք սմարթֆոնի տեսախցիկը հղումն անմիջապես բացելու համար',
    btn_copy_link: 'Պատճենել',
    btn_copied: 'Պատճենված է',
    btn_go_to_link: 'Անցնել',

    footer_tagline: 'Մաքսիմ Ռակիտյանովի թվային ստուդիան և պորտֆոլիոն։ Բիզնես գաղափարները վերածում եմ վեբ-հավելվածների, AI լուծումների և Telegram Mini Apps-երի։',
    footer_nav: 'Նավիգացիա',
    footer_legal: 'Փաստաթղթեր',
    footer_control: 'Կառավարում',
    footer_admin_desc: 'Փակ ադմինիստրատիվ վահանակ ստուդիայի տիրոջ համար։',
    footer_btn_admin: 'Կառավարման վահանակ',
    footer_rights: 'Բոլոր իրավունքները պաշտպանված են։',
    footer_dev_by: 'Մշակումը՝ Մաքսիմ Ռակիտյանով'
  }
};
