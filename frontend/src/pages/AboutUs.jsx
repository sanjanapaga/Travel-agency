import React from 'react';
import { Typography, Row, Col, Card, Tag, Space } from 'antd';
import { SafetyCertificateOutlined, TeamOutlined, RocketOutlined, ArrowRightOutlined } from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

const AboutUs = () => {
    return (
        <div className="fade-in-up">
            <div className="section-header" style={{ textAlign: 'left', marginBottom: 60 }}>
                <Tag color="blue" className="premium-tag">OUR STORY</Tag>
                <Title level={1} className="responsive-title" style={{ fontWeight: 900, marginTop: 10, letterSpacing: '-2px' }}>
                    We're Redefining <br /><span className="text-gradient-blue">The Travel Experience</span>
                </Title>
                <Paragraph className="responsive-paragraph" style={{ color: '#475569', maxWidth: 800 }}>
                    Jyothu Travels and Tourism is more than just a car rental service. We are your partners in creating
                    stories that last a lifetime, driven by a passion for excellence and a commitment to your comfort.
                </Paragraph>
            </div>

            <Row gutter={[40, 40]} align="middle">
                <Col xs={24} lg={11}>
                    <Title level={2} style={{ fontWeight: 800, fontSize: 'clamp(28px, 4vw, 36px)', marginBottom: 30 }}>
                        Driven by Passion, <br /><span style={{ color: 'var(--accent)' }}>Guided by Excellence.</span>
                    </Title>
                    <Paragraph style={{ fontSize: '18px', lineHeight: '1.8', color: '#1e293b', marginBottom: 25 }}>
                        Founded over a decade ago in Hubli, Jyothu Travels and Tourism started with a simple vision:
                        to provide a travel service that treats every passenger like family. Today, we stand as a
                        symbol of reliability and luxury in the region.
                    </Paragraph>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '20px', marginTop: 40 }}>
                        <div className="stat-box-simple">
                            <Title level={2} style={{ margin: 0, color: 'var(--primary)' }}>10k+</Title>
                            <Text type="secondary" strong>Trips Completed</Text>
                        </div>
                        <div className="stat-box-simple">
                            <Title level={2} style={{ margin: 0, color: 'var(--success)' }}>99%</Title>
                            <Text type="secondary" strong>Customer Satisfaction</Text>
                        </div>
                    </div>
                </Col>
                <Col xs={24} lg={13}>
                    <div className="about-image-single-container">
                        <img
                            src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1200&auto=format&fit=crop"
                            alt="Scenic Road Journey"
                            className="about-single-image"
                        />
                        <div className="about-image-accent-box"></div>
                    </div>
                </Col>
            </Row>

            <div className="journey-road-container">
                <div className="road-text-overlay">
                    <Tag className="premium-tag">OUR JOURNEY</Tag>
                    <h2>Thousands of Miles, <br />Millions of Memories</h2>
                </div>

                <div className="road-surface">
                    <div className="road-markings"></div>

                    <div className="scenic-cars-layer">
                        <div className="scenic-car-wrapper">
                            <img src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=600&auto=format&fit=crop" alt="Traveler" />
                            <Tag color="orange" style={{ fontWeight: 800 }}>Group Travel</Tag>
                        </div>
                        <div className="scenic-car-wrapper" style={{ transform: 'translateY(-20px)' }}>
                            <img src="https://imgd.aeplcdn.com/642x336/n/cw/ec/170173/dzire-exterior-right-front-three-quarter-27.png?isig=0&q=80" alt="Sedan" />
                            <Tag color="blue" style={{ fontWeight: 800 }}>Premium Sedan</Tag>
                        </div>
                        <div className="scenic-car-wrapper">
                            <img src="https://imgd.aeplcdn.com/664x374/n/tyuuhab_1655937.png?q=80" alt="Innova" />
                            <Tag color="red" style={{ fontWeight: 800 }}>Luxury SUV</Tag>
                        </div>
                    </div>
                </div>
            </div>

            <Row gutter={[24, 24]} style={{ marginBottom: 100 }}>
                <Col xs={24} md={8}>
                    <Card className="feature-card vibrant-card glow-blue">
                        <SafetyCertificateOutlined className="feature-icon blue" />
                        <Title level={3} style={{ fontWeight: 800 }}>Safe Travels</Title>
                        <Paragraph style={{ fontSize: 16 }}>Your safety is our top priority. Every vehicle in our fleet undergoes rigorous safety checks and sanitization before every trip.</Paragraph>
                    </Card>
                </Col>
                <Col xs={24} md={8}>
                    <Card className="feature-card vibrant-card glow-orange">
                        <TeamOutlined className="feature-icon orange" />
                        <Title level={3} style={{ fontWeight: 800 }}>Expert Team</Title>
                        <Paragraph style={{ fontSize: 16 }}>Our drivers and staff are highly experienced, professional, and dedicated to providing world-class service throughout your journey.</Paragraph>
                    </Card>
                </Col>
                <Col xs={24} md={8}>
                    <Card className="feature-card vibrant-card glow-green">
                        <RocketOutlined className="feature-icon green" />
                        <Title level={3} style={{ fontWeight: 800 }}>Adventure Ready</Title>
                        <Paragraph style={{ fontSize: 16 }}>We don't just provide cars; we provide the keys to your next great adventure. Explore hidden gems with our local expertise.</Paragraph>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default AboutUs;
