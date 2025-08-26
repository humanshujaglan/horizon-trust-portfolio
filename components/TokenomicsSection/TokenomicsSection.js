import React from 'react';
import CountUp from 'react-countup';
import icon1 from '../../icons/icon_token_supply.svg';
import icon2 from '../../icons/icon_token_network.svg';
import icon3 from '../../icons/icon_estimated_launch_price.svg';
import icon4 from '../../icons/icon_expected_ripple_price.svg';
import mainimg from '/public/images/shapes/ico_coins_image.svg';
import Link from 'next/link';
import Image from 'next/image';


const stakingRewardsData = [
    { percent: '20%', title: 'Direct Staking Rewards' },
    { percent: '40%', title: 'Level Bonuses' },
    { percent: '20%', title: 'Bronze Pool Distribution' },
    { percent: '10%', title: 'Silver Pool Distribution' },
    { percent: '10%', title: 'Gold Pool Distribution' },
];


const stakingFeaturesData = [
    { icon: icon1, title: 'Minimum Stake', description: '100 USDT' },
    { icon: icon2, title: 'Token Standard', description: 'BEP-20 USDT' },
    { icon: icon4, title: 'Instant Referral Rewards', description: '20% of Amount' },
];

const TokenomicsSection = () => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
      }

    return (
        <section id="id_ico_tokenomics_section" className="ico_tokenomics_section section_space pb-0">
            <div className="container">
                <div className="ico_heading_block text-center" data-aos="fade-up" data-aos-duration="600">
                    <h2 className="heading_text mb-0">Staking Rewards Distribution</h2>
                </div>

                <div className="row align-items-center">
                    <div className="col-lg-4 position-relative z-1">
                        <ul className="tokenomics_block unordered_list_block">
                            {stakingRewardsData.map((item, index) => (
                                <li key={index} data-aos="fade-up" data-aos-duration="600" data-aos-delay={100 * (index + 1)}>
                                    <div className="percent">{item.percent}</div>
                                    <div className="info">
                                        <h4 className="heading_text">{item.title}</h4>
                                        {/* <div className="value">[<span className="odometer" data-count={item.count}><CountUp end={item.count} enableScrollSpy scrollSpyOnce/></span><span>% APY</span>]</div> */}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-lg-4">
                        <div className="icon_coins_image">
                            <Image src={mainimg} alt="ICO Coin" />
                        </div>
                    </div>

                    <div className="col-lg-4 position-relative z-1">
                        <ul className="ico_features_group unordered_list_block">
                            {stakingFeaturesData.map((feature, index) => (
                                <li key={index} data-aos="fade-up" data-aos-duration="600" data-aos-delay={100 * (index + 1)}>
                                    <div className="ico_iconbox_icon_left">
                                        <div className="iconbox_icon">
                                            <Image src={feature.icon} alt={feature.title}/>
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
                </div>

                <div className="btns_group pb-0 justify-content-center" data-aos="fade-up" data-aos-duration="600">
                    <Link className="ico_creative_btn" href="#id_ico_about_section" onClick={ClickHandler}>
                        <span className="btn_wrapper">
                            <span className="btn_icon_left">
                                <small className="dot_top"></small>
                                <small className="dot_bottom"></small>
                                <svg className="icon_arrow_left" viewBox="0 0 28 23" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.4106 20.8083L5.36673 12.6878C5.26033 12.5804 5.11542 12.52 4.96423 12.52H1.84503C1.34158 12.52 1.08822 13.1276 1.44252 13.4852L9.48642 21.6057C9.59281 21.7131 9.73773 21.7736 9.88892 21.7736H13.0081C13.5116 21.7736 13.7649 21.166 13.4106 20.8083Z" />
                                    <path d="M12.6803 9.57324H24.71C25.7116 9.57324 26.5234 10.3851 26.5234 11.3866C26.5234 12.3882 25.7116 13.2 24.71 13.2H12.6803C11.6788 13.2 10.8669 12.3882 10.8669 11.3866C10.8669 10.3851 11.6788 9.57324 12.6803 9.57324Z" />
                                    <path d="M1.44252 9.28834L9.48641 1.16784C9.59281 1.06043 9.73772 1 9.88891 1H13.0081C13.5116 1 13.7649 1.60758 13.4106 1.96525L5.36672 10.0858C5.26033 10.1932 5.11541 10.2536 4.96422 10.2536H1.84502C1.34158 10.2536 1.08822 9.64601 1.44252 9.28834Z" />
                                </svg>
                            </span>
                            <span className="btn_label">Start Staking Now</span>
                            <span className="btn_icon_right">
                                <small className="dot_top"></small>
                                <small className="dot_bottom"></small>
                                <svg className="icon_arrow_right" viewBox="0 0 27 23" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.6558 2.19168L21.6997 10.3122C21.8061 10.4196 21.951 10.48 22.1022 10.48H25.2214C25.7248 10.48 25.9782 9.87238 25.6239 9.51478L17.58 1.39428C17.4736 1.28688 17.3287 1.22638 17.1775 1.22638H14.0583C13.5548 1.22638 13.3015 1.83398 13.6558 2.19168Z" />
                                    <path d="M14.3861 13.4268H2.35637C1.35486 13.4268 0.542969 12.6149 0.542969 11.6134C0.542969 10.6118 1.35486 9.79996 2.35637 9.79996H14.3861C15.3876 9.79996 16.1995 10.6118 16.1995 11.6134C16.1995 12.6149 15.3876 13.4268 14.3861 13.4268Z" />
                                    <path d="M25.6239 13.7117L17.58 21.8322C17.4736 21.9396 17.3287 22 17.1775 22H14.0583C13.5548 22 13.3015 21.3924 13.6558 21.0347L21.6997 12.9142C21.8061 12.8068 21.951 12.7464 22.1022 12.7464H25.2214C25.7248 12.7464 25.9782 13.354 25.6239 13.7117Z" />
                                </svg>
                            </span>
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default TokenomicsSection;

