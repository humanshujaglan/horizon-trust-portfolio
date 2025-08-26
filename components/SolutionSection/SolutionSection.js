import React from 'react';
import check from '../../icons/icon_check.svg';
import sIcon1 from '../../icons/icon_man_question.svg';
import sIcon2 from '../../icons/icon_bulb.svg';
import Image from 'next/image';

const SolutionSection = () => {
    return (
        <section className="problem_solution_section section_space pb-0">
            <div className="container">

                <div className="ico_heading_block text-center" data-aos="fade-up" data-aos-duration="600">
                    <h2 className="heading_text mb-0">Horizon Trust Staking Challenges & Solutions</h2>
                </div>

                <div
                    className="ico_problem_solution_table"
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-delay="100"
                >
                    <div className="column_wrapper">
                        {/* Staking Platform Challenges */}
                        <div className="column_problem">
                            <h3 className="heading_text">
                                <span className="icon">
                                    <Image src={sIcon1} alt="Icon Man With Question" />
                                </span>
                                <span className="text">Staking Challenges</span>
                            </h3>
                            <ul className="iconlist_block unordered_list_block">
                                {[
                                    {
                                        label: 'Limited Earning Opportunities',
                                        info: 'Traditional staking offers only basic returns without referral benefits.',
                                    },
                                    {
                                        label: 'Complex Reward Distribution',
                                        info: 'Most platforms lack transparent multi-level reward systems.',
                                    },
                                    {
                                        label: 'Single Pool Limitations',
                                        info: 'Users restricted to one earning method without tier progression.',
                                    },
                                    {
                                        label: 'No Long-term Incentives',
                                        info: 'Platforms fail to reward user loyalty and network building.',
                                    },
                                ].map((item, index) => (
                                    <li key={index}>
                                        <span className="iconlist_icon">
                                            <Image src={check} alt="Icon Check" />
                                        </span>
                                        <span className="iconlist_label">
                                            {item.label}
                                            <small className="iconlist_info">{item.info}</small>
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Horizon Trust Solutions */}
                        <div className="column_solution">
                            <h3 className="heading_text">
                                <span className="icon">
                                    <Image src={sIcon2} alt="Icon Bulb" />
                                </span>
                                <span className="text">Our Solutions</span>
                            </h3>
                            <ul className="iconlist_block unordered_list_block">
                                {[
                                    {
                                        label: 'Multi-Stream Earning System',
                                        info: 'Direct (20%), Level (40%), and Pool rewards (40%) maximize income potential.',
                                    },
                                    {
                                        label: 'Transparent 12-Level Distribution',
                                        info: 'Smart contract ensures fair commission distribution across referral network.',
                                    },
                                    {
                                        label: 'Progressive Tier System',
                                        info: 'Silver (5x cap), Gold (10x cap), and Bronze pools unlock higher earning potential.',
                                    },
                                    {
                                        label: 'USDT BEP-20 Stability',
                                        info: 'Secure, stable token staking with automated reward distribution and upgradeable contracts.',
                                    },
                                ].map((item, index) => (
                                    <li key={index}>
                                        <span className="iconlist_icon">
                                            <Image src={check} alt="Icon Check" />
                                        </span>
                                        <span className="iconlist_label">
                                            {item.label}
                                            <small className="iconlist_info">{item.info}</small>
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SolutionSection;