import React from 'react'
import about1 from '/public/images/about/about_image.svg'
import shape from '/public/images/shapes/shape_poligon.svg'
import Image from 'next/image'

const About = (props) => {

    return (
        <section id="id_ico_about_section" className={`ico_about_section section_space pb-0 section_decoration ${props.abClass}`}>
            <div className="container">
                <div className="row justify-content-lg-between">
                    <div className="col-lg-6">
                        <div className="ico_heading_block" data-aos="fade-up" data-aos-duration="600">
                            <h2 className="heading_text mb-0">
                                Introducing Horizon Trust USDT Staking
                            </h2>
                        </div>
                        <ul className="about_ico_block unordered_list_block">
                            <li data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">

                                <h3 className="title_text">
                                    What is USDT Staking?
                                </h3>
                                <p className="info_description mb-0">
                                    USDT staking on Horizon Trust allows you to stake tokens in units of 103 USDT (100 USDT net stake + 3 USDT Platform fee) and earn rewards through our multi-tier distribution system including direct, level, and pool-based rewards.
                                </p>
                            </li>
                            <li data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">

                                <h3 className="title_text">
                                    How does it work?
                                </h3>
                                <p className="info_description mb-0">
                                    Simply register with a sponsor and stake USDT tokens to earn through multiple streams: 20% direct referral rewards, 40% level bonuses distributed across 12 levels, and 40% through Silver, Gold, and Bronze pool distributions based on your tier eligibility.
                                </p>
                            </li>
                            <li data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">

                                <h3 className="title_text">
                                    Why choose Horizon Trust?
                                </h3>
                                <p className="info_description mb-0">
                                    Horizon Trust offers a comprehensive reward system with tier-based benefits. Silver tier (5+ referrals) provides 5x stake caps and pool access, Gold tier (10+ referrals) offers 10x caps, and Bronze tier (30+ days) unlocks additional pool rewards.
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-5 d-lg-flex flex-lg-column-reverse">
                        <ul className="about_ico_block unordered_list_block">
                            <li data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
                                <h3 className="title_text">
                                    Market Opportunity
                                </h3>
                                <p className="info_description mb-0">
                                    The referral-based staking market offers unique earning opportunities through network effects. With minimum claims of 0 USDT and structured reward distribution, Horizon Trust provides multiple income streams through direct sponsorship, level bonuses, and exclusive tier-based pool rewards for qualified participants.
                                </p>
                            </li>
                        </ul>
                        <div className="ico_about_image text-center">
                            <div className="ripple_shape mb-lg-5">
                                <svg viewBox="0 0 501 455" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M500.5 227.5C500.5 352.824 388.618 454.5 250.5 454.5C112.382 454.5 0.5 352.824 0.5 227.5C0.5 102.176 112.382 0.5 250.5 0.5C388.618 0.5 500.5 102.176 500.5 227.5Z" stroke="url(#sro_paint0)" />
                                    <path d="M463.5 247.5C463.5 361.81 368.15 454.5 250.5 454.5C132.85 454.5 37.5 361.81 37.5 247.5C37.5 133.19 132.85 40.5 250.5 40.5C368.15 40.5 463.5 133.19 463.5 247.5Z" stroke="url(#sro_paint1)" />
                                    <path d="M425.5 268C425.5 371.031 347.12 454.5 250.5 454.5C153.88 454.5 75.5 371.031 75.5 268C75.5 164.969 153.88 81.5 250.5 81.5C347.12 81.5 425.5 164.969 425.5 268Z" stroke="url(#sro_paint2)" />
                                    <path d="M379.5 268C379.5 343.97 321.715 405.5 250.5 405.5C179.285 405.5 121.5 343.97 121.5 268C121.5 192.03 179.285 130.5 250.5 130.5C321.715 130.5 379.5 192.03 379.5 268Z" stroke="url(#sro_paint3)" />
                                    <defs>
                                        <linearGradient id="sro_paint0" x1="250.5" y1="0" x2="250.5" y2="455" gradientUnits="userSpaceOnUse">
                                            <stop offset="0" stopColor="#2A246D" />
                                            <stop offset="1" stopColor="#2A246D" stopOpacity="0" />
                                        </linearGradient>
                                        <linearGradient id="sro_paint1" x1="250.5" y1="40" x2="250.5" y2="455" gradientUnits="userSpaceOnUse">
                                            <stop offset="0" stopColor="#2A246D" />
                                            <stop offset="1" stopColor="#2A246D" stopOpacity="0" />
                                        </linearGradient>
                                        <linearGradient id="sro_paint2" x1="250.5" y1="81" x2="250.5" y2="455" gradientUnits="userSpaceOnUse">
                                            <stop offset="0" stopColor="#2A246D" />
                                            <stop offset="1" stopColor="#2A246D" stopOpacity="0" />
                                        </linearGradient>
                                        <linearGradient id="sro_paint3" x1="250.5" y1="130" x2="250.5" y2="406" gradientUnits="userSpaceOnUse">
                                            <stop offset="0" stopColor="#2A246D" />
                                            <stop offset="1" stopColor="#2A246D" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <div className="coin_image">
                                <Image src={about1} alt="About" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="decoration_item shape_shadow_1">
                <Image src={shape} alt="Shape Color Shadow" />
            </div>
            <div className="decoration_item shape_shadow_2">
                <Image src={shape} alt="Shape Color Shadow" />
            </div>
        </section>
    )
}


export default About;

