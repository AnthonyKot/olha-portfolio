export const portfolioConfig = {
    personalInfo: {
        name: "Olha Kot",
        title: "Senior Product Designer",
        email: "olhakot.ux@gmail.com",
        phone: "+31 6 48 13 61 74",
        socials: {
            linkedin: "https://www.linkedin.com/in/olhakot/",
            instagram: "https://instagram.com/olhakot"
        }
    },
    hero: {
        headline: "Senior Product Designer specializing in complex B2B & B2C workflows",
        subheadline: "I bring over 8 years of experience designing high-impact UX for SaaS, AI, fintech, and global trade platforms — simplifying complex workflows to drive activation, retention, and conversion.",
        image: "/assets/cover.avif"
    },
    about: {
        text: ""
    },
    projects: [
        {
            id: 1,
            slug: "silq",
            title: "Silq",
            category: "Freight-forwarder / Supply chain / Order management",
            description: "SILQ powers global manufacturing with local expertise. The supply chain CRM platform covers everything from Tech Pack development, Sampling, Production Monitoring, Quality Assistance, and Shipment.",
            thumbnail: "/assets/project1.jpg",
            heroImage: "/assets/silq-hero.png",
            companyType: "FreightTech Startup",
            role: "Lead Product Designer",
            platform: "Responsive Web Application",
            process: ["Understand", "Define", "Ideate", "Design", "User testing", "Launch"],
            services: ["Product design", "Concept design", "User-flows", "UX Research/Testing", "Interaction design", "UX Strategy", "Team Management"],
            achievements: [
                { date: "Jan, 2021", title: "Silq raised $2,000,000 / Pre Seed" },
                { date: "Feb, 2021", title: "First design concept built, started regular user testing" },
                { date: "March, 2021", title: "Design System created" },
                { date: "Aug, 2021", title: "Three apps launched" },
                { date: "Dec, 2021", title: "Design team complete" },
                { date: "Mar, 2022", title: "Silq raised $17,600,000 / Series A" }
            ],
            problem: "The current way of managing orders is chaotic and not transparent — a lot of data is lost.\n\nThe shipment industry is associated with inaccurate quotes and failed delivery estimations.\n\nAs Lead Product Designer, I owned the end-to-end redesign of Silq's order management platform — aligning stakeholders, mentoring juniors, and building a scalable design system. Our goal was to cut average processing time by 30% and deliver accurate, real-time quotes to every customer.",
            challenge: "End-to-end order workflows span multiple manual tools, driving errors and delays.\n\nKey areas addressed:\n• Tech Pack\n• Sampling\n• Purchase order/production\n• Shipment",
            details: "As the Founding Product Designer, I established design processes, developed and maintained a scalable design system, and led the design and iteration of multiple MVP concepts. My role also involved conducting user research and testing, creating diverse concepts and prototypes that empowered engineering teams to deliver high-quality features efficiently.",
            images: [
                { src: "/assets/silq-mockup1.png", caption: "Silq Dashboard - Order Management" },
                { src: "/assets/silq-mockup2.png", caption: "Silq Platform Overview" }
            ],
            impact: []
        },
        {
            id: 2,
            slug: "hillebrand",
            title: "MyHillebrand",
            category: "International logistics / Freight-forwarder / Supply chain",
            description: "MyHillebrand is an online tool where you can manage all aspects of your orders. Access your shipments, invoices, carbon emissions, temperatures and more, online or using a mobile app.",
            thumbnail: "/assets/project2.jpg",
            heroImage: "/assets/hillebrand-hero.png",
            companyType: "The leading global beverage logistics provider ($1-2B revenue/year)",
            role: "UX/UI Designer",
            team: "2 Designers + Dev Team",
            duration: "1 year",
            platform: "Responsive Web, iOS, Android",
            process: ["Research", "Workshop", "Design", "Test", "Iterate", "Launch"],
            services: ["UX design", "UI design", "Interaction design", "User Research"],
            achievements: [],
            problem: "Our web application has failed to provide our customers with an effective solution to:\n• Be informed on time about changes happening to their shipments, like delivery updates or delays\n• Allow users to manage and complete important tasks\n• Allow users to communicate with our employees via the platform\n\nThis has impacted the general level of satisfaction and led to many customer complaints.",
            challenge: "User research is crucial at Hillebrand because of the complex workflows of the many user types that must be accommodated to make the system work. Most users had very little knowledge of international logistics and were only subject matter experts in their job areas. This influenced the architecture of the system: instead of designing for a primary user type, we had to design functionalities for many secondary persona types.",
            details: "To design a platform that enables customers worldwide to manage their shipments, offering a global picture of shipping operations with accurate and live data that is easy to access and simple to manage.\n\nThe platform enables customers to track shipments from order placement to delivery, receive notifications, manage finances and monitor temperature and emissions levels — features that are unique in the industry.",
            images: [],
            impact: []
        },
        {
            id: 3,
            slug: "sensible",
            title: "Sensible",
            category: "AI / Fintech / SaaS",
            description: "As the first designer at Sensible.so, I addressed key challenges related to user retention and engagement. Through data-driven user testing and strategic design improvements, I successfully increased retention and user satisfaction.",
            thumbnail: "/assets/project3.jpg",
            heroImage: "/assets/sensible-hero.png",
            companyType: "Startup, AI",
            role: "Senior/Lead Product Designer",
            team: "Product Managers + Engineers",
            platform: "Responsive Web",
            process: ["Research", "Ideation", "Prototyping", "Testing"],
            services: ["Product design", "UX Research", "Design System", "Growth Strategy"],
            achievements: [],
            problem: "Key Issues Identified:\n\nLow Retention and Engagement\nUsers were dropping off early in their journey, particularly during the onboarding process.\n\nTrust Barrier in AI Reliability\nUsers were hesitant to rely on the AI for critical document extractions, doubting its accuracy.\n\nInconsistent Design Language\nA fragmented visual and interaction design led to a lack of trust.\n\nNon-Optimized User Flows\nKey user flows were cumbersome and lacked intuitiveness.",
            challenge: "The onboarding flow was too lengthy and asked for unnecessary information upfront. Users were unclear about the value they would get after signing up. Users were hesitant to rely on the AI for critical document extractions and reviews, doubting its accuracy and feeling a lack of control.",
            designProcessContent: "Research\nConducted multiple user interviews. Analyzed quantitative data from onboarding funnel metrics. Benchmarked competitors' experience.\n\nIdeation\nGenerated ideas and selected the final concept.\n\nPrototyping\nCreated high-fidelity prototypes for testing.\n\nTesting\nConducted usability tests, gathered feedback, and made iterations.",
            details: "Revamping Onboarding to Improve Activation:\n\n• Fast Path to the \"Aha Moment\": Streamlined the flow to quickly demonstrate the app's core value.\n• Value Over Features: Focused on the benefits users gain, not just the features.\n• Interactive Onboarding: Introduced Template Library for hands-on exploration.\n• Self-Service Flow: Built a scalable, independent onboarding option.\n\nBuilding Trust to Retain Users:\n\n• AI Transparency Mechanisms: Introduced confidence signals for each data extraction.\n• Empowering Users Through Control: Added advanced settings to customize LLM behavior.\n• Human Review Features: Enabled users to interact with and correct AI outputs.",
            images: [
                { src: "/assets/sensible-dashboard.avif", caption: "Sensible Dashboard" },
                { src: "/assets/sensible-onboarding.avif", caption: "Streamlined Onboarding Flow" },
                { src: "/assets/sensible-ai-editor.avif", caption: "AI-Powered Document Editor" }
            ],
            impact: [
                { value: "35%", label: "Increase in Retention Rates" },
                { value: "50%", label: "Reduction in Support Requests" },
                { value: "40%", label: "Increase in Feature Adoption" }
            ]
        },
        {
            id: 4,
            slug: "backbase",
            title: "CMS for Banks",
            category: "Fintech / B2B / Banking",
            description: "Product Designer for Backbase's CMS for Banks. Banking Applications have features like A/B testing, Entitlements, Campaigns, Remote Config, Role/Policy Based Navigation, and behaviors based on audiences.",
            thumbnail: "/assets/project4.jpg",
            heroImage: "/assets/backbase-hero.jpg",
            companyType: "Fintech Software Provider ($63.9M/year)",
            role: "Product Designer",
            duration: "1 year (2019-2020)",
            platform: "Responsive Web",
            process: ["Discovery", "Research", "Design", "Test", "Build"],
            services: ["Product design", "UX/UI design", "Interaction design", "Co-creation workshops"],
            achievements: [
                { date: "2019", title: "Designed five complex and info-heavy applications for B2B users" },
                { date: "2019", title: "Built a scalable Design System" },
                { date: "2020", title: "Conducted countless User Testing sessions and Co-Creation workshops" },
                { date: "2020", title: "Established UX culture in a new B2B value stream" }
            ],
            problem: "Backbase is a fast-growing fintech software provider, creators of the Backbase Omni-Channel Banking Platform. Banking applications require complex features that can change frequently and results should be reflected instantly.",
            challenge: "I was heavily involved in research activities from creating prototypes to support testing right down to helping researchers take notes and synthesize results. Working closely with product owners, researchers, solution architects, engineers, and senior management.",
            details: "Key Projects:\n\n1. Customer Engagement App\nEngagement platform that enables interaction with customers across any digital channel.\n\n2. Content Approvals App\nContent Approvals app allows content managers to modify content and metadata on the production environment safely and isolated, send these changes for approval, and publish them.\n\n3. Design System\nCreated a scalable design system based on Material Design guidelines.",
            images: [
                { src: "/assets/backbase-typography.avif", caption: "Design System Typography" },
                { src: "/assets/backbase-screenshot.avif", caption: "CMS Application Interface" }
            ],
            impact: []
        }
    ]
};
