import React from 'react';

// Import images
import eventImage1 from '/public/images/events/event1.png';
import eventImage2 from '/public/images/events/event2.png';
import eventImage3 from '/public/images/events/event3.png';
import eventImage4 from '/public/images/events/event4.png';
import shapeSectionDivider from '/public/images/shapes/shape_section_divider_2.svg';
import shapePoligon from '/public/images/shapes/shape_poligon.svg';
import Link from 'next/link';
import Image from 'next/image';

const events = [
  {
    id: 4,
    date: 'Available Now',
    location: 'Horizon Trust Platform',
    title: 'USDT BEP-20 Staking - Earn Multi-Level Rewards Today',
    description: 'Start earning with our current staking platform featuring Direct, Level, Silver, Gold & Bronze pools.',
    imageUrl: eventImage1,
    ticketUrl: 'https://stake.horizontrust.biz',
    status: 'active',
    priority: 'high'
  },
  {
    id: 1,
    date: 'Q2 2026',
    location: 'Horizon Trust Platform',
    title: 'Horizon Trust Token Launch - Revolutionary Staking Ecosystem',
    description: 'Join our native token launch featuring multi-tier staking rewards with USDT BEP-20 compatibility.',
    imageUrl: eventImage2,
    ticketUrl: '/',
    status: 'upcoming',
    priority: 'high'
  },
  {
    id: 2,
    date: 'Q2 2026',
    location: 'Global Launch Event',
    title: 'Initial Token Offering (ITO) - Exclusive Early Access',
    description: 'Participate in our ITO with special bonuses for existing stakers and referral network members.',
    imageUrl: eventImage3,
    ticketUrl: '/',
    status: 'upcoming',
    priority: 'high'
  },
  {
    id: 3,
    date: 'Q1 2027',
    location: 'Decentralized Exchange',
    title: 'Horizon Trust DEX Launch - Trade with Zero Fees',
    description: 'Experience seamless trading on our proprietary DEX with integrated staking rewards.',
    imageUrl: eventImage4,
    ticketUrl: '/',
    status: 'roadmap',
    priority: 'medium'
  },
];

