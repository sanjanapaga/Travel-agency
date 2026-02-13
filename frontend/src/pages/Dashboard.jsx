import React from 'react';
import { Card, Row, Col, Button, Tag, Typography, Space } from 'antd';
import {
    CarOutlined,
    CheckCircleOutlined,
    ClockCircleOutlined,
    ArrowRightOutlined,
    ThunderboltOutlined,
    StarFilled,
    SafetyOutlined,
    ScheduleOutlined,
    UserOutlined,
    RocketOutlined,
    HomeOutlined,
    LockOutlined,
    EnvironmentOutlined,
    PhoneFilled,
    PhoneOutlined,
    TeamOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Title, Paragraph, Text } = Typography;

const Dashboard = () => {

    const fleet = [
        {
            id: 1,
            name: "Toyota Etios",
            capacity: "4+1 Seater",
            description: "Reliable white sedan perfect for city drops and affordable outstation travel.",
            image: "https://imgd.aeplcdn.com/664x374/cw/ec/24731/Toyota-Platinum-Etios-Exterior-119077.jpg?wm=0&q=80",
            drop: "₹1,000",
            local: { nac: "₹1,900", ac: "₹2,300" },
            outstation: { nac: "₹11/km", ac: "₹12/km" },
            category: "Economy Sedan"
        },
        {
            id: 2,
            name: "Swift Dzire",
            capacity: "4+1 Seater",
            description: "Silver premium sedan offering excellent comfort and mileage for all journeys.",
            image: "https://imgd.aeplcdn.com/642x336/n/cw/ec/170173/dzire-exterior-right-front-three-quarter-27.png?isig=0&q=80",
            drop: "₹1000",
            local: { nac: "₹1,900", ac: "₹2,300" },
            outstation: { nac: "₹11/km", ac: "₹12/km" },
            category: "Compact Sedan"
        },
        {
            id: 3,
            name: "Maruti Ciaz",
            capacity: "4+1 Seater",
            description: "Elegant Nexa Blue sedan with luxury features and extra legroom for elite travel.",
            image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Maruti-Ciaz-2014-2017/3197/front-left-side-47.jpg?imwidth=420&impolicy=resize",
            drop: "₹1,000",
            local: { nac: "₹1,900", ac: "₹2,300" },
            outstation: { nac: "₹13/km", ac: "₹14/km" },
            category: "Premium Sedan"
        },
        {
            id: 4,
            name: "Maruti Ertiga",
            capacity: "6+1 & 7+1 Seater",
            description: "Spacious white MUV, the preferred choice for family outings and group travels.",
            image: "https://i.3dmodels.org/uploads/Suzuki/138_Suzuki_Ertiga_Mk1f_2016/Suzuki_Ertiga_Mk1f_2016_1000_0001.jpg",
            drop: "₹2,200",
            local: { nac: "₹3,300", ac: "₹3,800" },
            outstation: { nac: "₹13/km", ac: "₹14/km" },
            category: "Family MUV"
        },
        {
            id: 5,
            name: "Toyota Innova",
            capacity: "6+1 & 7+1 Seater",
            description: "The gold standard of Indian roads, offering unmatched comfort and reliability.",
            image: "https://i.3dmodels.org/uploads/Toyota/501_Toyota_Innova_Mk2f_AN140_2021/Toyota_Innova_Mk2f_AN140_2021_1000_0001.jpg",
            drop: "₹2,200",
            local: { nac: "₹3,300", ac: "₹3,800" },
            outstation: { nac: "₹15/km", ac: "₹16/km" },
            category: "Reliable SUV"
        },
        {
            id: 6,
            name: "Toyota Innova Crysta",
            capacity: "6+1 & 7+1 Seater",
            description: "Premium executive SUV for top-tier travel experiences with ultimate luxury.",
            image: "https://imgd.aeplcdn.com/664x374/n/tyuuhab_1655937.png?q=80",
            drop: "₹2,200",
            local: { nac: "₹3,500", ac: "₹3,800" },
            outstation: { nac: "₹18/km", ac: "₹19/km" },
            category: "Premium Luxury"
        },
        {
            id: 7,
            name: "Innova Hycross",
            capacity: "6+1 & 7+1 Seater",
            description: "The peak of futuristic luxury and hybrid efficiency for the ultimate silent ride.",
            image: "https://content.carlelo.com/source/Toyota-Innova-Hycross.jpg",
            drop: "₹2,200",
            local: { nac: "₹3,300", ac: "₹3,800" },
            outstation: { nac: "₹20/km", ac: "₹21/km" },
            category: "Elite Hybrid"
        }
    ];

    const coachFleet = [
        {
            id: 1,
            name: "12 or 14 SEATER TEMPO TRAVELLER",
            capacity: "12 Seater",
            description: "Premium COACH: AC & NON-AC with PUSH BACK SEATS for group comfort.",
            image: "https://www.taxiyatri.com/images/12-seater-tempo-traveller.webp",
            outstation: { nac: "₹18/km", ac: "₹21/km" },
            category: "Premium Coach"
        },
        {
            id: 2,
            name: "21 SEATER MINI BUS",
            capacity: "21 Seater",
            description: "Luxurious Mini Bus with AC & NON-AC options and PUSH BACK SEATS.",
            image: "https://smtravelhub.com/assets/img/mini-bus/3.jpeg",
            outstation: { nac: "₹29/km", ac: "₹34/km" },
            category: "Luxury Mini Bus"
        },
        {
            id: 3,
            name: "25 SEATER MINI BUS",
            capacity: "25 Seater",
            description: "Executive Mini Bus featuring PUSH BACK SEATS for group travel.",
            image: "https://cherrycabs.in/uploads/fleets/car-13.svg",
            outstation: { nac: "₹36/km", ac: "₹40/km" },
            category: "Executive Coach"
        },
        {
            id: 4,
            name: "30 SEATER MINI BUS",
            capacity: "30 Seater",
            description: "Spacious Coach with AC/Non-AC options and premium PUSH BACK SEATS.",
            image: "https://sribalajitravels.co/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-08-at-12.40.47-AM-scaled-e1736277273513.jpeg",
            outstation: { nac: "₹39/km", ac: "₹44/km" },
            category: "Large Mini Bus"
        },
        {
            id: 5,
            name: "40 SEATER BUS",
            capacity: "40 Seater",
            description: "Full-sized Luxury Bus with PUSH BACK SEATS for long-distance comfort.",
            image: "https://buscdn.cardekho.com/in/tata/starbus-city/tata-starbus-city.jpg?impolicy=resize&imwidth=480",
            outstation: { nac: "₹43/km", ac: "₹47/km" },
            category: "Luxury Coach"
        },
        {
            id: 6,
            name: "49 SEATER MINI BUS",
            capacity: "49 Seater",
            description: "Ultra-luxury large capacity coach with AC & NON-AC and PUSH BACK SEATS.",
            image: "https://www.simplytrip.in/upload/category/1600421741.Mini_Bus_exterior.webp",
            outstation: { nac: "₹46/km", ac: "₹49/km" },
            category: "Executive Liner"
        }
    ];


    const travelPackages = [
        {
            destination: "Hubli to Dandeli",
            title: "🌿 Hubli to Dandeli",
            subtitle: "8-in-1 Special Tour",
            duration: "2 Nights / 3 Days",
            tag: "Adventure",
            image: "https://www.riverresortsdandeli.com/dandeli-adventures/dandeli-places/river-rafting-in-dandeli.jpg",
            pricing: [
                { vehicle: "4+1 Seater", price: "₹12,200/-" },
                { vehicle: "6+1 Seater", price: "₹15,000/-" },
                { vehicle: "13+1 Seater", price: "₹18,200/-" },
                { vehicle: "21+1 Seater", price: "₹29,500/-" }
            ]
        },
        {
            destination: "Hubli to Gokarna",
            title: "🏖️ Hubli to Gokarna",
            subtitle: "8-in-1 Special Tour",
            duration: "2 Nights / 3 Days",
            tag: "Coastal",
            image: "https://hblimg.mmtcdn.com/content/hubble/img/gokarna/mmt/activities/m_activities_gokarna_gokarna_beach_l_370_555.jpg",
            pricing: [
                { vehicle: "4+1 Seater", price: "₹12,200/-" },
                { vehicle: "6+1 Seater", price: "₹15,000/-" },
                { vehicle: "13+1 Seater", price: "₹18,200/-" },
                { vehicle: "21+1 Seater", price: "₹29,500/-" }
            ]
        },
        {
            destination: "Hubli to Murudeshwar",
            title: "🌊 Hubli to Murudeshwar",
            subtitle: "8-in-1 Special Tour",
            duration: "2 Nights / 3 Days",
            tag: "Coastal",
            image: "https://tripxl.com/blog/wp-content/uploads/2024/10/Murudeshwar-Temple-1.jpg",
            pricing: [
                { vehicle: "4+1 Seater", price: "₹12,200/-" },
                { vehicle: "6+1 Seater", price: "₹15,000/-" },
                { vehicle: "13+1 Seater", price: "₹18,200/-" },
                { vehicle: "21+1 Seater", price: "₹29,500/-" }
            ]
        },
        {
            destination: "Hubli to Mysore",
            title: "🏰 Hubli to Mysore",
            subtitle: "13-in-1 Special Tour",
            duration: "3 Nights / 4 Days",
            tag: "Heritage",
            image: "https://images.unsplash.com/photo-1590766940554-634a7ed41450?q=80&w=2070&auto=format&fit=crop",
            pricing: [
                { vehicle: "4+1 Seater (Swift / Etios)", price: "₹19,500/-" },
                { vehicle: "6+1 Seater (Ertiga)", price: "₹21,800/- – ₹24,000/-" },
                { vehicle: "7+1 Seater (Innova / Crysta – AC)", price: "₹26,500/-" },
                { vehicle: "13+1 Seater (Tempo Traveller – AC)", price: "₹30,500/-" },
                { vehicle: "21+1 Mini Bus (AC)", price: "₹50,200/-" },
                { vehicle: "25+1 Mini Bus (AC)", price: "₹61,500/- – ₹67,000/-" },
                { vehicle: "29+1 / 30+1 Mini Bus (AC)", price: "₹67,000/-" }
            ]
        },
        {
            destination: "Hubli to Ooty",
            title: "🌿 Hubli to Ooty",
            subtitle: "13-in-1 Special Tour",
            duration: "3 Nights / 4 Days",
            tag: "Nature",
            image: "https://onlinetourandtravel.com/wp-content/uploads/2020/09/ooty-blog-ott.jpg",
            pricing: [
                { vehicle: "4+1 Seater", price: "₹27,500/-" },
                { vehicle: "6+1 Seater", price: "₹30,000/-" },
                { vehicle: "7+1 Seater (Innova – AC)", price: "₹33,500/-" },
                { vehicle: "7+1 Seater (Crysta – AC)", price: "₹36,000/-" },
                { vehicle: "13+1 Seater (AC)", price: "₹38,500/- – ₹42,500/-" },
                { vehicle: "21+1 Seater (AC)", price: "₹59,500/- – ₹62,500/-" },
                { vehicle: "25+1 Seater (AC)", price: "₹71,500/- – ₹78,500/-" },
                { vehicle: "29+1 Seater (AC)", price: "₹81,000/- – ₹95,500/-" }
            ]
        },
        {
            destination: "Hubli to Coorg",
            title: "🌄 Hubli to Coorg",
            subtitle: "13-in-1 Special Tour",
            duration: "3 Nights / 4 Days",
            tag: "Adventure",
            image: "https://hblimg.mmtcdn.com/content/hubble/img/destimg/mmt/activities/m_Coorg_destjulimg_4_l_823_1235.jpg",
            pricing: [
                { vehicle: "4+1 Seater", price: "₹19,500/-" },
                { vehicle: "6+1 Seater", price: "₹21,500/- – ₹24,000/- – ₹26,500/-" },
                { vehicle: "7+1 Seater", price: "₹24,000/- – ₹26,500/- (Innova/Crysta AC)" },
                { vehicle: "13+1 Seater (AC)", price: "₹27,500/- – ₹30,500/-" },
                { vehicle: "21+1 Seater (AC)", price: "₹44,000/- – ₹50,500/-" },
                { vehicle: "25+1 Seater (AC)", price: "₹57,800/- – ₹61,500/-" },
                { vehicle: "29+1 Seater (AC)", price: "₹63,500/- – ₹67,500/-" }
            ]
        },
        {
            destination: "Hubli to Hampi & Badami",
            title: "🏛️ Hubli to Hampi & Badami",
            subtitle: "8-in-1 Special Tour",
            duration: "2 Nights / 3 Days",
            tag: "History",
            image: "https://www.bharatbooking.com/admin/webroot/img/uploads/holiday-package/1630999355_83506-HAMPI.jpg",
            pricing: [
                { vehicle: "4+1 Seater", price: "₹12,200/- – ₹18,500/-" },
                { vehicle: "6+1 Seater (Ertiga)", price: "₹15,000/- – ₹20,000/-" },
                { vehicle: "7+1 Seater (Innova)", price: "₹22,000/- – ₹23,500/-" },
                { vehicle: "13+1 Seater (Tempo Traveller)", price: "₹18,200/- – ₹25,200/-" },
                { vehicle: "21+1 Seater (Mini Bus)", price: "₹29,500/- – ₹38,100/-" },
                { vehicle: "25+1 Seater (Mini Bus)", price: "₹59,000/-" },
                { vehicle: "29+1 Seater (Mini Bus)", price: "₹59,900/-" }
            ]
        },
        {
            destination: "Hubli to Tirupati",
            title: "🛕 Hubli to Tirupati",
            subtitle: "13-in-1 Special Tour",
            duration: "3 Nights / 4 Days",
            tag: "Spiritual",
            image: "https://images.hindustantimes.com/img/2021/12/27/550x309/541e464c-1b79-11ec-8372-9724726ad21c_1632297094341_1640583111443.jpg",
            pricing: [
                { vehicle: "4+1 Seater", price: "₹17,400/- – ₹24,500/-" },
                { vehicle: "6+1 Seater (Ertiga)", price: "₹21,000/- – ₹28,000/-" },
                { vehicle: "7+1 Seater (Innova – AC)", price: "₹30,500/-" },
                { vehicle: "7+1 Seater (Crysta – AC)", price: "₹32,500/-" },
                { vehicle: "13+1 Seater (Tempo Traveller)", price: "₹25,200/- – ₹36,500/-" },
                { vehicle: "21+1 Seater (Mini Bus)", price: "₹39,600/- – ₹60,000/-" },
                { vehicle: "25+1 Seater (Mini Bus)", price: "₹71,000/-" },
                { vehicle: "29+1 Seater (Mini Bus)", price: "₹74,500/-" }
            ]
        },
        {
            destination: "Hubli to Kodaikanal",
            title: "⛰️ Hubli to Kodaikanal",
            subtitle: "13-in-1 Special Tour",
            duration: "3 Nights / 4 Days",
            tag: "Nature",
            image: "https://kanyakumaritouristplaces.com/wp-content/uploads/2025/06/Kodaikanal.webp",
            pricing: [
                { vehicle: "4+1 Seater", price: "₹17,400/- – ₹31,000/-" },
                { vehicle: "6+1 Seater (Ertiga)", price: "₹21,000/- – ₹34,500/-" },
                { vehicle: "7+1 Seater (Innova – AC)", price: "₹40,100/-" },
                { vehicle: "7+1 Seater (Crysta – AC)", price: "₹42,000/-" },
                { vehicle: "13+1 Seater (Tempo Traveller)", price: "₹25,200/- – ₹47,500/-" },
                { vehicle: "21+1 Seater (Mini Bus)", price: "₹39,600/- – ₹76,500/-" },
                { vehicle: "25+1 Seater (Mini Bus)", price: "₹87,500/-" },
                { vehicle: "29+1 Seater (Mini Bus)", price: "₹98,500/-" }
            ]
        },
        {
            destination: "Hubli to Rameshwaram",
            title: "🛕 Hubli to Rameshwaram",
            subtitle: "13-in-1 Special Tour",
            duration: "3 Nights / 4 Days",
            tag: "Spiritual",
            image: "https://res.cloudinary.com/dyiffrkzh/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_center,h_400,q_auto,w_700/v1690461346/banbanjara/eg3mwvcqymxbftdinuwi.jpg",
            pricing: [
                { vehicle: "4+1 Seater", price: "₹17,400/- – ₹32,500/-" },
                { vehicle: "6+1 Seater (Ertiga)", price: "₹21,000/- – ₹37,500/-" },
                { vehicle: "7+1 Seater (Innova – AC)", price: "₹42,000/-" },
                { vehicle: "7+1 Seater (Crysta – AC)", price: "₹45,500/-" },
                { vehicle: "13+1 Seater (Tempo Traveller)", price: "₹25,200/- – ₹48,500/-" },
                { vehicle: "21+1 Seater (Mini Bus)", price: "₹39,600/- – ₹75,500/-" },
                { vehicle: "25+1 Seater (Mini Bus)", price: "₹90,000/-" },
                { vehicle: "29+1 Seater (Mini Bus)", price: "₹1,05,000/-" }
            ]
        },
        {
            destination: "Hubli to Dharmasthala",
            title: "🙏 Hubli to Dharmasthala",
            subtitle: "13-in-1 Special Tour",
            duration: "3 Nights / 4 Days",
            tag: "Spiritual",
            image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/11/b7/e1/shree-rama-temple.jpg?w=500&h=400&s=1",
            pricing: [
                { vehicle: "4+1 Seater", price: "₹17,400/-" },
                { vehicle: "6+1 Seater", price: "₹21,000/-" },
                { vehicle: "13+1 Seater", price: "₹25,200/-" },
                { vehicle: "21+1 Seater", price: "₹39,600/-" }
            ]
        },
        {
            destination: "Hubli to Goa",
            title: "🏖️ Hubli to Goa",
            subtitle: "8-in-1 Special Tour",
            duration: "2 Nights / 3 Days",
            tag: "Coastal",
            image: "https://www.fabhotels.com/blog/wp-content/uploads/2019/04/Beach-fun.jpg",
            pricing: [
                { vehicle: "4+1 Seater", price: "₹12,200/- – ₹12,600/-" },
                { vehicle: "6+1 Seater", price: "₹15,000/- – ₹17,200/-" },
                { vehicle: "7+1 Seater (Innova)", price: "₹19,500/-" },
                { vehicle: "7+1 Seater (Crysta)", price: "₹21,000/-" },
                { vehicle: "13+1 Seater (Tempo Traveller)", price: "₹18,200/- – ₹25,000/-" },
                { vehicle: "21+1 Seater (Mini Bus)", price: "₹29,500/- – ₹38,500/-" },
                { vehicle: "25+1 Seater (Mini Bus)", price: "₹50,500/-" },
                { vehicle: "29+1 Seater (Mini Bus)", price: "₹56,950/-" }
            ]
        },
        {
            destination: "Hubli to Shirdi",
            title: "🙏 Hubli to Shirdi",
            subtitle: "13-in-1 Special Tour",
            duration: "3 Nights / 4 Days",
            tag: "Spiritual",
            image: "https://res.cloudinary.com/dyiffrkzh/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_center,h_400,q_auto,w_700/v1723094287/banbanjara/jn7lphuecnc3uqqmfecb.jpg",
            pricing: [
                { vehicle: "4+1 Seater", price: "₹17,400/- – ₹24,000/-" },
                { vehicle: "6+1 Seater", price: "₹21,000/- – ₹27,800/-" },
                { vehicle: "7+1 Seater (Innova – AC)", price: "₹31,500/-" },
                { vehicle: "7+1 Seater (Crysta – AC)", price: "₹34,500/-" },
                { vehicle: "13+1 Seater (Tempo Traveller)", price: "₹25,200/- – ₹37,000/-" },
                { vehicle: "21+1 Seater (Mini Bus)", price: "₹39,600/- – ₹59,000/-" },
                { vehicle: "25+1 Seater (Mini Bus)", price: "₹70,800/-" },
                { vehicle: "29+1 Seater (Mini Bus)", price: "₹81,800/-" }
            ]
        },
        {
            destination: "Hubli to Maharashtra",
            title: "🙏 Hubli to Maharashtra",
            subtitle: "13-in-1 Special Tour",
            duration: "3 Nights / 4 Days",
            tag: "Nature",
            image: "https://media.licdn.com/dms/image/v2/D4E12AQHgMyuuNkuhSg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1683730423444?e=2147483647&v=beta&t=t5TVJzXXrUgr_OIA0YjPXoN8-vn4Y_8emCa9pwclfg8",
            pricing: [
                { vehicle: "4+1 Seater", price: "₹17,400/-" },
                { vehicle: "6+1 Seater", price: "₹21,000/-" },
                { vehicle: "13+1 Seater", price: "₹25,200/-" },
                { vehicle: "21+1 Seater", price: "₹39,600/-" }
            ]
        },
        {
            destination: "Hubli to Madikeri",
            title: "🌄 Hubli to Madikeri",
            subtitle: "13-in-1 Special Tour",
            duration: "3 Nights / 4 Days",
            tag: "Hill Station",
            image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=1935&auto=format&fit=crop",
            pricing: [
                { vehicle: "4+1 Seater", price: "₹17,400/-" },
                { vehicle: "6+1 Seater", price: "₹21,000/-" },
                { vehicle: "13+1 Seater", price: "₹25,200/-" },
                { vehicle: "21+1 Seater", price: "₹39,600/-" }
            ]
        }
    ];


    return (
        <div className="fade-in-up" style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Background Decorative Blobs */}
            <div className="bg-blob blob-1"></div>
            <div className="bg-blob blob-2"></div>
            <div className="bg-blob blob-3"></div>

            {/* Hero Section */}
            <section className="hero-dashboard" style={{ position: 'relative' }}>

                <Row align="middle" gutter={[40, 40]} style={{ width: '100%' }}>
                    <Col xs={24} lg={14}>
                        <div className="hero-content">
                            <Tag color="orange" className="premium-tag">PREMIUM TRAVEL SERVICES</Tag>
                            <h1 className="text-gradient-mixed">Discover Places, <br /> Create Stories</h1>
                            <Paragraph className="hero-subtitle">
                                Jyothu Travels and Tourism offers the finest fleet of vehicles for your journeys.
                                Professional drivers, well-maintained cars, and unforgettable memories.
                            </Paragraph>
                            <Space size="middle">
                                <Button type="primary" size="large" className="hero-cta-btn" icon={<ArrowRightOutlined />} href="#packages">
                                    View Packages
                                </Button>
                            </Space>

                            <div className="hero-stats" style={{ marginTop: 40, flexWrap: 'wrap', gap: '20px' }}>
                                <div className="hero-stat-item">
                                    <Title level={2} style={{ margin: 0 }}>25+</Title>
                                    <Text type="secondary" style={{ fontWeight: 600 }}>Years Exp</Text>
                                </div>
                                <div className="hero-stat-item">
                                    <Title level={2} style={{ margin: 0 }}>15k+</Title>
                                    <Text type="secondary" style={{ fontWeight: 600 }}>Happy Clients</Text>
                                </div>
                                <div className="hero-stat-item">
                                    <Title level={2} style={{ margin: 0 }}>13+</Title>
                                    <Text type="secondary" style={{ fontWeight: 600 }}>Tour Packages</Text>
                                </div>
                                <div className="hero-stat-item">
                                    <Title level={2} style={{ margin: 0 }}>25+</Title>
                                    <Text type="secondary" style={{ fontWeight: 600 }}>Testimonials</Text>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={24} lg={10} style={{ position: 'relative' }}>
                        <div className="hero-image-container">
                            <div className="hero-circle-bg"></div>

                            <img
                                src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=2070&auto=format&fit=crop"
                                alt="Red Premium Car"
                                className="hero-car-img"
                                style={{
                                    width: '120%',
                                    transform: 'translateX(10%)',
                                    filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.4))',
                                    borderRadius: '30px'
                                }}
                            />
                            <div className="experience-float-card">
                                <div className="float-icon-box">🏆</div>
                                <div>
                                    <Text strong style={{ color: 'white' }}>Best Choice</Text>
                                    <br />
                                    <Text type="secondary" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '12px' }}>Customer Rated #1</Text>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </section>

            {/* Welcome Introduction Section - Premium Refined */}
            <section className="welcome-intro-section" style={{ marginBottom: '20px' }}>
                <Card className="welcome-card-premium">
                    <Row gutter={[60, 40]} align="middle">
                        <Col xs={24} lg={13}>
                            <div className="welcome-badge">
                                <span style={{ color: '#000000' }}>JYOTHU</span> <span className="logo-accent">TRAVELS</span>
                                WELCOME TO JYOTHU TRAVELS AND TOURISM
                            </div>
                            <Title level={1} className="welcome-title text-gradient-blue">
                                Book the Taxi from Jyothu Travels and Tourism Services
                            </Title>
                            <Paragraph className="welcome-paragraph">
                                We offer <strong>Outstation Cabs</strong>, <strong>Event Cabs</strong>, and <strong>Airport Pickup & Drop</strong> at affordable prices, with services available <strong>24×7</strong>. Based in Hubli, we ensure a smooth travel experience with premium comfort and professional service.
                            </Paragraph>

                            <div className="cta-glass-box">
                                <div className="cta-phone-group">
                                    <div className="cta-mini-label" style={{ color: 'rgba(0, 0, 0, 0.6)', fontWeight: 600 }}>Need a ride right now?</div>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                                        <Title level={3} style={{ margin: 0 }}>
                                            <PhoneFilled style={{ marginRight: 10, color: '#fbbf24' }} />
                                            97421 00545
                                        </Title>
                                        <Title level={3} style={{ margin: 0 }}>
                                            <PhoneFilled style={{ marginRight: 10, color: '#fbbf24' }} />
                                            94838 68523
                                        </Title>
                                    </div>
                                </div>
                                <Button type="primary" size="large" className="booking-btn-glow" href="tel:+919742100545" style={{ background: 'var(--secondary)', border: 'none', color: 'var(--slate)' }}>
                                    Call to Book
                                </Button>
                            </div>
                        </Col>
                        <Col xs={24} lg={11}>
                            <div className="features-unique-grid" style={{ marginTop: 0 }}>
                                <Row gutter={[15, 15]}>
                                    <Col span={12}>
                                        <div className="feature-item-modern inverted">
                                            <div className="icon-wrapper blue">
                                                <CarOutlined />
                                            </div>
                                            <div className="feature-text-box">
                                                <Text strong>Outstation Cabs</Text>
                                                <Text type="secondary">Safe and reliable long-distance travel</Text>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col span={12}>
                                        <div className="feature-item-modern inverted">
                                            <div className="icon-wrapper orange">
                                                <CarOutlined />
                                            </div>
                                            <div className="feature-text-box">
                                                <Text strong>Local Rentals</Text>
                                                <Text type="secondary">City rides and local cab rentals</Text>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col span={12}>
                                        <div className="feature-item-modern inverted">
                                            <div className="icon-wrapper green">
                                                <RocketOutlined />
                                            </div>
                                            <div className="feature-text-box">
                                                <Text strong>Airport Services</Text>
                                                <Text type="secondary">On-time airport pick-up & drop</Text>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col span={12}>
                                        <div className="feature-item-modern inverted">
                                            <div className="icon-wrapper purple">
                                                <HomeOutlined />
                                            </div>
                                            <div className="feature-text-box">
                                                <Text strong>Doorstep Pickup</Text>
                                                <Text type="secondary">Convenient pickup from your home</Text>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col span={24}>
                                        <div className="feature-item-modern inverted">
                                            <div className="icon-wrapper red">
                                                <LockOutlined />
                                            </div>
                                            <div className="feature-text-box">
                                                <Text strong>Secure Travel</Text>
                                                <Text type="secondary">Secure and comfortable journeys</Text>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Card>
            </section>



            {/* Fleet Showcase */}
            <div id="fleet" className="scroll-section" style={{ marginBottom: 60 }}>
                <div className="section-header">
                    <div className="section-title-premium">
                        <CarOutlined /> OUR EXCLUSIVE FLEET
                    </div>
                    <Title level={2} className="text-gradient-mixed">Choose Your Perfect Ride</Title>
                </div>

                <Row gutter={[24, 24]}>
                    {fleet.map((car) => (
                        <Col xs={24} sm={12} lg={6} key={car.id}>
                            <Card variant="borderless" className="fleet-card-premium vibrant-card glow-blue" cover={
                                <div className="fleet-img-container" style={{ backgroundImage: `url(${car.image})` }}>
                                    <div className="capacity-badge">{car.capacity}</div>
                                </div>
                            }>
                                <div className="fleet-body">
                                    <div className="fleet-header">
                                        <Tag color="blue">{car.category}</Tag>
                                        <div className="rating">
                                            <StarFilled style={{ color: '#fbbf24' }} /> 4.9
                                        </div>
                                    </div>
                                    <Title level={4} style={{ marginBottom: 15 }}>{car.name}</Title>

                                    <div className="price-grid-detailed">
                                        <div className="price-row-drop">
                                            <EnvironmentOutlined />
                                            <div className="drop-info">
                                                <Text type="secondary">Local Drop (Hubli)</Text>
                                                <Text strong className="price-val-main">{car.drop}</Text>
                                            </div>
                                        </div>

                                        <div className="price-section-divider">Local (8h / 80km)</div>
                                        <Row gutter={12}>
                                            <Col span={12}>
                                                <div className="pricing-mini-card nac">
                                                    <Text type="secondary">Non-AC</Text>
                                                    <Text strong>{car.local.nac}</Text>
                                                </div>
                                            </Col>
                                            <Col span={12}>
                                                <div className="pricing-mini-card ac">
                                                    <Text type="secondary">AC</Text>
                                                    <Text strong>{car.local.ac}</Text>
                                                </div>
                                            </Col>
                                        </Row>

                                        <div className="price-section-divider">Outstation (Per Km)</div>
                                        <Row gutter={12}>
                                            <Col span={12}>
                                                <div className="pricing-mini-card nac">
                                                    <Text type="secondary">Non-AC</Text>
                                                    <Text strong>{car.outstation.nac}</Text>
                                                </div>
                                            </Col>
                                            <Col span={12}>
                                                <div className="pricing-mini-card ac">
                                                    <Text type="secondary">AC</Text>
                                                    <Text strong>{car.outstation.ac}</Text>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>

                                    <div style={{ display: 'flex', gap: 10, marginTop: 25 }}>
                                        <Button type="primary" block className="call-us-btn" icon={<PhoneOutlined />} href="tel:+919742100545">
                                            Call Us
                                        </Button>
                                        <Button block className="enquiry-btn" href="/contact">
                                            Enquiry
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>

            {/* Corporate & Rental Services Overview */}
            <section className="services-highlight-box">
                <div style={{ textAlign: 'center', marginBottom: 60 }}>
                    <div className="welcome-badge">
                        <ThunderboltOutlined /> OUR SERVICES
                    </div>
                    <Title level={2} style={{ fontSize: 48, fontWeight: 900, marginBottom: 30 }}>
                        Welcome to Our Premium Services
                    </Title>
                    <Paragraph className="service-main-text" style={{ margin: '0 auto' }}>
                        We provide reliable Corporate Cab Services, Buses, and Tempo Traveller rentals for both local and outstation travel. With a wide range of vehicles to choose from, our customers can find the perfect option for every need—from daily commutes to long-distance trips.
                    </Paragraph>
                    <br />
                    <Paragraph className="service-main-text" style={{ margin: '0 auto' }}>
                        For businesses, we offer Customized Vehicle Rental Solutions designed to meet the specialized requirements of corporate clients, ensuring comfort, punctuality, and professionalism. Additionally, our 24×7 Cab Services are available for hassle-free pick-up and drop, making travel smooth, safe, and convenient at any time of the day.
                    </Paragraph>

                    {/* Quick Booking Categories */}
                    <Row gutter={[24, 24]} className="service-category-grid" style={{ marginBottom: 60 }}>
                        <Col xs={24} sm={12} lg={6}>
                            <div className="category-booking-card">
                                <div className="category-icon-round blue">
                                    <CarOutlined />
                                </div>
                                <Title level={4} style={{ color: '#000' }}>Economic Cars Booking</Title>
                                {/* <Button type="primary" size="small" shape="round" href="tel:+919742100545">Book Now</Button> */}
                            </div>
                        </Col>
                        <Col xs={24} sm={12} lg={6}>
                            <div className="category-booking-card">
                                <div className="category-icon-round orange">
                                    <TeamOutlined />
                                </div>
                                <Title level={4} style={{ color: '#000' }}>Tempo Traveller Booking</Title>
                                {/* <Button type="primary" size="small" shape="round" href="tel:+919742100545">Book Now</Button> */}
                            </div>
                        </Col>
                        <Col xs={24} sm={12} lg={6}>
                            <div className="category-booking-card">
                                <div className="category-icon-round green">
                                    <TeamOutlined />
                                </div>
                                <Title level={4} style={{ color: '#000' }}>Bus Traveller Booking</Title>
                                {/* <Button type="primary" size="small" shape="round" href="tel:+919742100545">Book Now</Button> */}
                            </div>
                        </Col>
                        <Col xs={24} sm={12} lg={6}>
                            <div className="category-booking-card">
                                <div className="category-icon-round purple">
                                    <CarOutlined />
                                </div>
                                <Title level={4} style={{ color: '#000' }}>SUV's Cars Booking</Title>
                                {/* <Button type="primary" size="small" shape="round" href="tel:+919742100545">Book Now</Button> */}
                            </div>
                        </Col>
                    </Row>

                    {/* New Premium Coach Listing */}
                    <div style={{ marginTop: 20 }}>
                        <div className="section-title-premium" style={{ background: 'var(--orange-gradient)' }}>
                            <TeamOutlined /> PREMIUM COACH COLLECTION
                        </div>
                        <Title level={2} className="text-gradient-orange" style={{ marginBottom: 50 }}>Luxury Tempo Travellers & Buses</Title>

                        <Row gutter={[24, 24]}>
                            {coachFleet.map((coach) => (
                                <Col xs={24} sm={12} lg={8} key={coach.id}>
                                    <Card variant="borderless" className="fleet-card-premium vibrant-card glow-orange" cover={
                                        <div className="fleet-img-container" style={{ backgroundImage: `url(${coach.image})` }}>
                                            <div className="capacity-badge">{coach.capacity}</div>
                                        </div>
                                    }>
                                        <div className="fleet-body">
                                            <div className="fleet-header">
                                                <Tag color="orange">{coach.category}</Tag>
                                                <div className="rating">
                                                    <StarFilled style={{ color: '#fbbf24' }} /> 5.0
                                                </div>
                                            </div>
                                            <Title level={4} style={{ marginBottom: 10 }}>{coach.name}</Title>
                                            <Text type="secondary" style={{ display: 'block', marginBottom: 15 }}>{coach.description}</Text>

                                            <div className="price-grid-detailed">
                                                <div className="price-section-divider">Outstation (Per Km)</div>
                                                <Row gutter={12}>
                                                    <Col span={12}>
                                                        <div className="pricing-mini-card nac">
                                                            <Text type="secondary">Non-AC</Text>
                                                            <Text strong>{coach.outstation.nac}</Text>
                                                        </div>
                                                    </Col>
                                                    <Col span={12}>
                                                        <div className="pricing-mini-card ac">
                                                            <Text type="secondary">AC</Text>
                                                            <Text strong>{coach.outstation.ac}</Text>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>

                                            <div style={{ display: 'flex', gap: 10, marginTop: 25 }}>
                                                <Button type="primary" block className="call-us-btn booking-btn-luxury" icon={<PhoneOutlined />} href="tel:+919742100545">
                                                    Call Us
                                                </Button>
                                                <Button block className="enquiry-btn" href="/contact">
                                                    Enquiry
                                                </Button>
                                            </div>
                                        </div>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </div>
            </section>

            {/* Travel Packages */}
            < div id="packages" className="scroll-section" style={{ marginBottom: 60 }}>
                <div className="section-header">
                    <div className="section-title-premium">
                        <RocketOutlined /> POPULAR HOLIDAY PACKAGES
                    </div>
                    <Title level={2}>Explore Beautiful Destinations</Title>
                </div>

                <Row gutter={[24, 24]}>
                    {travelPackages.map((pkg, idx) => (
                        <Col xs={24} sm={12} lg={8} key={idx}>
                            <Card className="package-card-premium vibrant-card glow-orange" cover={
                                <div className="pkg-img" style={{ backgroundImage: `url(${pkg.image})` }}>
                                    <Tag color="orange" className="pkg-tag">{pkg.tag}</Tag>
                                </div>
                            }>
                                <div className="pkg-body">
                                    <Paragraph className="pkg-destination" style={{ color: 'var(--primary-deep)', fontWeight: 800, marginBottom: 5 }}>{pkg.destination}</Paragraph>
                                    <Title level={3} style={{ marginTop: 0, marginBottom: 5, color: '#000' }}>{pkg.title}</Title>
                                    <Text type="secondary" style={{ display: 'block', marginBottom: 15, fontWeight: 600, color: '#000', opacity: 0.7 }}>{pkg.subtitle}</Text>

                                    <div className="pkg-duration-box" style={{ marginBottom: 20 }}>
                                        <ClockCircleOutlined style={{ color: 'var(--primary)', marginRight: 8 }} /> <Text strong style={{ color: '#000' }}>{pkg.duration}</Text>
                                    </div>

                                    <div className="pkg-pricing-list">
                                        <div className="pricing-title-main">💰 Package Pricing</div>
                                        {pkg.pricing.map((p, pIdx) => (
                                            <div key={pIdx} className="pricing-item-row">
                                                <Text className="vehicle-name">{p.vehicle}</Text>
                                                <Text strong className="vehicle-price">{p.price}</Text>
                                            </div>
                                        ))}
                                    </div>

                                    <div style={{ display: 'flex', gap: 10, marginTop: 25 }}>
                                        <Button type="primary" block className="call-us-btn" icon={<PhoneOutlined />} href="tel:+919742100545">
                                            Call Us
                                        </Button>
                                        <Button block className="enquiry-btn" href="/contact">
                                            Enquiry
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>

            {/* Testimonials */}
            <div id="testimonials" style={{ marginBottom: 60 }}>
                <div className="section-header">
                    <div className="section-title-premium">
                        <StarFilled /> OUR TESTIMONIAL
                    </div>
                    <Title level={2}>Checkout our client's reviews</Title>
                    <Paragraph className="service-main-text" style={{ margin: '0 auto 40px', maxWidth: '800px' }}>
                        Our clients’ reviews reflect the trust and satisfaction they experience with Sri Manjunath Holidays.
                        From timely service and well-maintained vehicles to courteous drivers and smooth journeys,
                        their words highlight our dedication to excellence. Every positive review inspires us to
                        continue delivering safe, reliable, and memorable travel experiences.
                    </Paragraph>
                </div>
                <Row gutter={[24, 24]}>
                    <Col xs={24} md={8}>
                        <Card className="review-card">
                            <Paragraph className="review-text">
                                “Excellent service! The vehicle was clean, comfortable, and the driver was very polite. Truly made our trip enjoyable.”
                            </Paragraph>
                            <div className="review-user">
                                <div className="user-avatar">R</div>
                                <div>
                                    <Text strong>Raj</Text>
                                    <br />
                                    <Text type="secondary" size="small">Verified Customer</Text>
                                </div>
                                <div className="stars">
                                    {[1, 2, 3, 4, 5].map(s => <StarFilled key={s} />)}
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col xs={24} md={8}>
                        <Card className="review-card">
                            <Paragraph className="review-text">
                                “Affordable prices with great comfort. The team was very cooperative and ensured a hassle-free journey.”
                            </Paragraph>
                            <div className="review-user">
                                <div className="user-avatar">P</div>
                                <div>
                                    <Text strong>Priyanka</Text>
                                    <br />
                                    <Text type="secondary" size="small">Verified Customer</Text>
                                </div>
                                <div className="stars">
                                    {[1, 2, 3, 4, 5].map(s => <StarFilled key={s} />)}
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col xs={24} md={8}>
                        <Card className="review-card">
                            <Paragraph className="review-text">
                                “Professional service and on-time arrival. Highly recommend for any outstation travel.”
                            </Paragraph>
                            <div className="review-user">
                                <div className="user-avatar">S</div>
                                <div>
                                    <Text strong>Sampson</Text>
                                    <br />
                                    <Text type="secondary" size="small">Verified Customer</Text>
                                </div>
                                <div className="stars">
                                    {[1, 2, 3, 4, 5].map(s => <StarFilled key={s} />)}
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Dashboard;

