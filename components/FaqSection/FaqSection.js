import React, { useState } from "react";

const FAQSection = () => {
    const [activeTab, setActiveTab] = useState("tab_general_question");
    const [activeAccordion, setActiveAccordion] = useState("collapse_1");

    const toggleTab = (tabId) => {
        setActiveTab(tabId);
    };

    const toggleAccordion = (accordionId) => {
        setActiveAccordion(accordionId === activeAccordion ? "" : accordionId);
    };

    // Array of General Staking questions
    const generalQuestions = [
        "What is Horizon Trust USDT Staking?",
        "How can I start staking USDT on Horizon Trust?",
        "What is the stake unit amount?",
        "Do I need a sponsor to register?",
        "How are the fees structured?",
    ];

    // Array of Rewards questions
    const rewardsQuestions = [
        "How are rewards distributed?",
        "What are direct referral rewards?",
        "How do level bonuses work?",
        "What are the different pool rewards?",
        "What is the minimum claim amount?",
    ];

    // Array of Technical questions
    const technicalQuestions = [
        "Which USDT token standard is supported?",
        "How secure is the staking smart contract?",
        "What are the different user tiers?",
        "How do Silver, Gold, and Bronze pools work?",
        "When do I become eligible for Bronze rewards?",
    ];

    // Array of Support Related questions
    const supportQuestions = [
        "How can I contact Horizon Trust for support?",
        "What wallets are compatible with the platform?",
        "How do I check my tier eligibility?",
        "What happens to unclaimed rewards?",
        "Can I stake multiple times?",
    ];

    // FAQ Answers mapped to contract mechanics
    const faqAnswers = {
        general: [
            "Horizon Trust USDT Staking is a multi-tier reward platform where users stake USDT tokens and earn through direct referrals (20%), level bonuses (40%), and pool distributions (40%). The system uses a referral-based structure with Silver, Gold, and Bronze tiers.",
            "To start staking, you must first register with a valid sponsor who already has an active stake. Once registered, you can stake in units of 103 USDT (100 USDT net stake + 3 USDT fee) to begin earning rewards.",
            "Each stake unit costs 103 USDT, which includes 100 USDT as your net stake and 3 USDT as a processing fee that goes to the system. You can stake multiple units to increase your earning potential.",
            "Yes, registration requires a sponsor who is already registered and has an active stake. You cannot register without a valid sponsor, and you cannot sponsor yourself. This creates the referral network structure.",
            "For each 103 USDT stake unit, 3 USDT (approximately 2.9%) goes as a fee to the system, and 100 USDT becomes your active stake that earns rewards. There are no additional fees for claiming rewards above 5 USDT."
        ],
        rewards: [
            "Rewards are distributed as follows: 20% goes directly to your sponsor, 40% is distributed across 12 levels of upline sponsors, and 40% is distributed among pool participants based on their tier eligibility and stake amount.",
            "Direct referral rewards give your sponsor 20% of your net stake amount immediately when you stake. This creates an instant reward for successful referrals and network building.",
            "Level bonuses distribute 40% of each stake across 12 levels of sponsors above you. Each level receives different percentages, with higher levels (1-4) receiving 5% each, mid levels (5-8) receiving 3% each, and lower levels (9-12) receiving 2% each.",
            "There are three pool rewards: Silver Pool (10% distribution for users with 5+ referrals), Gold Pool (10% distribution for users with 10+ referrals), and Bronze Pool (20% distribution for users with stakes older than 30 days).",
            "The minimum claim amount is 5 USDT. You cannot claim rewards below this threshold from any of the pools. This prevents small, uneconomical transactions."
        ],
        technical: [
            "The platform supports USDT BEP-20 tokens.",
            "The contract uses industry-standard security practices including ReentrancyGuard, SafeERC20 for token transfers, and Ownable access control.",
            "There are three tiers: Silver (requires 5+ direct referrals + active stake, provides 5x earning cap), Gold (requires 10+ direct referrals + active stake, provides 10x earning cap), and Bronze (requires 30+ days since first stake, provides 2x earning cap).",
            "Pool eligibility is automatic: Silver tier users with 5+ referrals share the Silver pool rewards, Gold tier users with 10+ referrals share both Silver and Gold pools, and users with stakes 30+ days old can claim from the Bronze pool based on their stake weight.",
            "Bronze eligibility activates automatically 30 days after your first stake. However, you need to click on button \"Refresh Status\" or interact with the contract (stake/claim) to activate your eligibility and start earning from the Bronze pool."
        ],
        support: [
            "You can contact Horizon Trust support through our official website support channels. Always verify you're using official communication channels to avoid scams and ensure the security of your funds.",
            "The platform is compatible with any wallet that supports USDT BEP-20 tokens and can interact with smart contracts, such as MetaMask, Trust Wallet, and other Web3-enabled wallets.",
            "You can check your tier eligibility by viewing your direct referral count and stake age. Silver requires 5+ referrals, Gold requires 10+ referrals, and Bronze requires 30+ days since first stake. The contract provides view functions to check your status.",
            "Unclaimed rewards remain in the pools and continue to accumulate. However, you must have at least 5 USDT in pending rewards to claim. If you don't meet tier requirements, those rewards will stay in system",
            "Yes, you can stake multiple times. Each stake creates a new stake record with its own timestamp. Multiple stakes increase your total staked amount, which increases your share of pool rewards and your earning cap based on your tier multiplier."
        ]
    };

    const getCurrentQuestions = () => {
        switch(activeTab) {
            case "tab_general_question": return generalQuestions;
            case "tab_ico_questions": return rewardsQuestions;
            case "tab_tokens_sales": return technicalQuestions;
            case "tab_clients_releted": return supportQuestions;
            default: return generalQuestions;
        }
    };

    const getCurrentAnswers = () => {
        switch(activeTab) {
            case "tab_general_question": return faqAnswers.general;
            case "tab_ico_questions": return faqAnswers.rewards;
            case "tab_tokens_sales": return faqAnswers.technical;
            case "tab_clients_releted": return faqAnswers.support;
            default: return faqAnswers.general;
        }
    };

    const currentQuestions = getCurrentQuestions();
    const currentAnswers = getCurrentAnswers();

    return (
        <section className="faq_section section_space" id="id_ico_faq_section">
            <div className="container">
                <div className="ico_heading_block text-center" data-aos="fade-up" data-aos-duration="800">
                    <h2 className="heading_text mb-0">FAQ</h2>
                </div>

                <div className="tab_block" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
                    <div className="d-flex justify-content-center ">
                        <ul className="nav unordered_list justify-content-center align-items-center" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button
                                    className={`nav-link ${activeTab === "tab_general_question" ? "active" : ""}`}
                                    type="button"
                                    role="tab"
                                    onClick={() => toggleTab("tab_general_question")}
                                >
                                    General
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className={`nav-link ${activeTab === "tab_ico_questions" ? "active" : ""}`}
                                    type="button"
                                    role="tab"
                                    onClick={() => toggleTab("tab_ico_questions")}
                                >
                                    Rewards
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className={`nav-link ${activeTab === "tab_tokens_sales" ? "active" : ""}`}
                                    type="button"
                                    role="tab"
                                    onClick={() => toggleTab("tab_tokens_sales")}
                                >
                                    Technical
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className={`nav-link ${activeTab === "tab_clients_releted" ? "active" : ""}`}
                                    type="button"
                                    role="tab"
                                    onClick={() => toggleTab("tab_clients_releted")}
                                >
                                    Support
                                </button>
                            </li>
                        </ul>
                    </div>

                    <div className="tab-content">
                        {/* Current Active Tab */}
                        <div className={`tab-pane fade show active`} role="tabpanel">
                            <div className="ico_accordion" id="accordion_current">
                                {currentQuestions.map((question, index) => {
                                    const collapseId = `collapse_${activeTab}_${index + 1}`;
                                    return (
                                        <div className="accordion-item" key={collapseId}>
                                            <div
                                                className={`icon_arrow ${activeAccordion === collapseId ? "collapsed" : ""}`}
                                                role="button"
                                                onClick={() => toggleAccordion(collapseId)}
                                            >
                                                <svg viewBox="0 0 23 27" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10 14.597L10 2.56731C10 1.56579 10.8115 0.753906 11.8125 0.753906C12.8134 0.753906 13.6249 1.56579 13.6249 2.56731L13.6249 14.597C13.6249 15.5985 12.8134 16.4104 11.8125 16.4104C10.8115 16.4104 10 15.5985 10 14.597Z" />
                                                    <path d="M9.71371 25.8348L1.59744 17.7909C1.49009 17.6845 1.42969 17.5396 1.42969 17.3884L1.42969 14.2693C1.42969 13.7658 2.03695 13.5125 2.39443 13.8668L10.5108 21.9106C10.6181 22.017 10.6785 22.1619 10.6785 22.3131L10.6785 25.4323C10.6785 25.9358 10.0712 26.1891 9.71371 25.8348Z" />
                                                    <path d="M21.2273 13.8668L13.1111 21.9106C13.0037 22.017 12.9434 22.1619 12.9434 22.3131L12.9434 25.4323C12.9434 25.9358 13.5506 26.1891 13.9081 25.8348L22.0243 17.7909C22.1317 17.6845 22.1921 17.5396 22.1921 17.3884L22.1921 14.2693C22.1921 13.7658 21.5849 13.5125 21.2273 13.8668Z" />
                                                </svg>
                                            </div>
                                            <div
                                                className={`accordion-button ${activeAccordion === collapseId ? "" : "collapsed"}`}
                                                role="button"
                                                onClick={() => toggleAccordion(collapseId)}
                                            >
                                                {`${index + 1}- ${question}`}
                                            </div>
                                            <div id={collapseId} className={`accordion-collapse collapse ${activeAccordion === collapseId ? "show" : ""}`} data-bs-parent="#accordion_current">
                                                <div className="accordion-body">
                                                    <p>
                                                        {currentAnswers[index]}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default FAQSection;
