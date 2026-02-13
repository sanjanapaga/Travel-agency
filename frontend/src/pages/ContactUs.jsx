import React from 'react';
import { Typography, Row, Col, Form, Input, Button, Card, message, Tag, Tooltip, Select } from 'antd';
import { MailOutlined, PhoneOutlined, EnvironmentOutlined, SendOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

const ContactUs = () => {
    const [form] = Form.useForm();
    const [loading, setLoading] = React.useState(false);

    const onFinish = async (values) => {
        setLoading(true);

        try {
            const response = await fetch("https://formsubmit.co/ajax/jyothutravelsandtourism@gmail.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    "JYOTHU TRAVELS": "————————————————",
                    "Customer Name": values.firstName,
                    "Email Address": values.email,
                    "From": values.from,
                    "Destination": values.destination,
                    "Vehicle": values.vehicle,
                    "Subject": values.subject,
                    "Trip Details": values.message,
                    "Date / Time": values.datetime,
                    "Numeric Field": values.numeric,
                    _subject: `🚗 New Trip Inquiry: ${values.firstName}`,
                    _template: "table"
                })
            });

            if (response.ok) {
                message.success('Thank you! Your inquiry has been sent. You will hear from us soon.');
                form.resetFields();
            } else {
                message.error('Oops! Something went wrong. Please try again later.');
            }
        } catch (error) {
            console.error('Submission Error:', error);
            message.error('Failed to send inquiry. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fade-in-up">
            <div className="section-header" style={{ textAlign: 'left', marginBottom: 60 }}>
                <Tag color="orange" className="premium-tag">GET IN TOUCH</Tag>
                <Title level={2} style={{ fontSize: 48, fontWeight: 900, marginTop: 10 }}>☎️ Contact Us</Title>
                <Paragraph style={{ color: '#111111', fontSize: 18 }}>We are here to help you plan your perfect journey. Available 24/7.</Paragraph>
            </div>

            <Row gutter={[40, 40]} style={{ marginBottom: 60 }}>
                <Col xs={24} lg={10}>
                    <Card style={{ background: 'var(--hero-gradient)', color: 'white', border: 'none', borderRadius: '32px', padding: '20px', height: '100%', boxShadow: '0 30px 60px rgba(15, 23, 42, 0.2)' }}>
                        <Title level={2} style={{ color: 'white', fontWeight: 800 }}>Contact Info</Title>
                        <Paragraph style={{ color: '#cbd5e1', fontSize: 16 }}>Our team is ready to assist you with all your travel needs.</Paragraph>

                        <div style={{ marginTop: 50 }}>
                            <div style={{ display: 'flex', gap: 24, marginBottom: 40 }}>
                                <div className="stat-icon-box" style={{ background: 'rgba(255,255,255,0.1)', color: 'white', borderRadius: '16px' }}>
                                    <PhoneOutlined />
                                </div>
                                <div>
                                    <Paragraph style={{ color: '#cbd5e1', margin: 0, fontWeight: 600 }}>Call Us</Paragraph>
                                    <Title level={4} style={{ color: 'white', margin: 0, fontWeight: 700 }}>+91 97421 00545</Title>
                                    <Title level={4} style={{ color: 'white', margin: 0, fontWeight: 700, opacity: 0.8 }}>+91 94838 68523</Title>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: 24, marginBottom: 40 }}>
                                <div className="stat-icon-box" style={{ background: 'rgba(255,255,255,0.1)', color: 'white', borderRadius: '16px' }}>
                                    <MailOutlined />
                                </div>
                                <div>
                                    <Paragraph style={{ color: '#cbd5e1', margin: 0, fontWeight: 600 }}>Email Address</Paragraph>
                                    <Title level={4} style={{ color: 'white', margin: 0, fontWeight: 700 }}>jyothutravelsandtourism@gmail.com</Title>
                                </div>
                            </div>

                            <Tooltip title="Click here to view the map" color="#fbcfe8" placement="right">
                                <a
                                    href="https://www.google.com/maps/search/?api=1&query=%2312%2C+shetter+layout+Lingarajnagar+near+global+college+Hubli+580031"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="contact-info-item-link"
                                    style={{ display: 'flex', gap: 24, textDecoration: 'none', transition: 'all 0.3s ease' }}
                                >
                                    <div className="stat-icon-box" style={{ background: 'rgba(255,255,255,0.1)', color: 'white', borderRadius: '16px' }}>
                                        <EnvironmentOutlined />
                                    </div>
                                    <div style={{ textAlign: 'left' }}>
                                        <Paragraph style={{ color: '#cbd5e1', margin: 0, fontWeight: 600 }}>Our Location</Paragraph>
                                        <Title level={4} style={{ color: 'white', margin: 0, fontWeight: 700 }}>#12, shetter layout Lingarajnagar near global college Hubli 580031</Title>
                                    </div>
                                </a>
                            </Tooltip>
                        </div>
                    </Card>
                </Col>

                <Col xs={24} lg={14}>
                    <Card style={{ padding: '20px', borderRadius: '32px', boxShadow: 'var(--premium-shadow)', border: '1px solid rgba(226, 232, 240, 0.8)' }}>
                        <Title level={3} style={{ fontWeight: 800, marginBottom: 30 }}>Plan Your Trip</Title>
                        <Form layout="vertical" onFinish={onFinish} form={form}>
                            <Row gutter={24}>
                                <Col xs={24} md={12}>
                                    <Form.Item label="First Name" name="firstName" rules={[{ required: true, message: 'Please enter your first name' }]}>
                                        <Input size="large" placeholder="First Name" style={{ borderRadius: '12px' }} />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} md={12}>
                                    <Form.Item label="Email" name="email" rules={[{ required: true, type: 'email', message: 'Please enter a valid email address' }]}>
                                        <Input size="large" placeholder="Email Address" style={{ borderRadius: '12px' }} />
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Row gutter={24}>
                                <Col xs={12}>
                                    <Form.Item label="From" name="from" rules={[{ required: true, message: 'Source location' }]}>
                                        <Input size="large" placeholder="From" style={{ borderRadius: '12px' }} />
                                    </Form.Item>
                                </Col>
                                <Col xs={12}>
                                    <Form.Item label="Destination" name="destination" rules={[{ required: true, message: 'Destination location' }]}>
                                        <Input size="large" placeholder="Destination" style={{ borderRadius: '12px' }} />
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Row gutter={24}>
                                <Col xs={24} md={12}>
                                    <Form.Item label="Select Vehicle" name="vehicle" rules={[{ required: true, message: 'Please select a vehicle' }]}>
                                        <Select size="large" placeholder="Choose a Vehicle" style={{ borderRadius: '12px' }}>
                                            <Select.Option value="Toyota Rumion">Toyota Rumion</Select.Option>
                                            <Select.Option value="Maruti Dzire">Maruti Dzire</Select.Option>
                                            <Select.Option value="Swift">Swift</Select.Option>
                                            <Select.Option value="Toyota Etios">Toyota Etios</Select.Option>
                                            <Select.Option value="Toyota Innova">Toyota Innova</Select.Option>
                                            <Select.Option value="Maruti Ertiga">Maruti Ertiga</Select.Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col xs={24} md={12}>
                                    <Form.Item label="Subject" name="subject">
                                        <Input size="large" placeholder="Subject" style={{ borderRadius: '12px' }} />
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Form.Item label="Your Message" name="message" rules={[{ required: true, message: 'Please tell us about your travel plans' }]}>
                                <TextArea rows={4} placeholder="Your Message" style={{ borderRadius: '16px' }} />
                            </Form.Item>

                            <Row gutter={24}>
                                <Col xs={24} md={12}>
                                    <Form.Item label="Date / Time" name="datetime" initialValue="13/02/2026">
                                        <Input size="large" placeholder="13/02/2026" style={{ borderRadius: '12px' }} />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} md={12}>
                                    <Form.Item label="Numeric Field" name="numeric">
                                        <Input size="large" type="number" placeholder="Numeric Field" style={{ borderRadius: '12px' }} />
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Form.Item style={{ marginBottom: 0 }}>
                                <Button type="primary" size="large" htmlType="submit" icon={<SendOutlined />} block style={{ height: 60, fontSize: 18 }} loading={loading}>
                                    Send Inquiry
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default ContactUs;

