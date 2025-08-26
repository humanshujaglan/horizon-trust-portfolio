import React from 'react';
import CountUp from 'react-countup';
import icon1 from '../../icons/icon_dollar.svg';
import icon2 from '../../icons/icon_chart.svg';
import icon3 from '../../icons/icon_gift.svg';
import shape1 from '/public/images/shapes/shape_chart.svg';
import shape2 from '/public/images/shapes/shape_range.svg';
import shape3 from '/public/images/shapes/shape_poligon.svg';
import Image from 'next/image';

const features = [
    {
        icon: icon1,
        title: 'Stable Returns',
        description: 'Multi-tier earning system with direct, level, and pool rewards',
    },
    {
        icon: icon2,
        title: 'Multiple Income Streams',
        description: 'Direct income (20%), level bonuses (40%), and pool rewards (40%)',
    },
    {
        icon: icon3,
        title: 'Referral Rewards',
        description: 'Silver, Gold, and Bronze pool distributions',
    },
];

const FeaturesSection = () => {
    
    return (
        <section className="ico_feature_section section_space section_decoration">
            <div className="container">
                <div className="ico_heading_block" data-aos="fade-up" data-aos-duration="600">
                    <h2 className="heading_text mb-0">Why Choose Horizon Trust USDT Staking?</h2>
                </div>
                <div className="row justify-content-lg-between">
                    {/* Left Side - Features List */}
                    <div className="col-lg-5">
                        <ul className="ico_features_group unordered_list_block">
                            {features.map((feature, index) => (
                                <li key={index} data-aos="fade-up" data-aos-duration="600" data-aos-delay={`${(index + 1) * 100}`}>
                                    <div className="ico_iconbox_icon_left">
                                        <div className="iconbox_icon">
                                            <Image src={feature.icon} alt={`Icon ${feature.title}`} />
                                        </div>
                                        <div className="iconbox_info">
                                            <h3 className="iconbox_title">{feature.title}</h3>
                                            <p className="iconbox_description mb-0">{feature.description}</p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Side - Investment Details */}
                    <div className="col-lg-6" style={{padding: '0 55px'}}>
                        {/* Staking Details */}
                        <div className="ico_coin_purchase_price" data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
                            <p className="purchase_price_rate mb-0 text-secondary">
                                Stake Unit Amount <strong>103 USDT</strong>
                            </p>
                            <div className="chart_image">
                                <Image src={shape1} alt="Shape Chart" />
                            </div>
                            <div className="live_values">
                                <span>Min. Claim: 5 USDT</span>
                                <span>Fee per Unit: 3 USDT</span>
                            </div>
                        </div>

                        {/* Pool Distribution */}
                        <div className="ico_calculation_range" data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
                            <div className="live_values">
                                <span>Pool Distribution</span>
                                <span>Tier Requirements</span>
                            </div>
                            <div className="range_image">
                                <Image src={shape2} alt="Shape Range" />
                            </div>
                            <div className="live_values">
                                <span>Silver: 5 Refs</span>
                                <span>Gold: 10 Refs</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorations */}
            <div className="decoration_item shape_shadow_1">
                <Image src={shape3} alt="Shape Color Shadow" />
            </div>
            <div className="decoration_item shape_shadow_2">
                <Image src={shape3} alt="Shape Color Shadow" />
            </div>
        </section>
    );
};

export default FeaturesSection;