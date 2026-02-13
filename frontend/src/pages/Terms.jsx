import React from 'react';
import { Typography, Collapse, Card, Row, Col, Space } from 'antd';
import {
    InfoCircleOutlined,
    EnvironmentOutlined,
    RocketOutlined,
    SafetyOutlined,
    ClockCircleOutlined,
    CarOutlined
} from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

const Terms = () => {
    const sections = [
        {
            key: '1',
            label: <Title level={4} style={{ margin: 0 }}><RocketOutlined /> 🚖 Outstation Billing</Title>,
            children: (
                <div className="terms-content">
                    <ul>
                        <li>Minimum 300 kms per day billing.</li>
                        <li>If GST bill required → 5% GST extra.</li>
                        <li>Toll, Parking & Inter-State Permit charges extra, borne by customer.</li>
                        <li>Driver Bata (6:00 AM – 10:00 PM) included.</li>
                        <li>Additional Driver Bata applies before 6:00 AM and after 10:00 PM.</li>
                        <li>Guests are advised to plan their itinerary; drivers are not responsible if all places cannot be covered due to delays or extended halts.</li>
                        <li>Vehicles hired for outstation services cannot be used for local trips.</li>
                        <li>Pets are not allowed inside the cab.</li>
                        <li>Final billing is calculated based on total mileage & distance from pickup location.</li>
                        <li>We are not responsible for loss of luggage/valuables.</li>
                        <li>Any mishap/breakdown due to natural calamities must be borne by the customer.</li>
                        <li>Vehicles must not be used for illegal activities.</li>
                        <li>All disputes are subject to Bangalore jurisdiction.</li>
                    </ul>
                </div>
            )
        },
        {
            key: '2',
            label: <Title level={4} style={{ margin: 0 }}><EnvironmentOutlined /> 🚕 Local Usage (Within Bangalore City Limit)</Title>,
            children: (
                <div className="terms-content">
                    <ul>
                        <li>Local package: 8 hrs / 80 kms. Extra hours/kms charged as applicable.</li>
                        <li>Toll & Parking extra, borne by customer.</li>
                        <li>Extra Driver Bata applies before 6:00 AM and after 10:00 PM.</li>
                        <li>Without GST bill → Opening/closing km & timings from guest pickup point.</li>
                        <li>With GST bill → Opening/closing km & timings from office to office.</li>
                        <li>Pets not allowed inside cab.</li>
                        <li>No liability for luggage/valuables lost.</li>
                        <li>Natural calamity issues to be borne by customer.</li>
                        <li>Vehicles must not be used for illegal activities.</li>
                        <li>All disputes subject to Bangalore jurisdiction.</li>
                    </ul>
                </div>
            )
        },
        {
            key: '3',
            label: <Title level={4} style={{ margin: 0 }}><CarOutlined /> ✈️ Airport Pick-up & Drop</Title>,
            children: (
                <div className="terms-content">
                    <ul>
                        <li>Cab cannot be diverted for multiple pickups or extra drops.</li>
                        <li>No waiting allowed during airport trips.</li>
                        <li>Toll & Parking charges extra, borne by customer.</li>
                        <li>5% GST extra if GST bill required.</li>
                        <li>Pets not allowed inside cab.</li>
                        <li>No responsibility for luggage/valuables.</li>
                        <li>Natural calamity delays/cancellations to be borne by customer.</li>
                        <li>Vehicles must not be used for illegal activities.</li>
                        <li>All disputes subject to Bangalore jurisdiction.</li>
                    </ul>
                </div>
            )
        }
    ];

    return (
        <div className="fade-in-up" style={{ paddingBottom: '60px' }}>
            <div className="page-header" style={{ textAlign: 'center', marginBottom: '40px' }}>
                <Title level={1}>📜 Terms & Conditions</Title>
                <Paragraph style={{ color: '#64748b', fontSize: '18px', fontWeight: 500 }}>
                    Our Travel Policy and Billing Rules
                </Paragraph>
            </div>

            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                <Card className="vibrant-card" style={{ borderRadius: '30px' }}>
                    <div style={{ marginBottom: '40px' }}>
                        <Title level={3}>Service Agreement</Title>
                        <Paragraph style={{ fontSize: '16px', lineHeight: '1.8' }}>
                            At Jyothu Travels, we are committed to providing reliable, secure, and convenient rides for every journey.
                            Our billing rules are designed to be transparent and fair, ensuring you know exactly what to expect.
                            Please review the sections below for detailed information on our services.
                        </Paragraph>
                    </div>

                    <Collapse
                        defaultActiveKey={['1']}
                        expandIconPlacement="right"
                        className="custom-terms-collapse"
                        items={sections}
                    />

                    <div style={{ marginTop: '40px', padding: '20px', background: '#f8fafc', borderRadius: '20px', textAlign: 'center' }}>
                        <Text type="secondary" italic style={{ fontSize: '14px' }}>
                            * Please review your billing and trip details before the journey begins to avoid any confusion.
                            By booking with us, you agree to all the terms mentioned above.
                        </Text>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Terms;
