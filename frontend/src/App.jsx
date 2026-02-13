import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Layout, Menu, theme, Button, Typography, Drawer } from 'antd';
import {
    HomeOutlined,
    CarOutlined,
    PictureOutlined,
    InfoCircleOutlined,
    PhoneOutlined,
    FileTextOutlined,
    RocketOutlined,
    MenuOutlined
} from '@ant-design/icons';
import Dashboard from './pages/Dashboard';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Terms from './pages/Terms';
import './style.css';

const { Header, Content, Footer, Sider } = Layout;
const { Title, Text } = Typography;

function App() {
    const [open, setOpen] = React.useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const menuItems = [
        {
            key: '/',
            label: <Link to="/" onClick={() => setOpen(false)}>Home</Link>,
        },
        {
            key: '/about',
            label: <Link to="/about" onClick={() => setOpen(false)}>About Us</Link>,
        },
        {
            key: '/packages',
            label: <a href="/#packages" onClick={() => setOpen(false)}>Travel Packages</a>,
        },
        {
            key: '/contact',
            label: <Link to="/contact" onClick={() => setOpen(false)}>Contact Us</Link>,
        },
        {
            key: '/terms',
            label: <Link to="/terms" onClick={() => setOpen(false)}>Terms & Conditions</Link>,
        },
    ];

    return (
        <Router>
            <Layout style={{ minHeight: '100vh' }}>
                <Header className="premium-header">
                    <div className="header-content-inner">
                        <Link to="/" className="app-logo-link">
                            <img src="/logo-new.jpg" alt="Jyothu Travels" className="app-logo-image" />
                        </Link>

                        {/* Desktop Menu */}
                        <Menu
                            theme="light"
                            mode="horizontal"
                            defaultSelectedKeys={['/']}
                            items={menuItems.map(item => ({
                                ...item,
                                icon: null
                            }))}
                            className="top-nav-menu desktop-only"
                        />

                        <div className="header-right-group">
                            <div className="header-cta desktop-only">
                                <Button type="primary" icon={<PhoneOutlined />} href="tel:+919742100545" className="header-call-btn">
                                    Call Now
                                </Button>
                            </div>

                            {/* Mobile Hamburger */}
                            <Button
                                className="mobile-only hamburger-btn"
                                type="text"
                                icon={<MenuOutlined />}
                                onClick={() => setOpen(true)}
                                style={{ fontSize: '24px' }}
                            />
                        </div>
                    </div>
                </Header>

                <Drawer
                    title={<Title level={4} style={{ margin: 0 }}>Menu</Title>}
                    placement="right"
                    onClose={() => setOpen(false)}
                    open={open}
                    width={280}
                    className="mobile-drawer"
                >
                    <Menu
                        mode="vertical"
                        defaultSelectedKeys={['/']}
                        items={menuItems}
                        style={{ border: 'none' }}
                    />
                    <div style={{ marginTop: 30, padding: '0 16px' }}>
                        <Button type="primary" block size="large" icon={<PhoneOutlined />} href="tel:+919742100545">
                            Call Now
                        </Button>
                    </div>
                </Drawer>

                <Content
                    style={{
                        padding: '0',
                        marginTop: 0,
                    }}
                >
                    <div className="content-wrapper">
                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/about" element={<AboutUs />} />
                            <Route path="/contact" element={<ContactUs />} />
                            <Route path="/terms" element={<Terms />} />
                        </Routes>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center', padding: '60px 0', background: 'lightblue', color: '#050c15ff', borderTop: '1px solid #f1f5f9' }}>
                    <div style={{ marginBottom: 20 }}>
                        <Title level={4} style={{ color: 'var(--primary-deep)', margin: 0 }}>JYOTHU TRAVELS AND TOURISM</Title>
                        <Text type="secondary">Your reliable travel partner in Hubli</Text>
                    </div>
                    {new Date().getFullYear()} © JYOTHU TRAVELS AND TOURISM. All rights reserved.
                </Footer>
            </Layout>
        </Router>
    );
}

export default App;