const EventSection = () => {

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  }

  const getStatusBadge = (status) => {
    const statusConfig = {
      'active': { text: 'Live Now', class: 'status_active' },
      'upcoming': { text: 'Coming Soon', class: 'status_upcoming' },
      'roadmap': { text: 'Roadmap', class: 'status_roadmap' }
    };
    return statusConfig[status] || { text: 'Update', class: 'status_default' };
  };

  return (
    <section id='id_ico_event_section' className="ico_event_section section_space pb-0 section_decoration mt-lg-5">
      <div className="container">
        <div className="ico_heading_block text-center mt-lg-5 pt-lg-5" data-aos="fade-up" data-aos-duration="800">
          <div className="platform_intro mb-3">
            <span className="platform_badge">Horizon Trust Ecosystem</span>
          </div>
          <h2 className="heading_text mb-3">Our Platform Roadmap & Current Features</h2>
          <p className="heading_description">
            Experience multi-level staking rewards with USDT BEP-20 tokens while we prepare for our native token launch and DEX
          </p>
        </div>

        <div className="row">
          <div className="col-lg-6 order-lg-last">
            <ul className="event_loop_builder unordered_list_block">
              {events.slice(0, 1).map((event, index) => {
                const statusBadge = getStatusBadge(event.status);
                return (
                  <li key={event.id} data-aos="fade-up" data-aos-duration="800" data-aos-delay={`${100 * (index + 1)}`}>
                    <div className={`event_card_block ${event.priority === 'high' ? 'priority_high' : ''}`}>
                      <Link onClick={ClickHandler} className="event_image" href={event.ticketUrl}>
                        <Image src={event.imageUrl} alt="Horizon Trust Event" />
                      </Link>
                      {/* <div className="event_date">
                        <i className="fa-solid fa-calendar-days"></i>
                        <span>{event.date}</span>
                      </div> */}
                      <div className="event_info">
                        <div className="event_location">
                          <i className="fa-regular fa-location-dot"></i>
                          {event.location}
                        </div>
                        <h3 className="event_title">
                          <Link onClick={ClickHandler} href={event.ticketUrl}>{event.title}</Link>
                        </h3>
                        <p className="event_description mb-3">
                          {event.description}
                        </p>
                        
                        {/* Enhanced Card Details */}
                        <div className="event_highlights mb-4">
                          <div className="highlight_item">
                            <i className="fa-solid fa-coins"></i>
                            <span>Native Token Launch</span>
                          </div>
                          <div className="highlight_item">
                            <i className="fa-solid fa-users"></i>
                            <span>Multi-Level Rewards</span>
                          </div>
                          <div className="highlight_item">
                            <i className="fa-solid fa-chart-line"></i>
                            <span>Staking Ecosystem</span>
                          </div>
                        </div>

                        <div className="event_stats mb-4">
                          <div className="stat_row">
                            <div className="stat_item">
                              <span className="stat_label">Token Type:</span>
                              <span className="stat_value">BEP-20</span>
                            </div>
                            <div className="stat_item">
                              <span className="stat_label">Platform:</span>
                              <span className="stat_value">Horizon Trust</span>
                            </div>
                          </div>
                          <div className="stat_row">
                            <div className="stat_item">
                              <span className="stat_label">Current Staking:</span>
                              <span className="stat_value">USDT Available</span>
                            </div>
                            <div className="stat_item">
                              <span className="stat_label">Reward Pools:</span>
                              <span className="stat_value">5 Types</span>
                            </div>
                          </div>
                        </div>

                        <Link onClick={ClickHandler} className={`ico_btn_link ${event.status === 'active' ? 'btn_primary' : 'btn_secondary'}`} href={event.ticketUrl}>
                          <span className="btn_label">
                            {event.status === 'active' ? 'Start Staking' : 'Get Notified'}
                          </span>
                          <span className="btn_icon">
                            <svg className="icon_arrow" viewBox="0 0 27 23" xmlns="http://www.w3.org/2000/svg">
                              <path d="M13.6558 2.19168L21.6997 10.3122C21.8061 10.4196 21.951 10.48 22.1022 10.48H25.2214C25.7248 10.48 25.9782 9.87238 25.6239 9.51478L17.58 1.39428C17.4736 1.28688 17.3287 1.22638 17.1775 1.22638H14.0583C13.5548 1.22638 13.3015 1.83398 13.6558 2.19168Z"></path>
                              <path d="M14.3861 13.4268H2.35637C1.35486 13.4268 0.542969 12.6149 0.542969 11.6134C0.542969 10.6118 1.35486 9.79996 2.35637 9.79996H14.3861C15.3876 9.79996 16.1995 10.6118 16.1995 11.6134C16.1995 12.6149 15.3876 13.4268 14.3861 13.4268Z"></path>
                              <path d="M25.6239 13.7117L17.58 21.8322C17.4736 21.9396 17.3287 22 17.1775 22H14.0583C13.5548 22 13.3015 21.3924 13.6558 21.0347L21.6997 12.9142C21.8061 12.8068 21.951 12.7464 22.1022 12.7464H25.2214C25.7248 12.7464 25.9782 13.354 25.6239 13.7117Z"></path>
                            </svg>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="col-lg-6">
            <ul className="event_loop_builder unordered_list_block">
              {events.slice(1).map((event, index) => {
                const statusBadge = getStatusBadge(event.status);
                return (
                  <li key={event.id} data-aos="fade-up" data-aos-duration="800" data-aos-delay={`${100 * (index + 1)}`}>
                    <div className="event_block_left_image">
                      <Link onClick={ClickHandler} className="event_image" href={event.ticketUrl}>
                        <Image src={event.imageUrl} alt="Horizon Trust Roadmap" />
                        <span className="event_date">{event.date}</span>
                        <div className={`event_status_badge ${statusBadge.class}`}>
                          {statusBadge.text}
                        </div>
                      </Link>
                      <div className="event_info">
                        <div className="event_location">
                          <i className="fa-regular fa-location-dot"></i>
                          {event.location}
                        </div>
                        <h3 className="event_title mb-2">
                          <Link onClick={ClickHandler} href={event.ticketUrl}>{event.title}</Link>
                        </h3>
                        <p className="event_description_small mb-0">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        
      </div>

      <div className="decoration_item shape_divider_1">
        <Image src={shapeSectionDivider} alt="Shape Divider" />
      </div>
      <div className="decoration_item shape_shadow_1">
        <Image src={shapePoligon} alt="Shape Color Shadow" />
      </div>
      <div className="decoration_item shape_shadow_2">
        <Image src={shapePoligon} alt="Shape Color Shadow" />
      </div>

      <style jsx>{`
        .platform_badge {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 8px 20px;
          border-radius: 25px;
          font-size: 14px;
          font-weight: 600;
          display: inline-block;
        }

        .heading_description {
          color: #666;
          font-size: 16px;
          max-width: 600px;
          margin: 0 auto;
        }

        .event_status_badge {
          position: absolute;
          top: 15px;
          right: 15px;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          z-index: 2;
        }

        .status_active {
          background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
          color: white;
        }

        .status_upcoming {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        .status_roadmap {
          background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
          color: #333;
        }

        .priority_high {
          border: 2px solid #667eea;
          border-radius: 15px;
        }

        .event_description {
          color: #666;
          font-size: 14px;
          line-height: 1.5;
        }

        .event_description_small {
          color: #666;
          font-size: 13px;
          line-height: 1.4;
        }

        .current_platform_highlight {
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          padding: 30px;
          border-radius: 15px;
          margin-top: 50px;
        }

        .platform_title {
          color: #333;
          font-size: 24px;
          margin-bottom: 20px;
        }

        .feature_list {
          list-style: none;
          padding: 0;
          color: white;
        }

        .feature_list li {
          padding: 8px 0;
          color: white;
          font-size: 14px;
        }

        .feature_list li i {
          color: #11998e;
          margin-right: 10px;
          width: 16px;
        }

        .btn_primary {
          background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
        }

        .btn_secondary {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        .ico_btn_primary {
          background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
          color: white;
          padding: 15px 30px;
          border-radius: 50px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .ico_btn_primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(17, 153, 142, 0.3);
          color: white;
          text-decoration: none;
        }

        .event_highlights {
          display: flex;
          gap: 15px;
          flex-wrap: wrap;
          margin-bottom: 20px;
        }

        .highlight_item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 15px;
          background: linear-gradient(135deg, #f8f9ff 0%, #e8f2ff 100%);
          border-radius: 20px;
          font-size: 13px;
          font-weight: 600;
          color: #333;
          border: 1px solid #e1e8ff;
        }

        .highlight_item i {
          color: #667eea;
          font-size: 14px;
        }

        .event_stats {
          padding: 20px;
          border-radius: 12px;
          // border: 1px solid #dee2e6;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          color: white;
          width: 100%;
        }

        .stat_row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 12px;
        }

        .stat_row:last-child {
          margin-bottom: 0;
        }

        .stat_item {
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .stat_label {
          font-size: 12px;
          color: white;
          font-weight: 500;
          margin-bottom: 4px;
        }

        .stat_value {
          font-size: 14px;
          font-weight: 700;
          color: white;
        }

        .event_features {
          background: rgba(255, 228, 196, 0.1);
          color: white;
          padding: 20px;
          border-radius: 12px;
          // border: 1px solid #ffe4cc;
          backdrop-filter: blur(10px);
        }

        .features_title {
          font-size: 16px;
          font-weight: 700;
          color: #333;
          margin-bottom: 15px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .features_title:before {
          content: "⭐";
          font-size: 18px;
        }

        .features_list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .features_list li {
          padding: 6px 0;
          font-size: 14px;
          color: #555;
          position: relative;
          padding-left: 20px;
        }

        .features_list li:before {
          content: "✓";
          position: absolute;
          left: 0;
          color: #28a745;
          font-weight: bold;
          font-size: 14px;
        }
      `}</style>
    </section>
  );
};


export default EventSection;



