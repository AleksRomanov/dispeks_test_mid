// import {useState} from 'react'
import './App.css'
import {BrowserRouter as Router} from 'react-router-dom';
import {DownOutlined} from '@ant-design/icons';
import type {MenuProps} from 'antd';
import {Card, Col, Row, ConfigProvider, Dropdown, Space} from 'antd';
import reactLogo from './assets/react.svg'
import Layout from "./Components/Layout/Layout.tsx";
import {AppStyles} from "./App.styles.tw.ts";

const items: MenuProps['items'] = [
    {
        key: '1',
        type: 'group',
        label: 'Улица 1',
        children: [
            {
                key: '1-1',
                label: 'Дом 1',
                children: [
                    {
                        key: '1-1-1',
                        label: 'Квартира 1',
                    },
                    {
                        key: '1-1-2',
                        label: 'Квартира 2',
                    },
                    {
                        key: '1-1-3',
                        label: 'Квартира 3',
                    },
                    {
                        key: '1-1-4',
                        label: 'Квартира 4',
                    },
                ],
            },
            {
                key: '1-2',
                label: 'Дом 2',
                children: [
                    {
                        key: '1-1-1',
                        label: 'Квартира 1',
                    },
                ],
            },
        ],
    },
    {
        key: '1',
        type: 'group',
        label: 'Улица 2',
        children: [
            {
                key: '2-1',
                label: 'Дом 1',
                children: [
                    {
                        key: '2-1-1',
                        label: 'Квартира 1',
                    },
                    {
                        key: '2-1-2',
                        label: 'Квартира 2',
                    },
                    {
                        key: '2-1-3',
                        label: 'Квартира 3',
                    },
                    {
                        key: '2-1-4',
                        label: 'Квартира 4',
                    },
                ],
            },
            {
                key: '2-2',
                label: 'Дом 2',
                children: [
                    {
                        key: '2-2-1',
                        label: 'Квартира 1',
                    },
                ],
            },
        ],
    },
];

function App() {
    // const [count, setCount] = useState(0)
    return (
        <ConfigProvider theme={{hashed: false}}>
            <Router>
                <Layout>
                 <AppStyles className="main">
                        <h1 className="main-title">Dispeks_form_test</h1>
                        <Dropdown menu={{items}}>
                            <a onClick={(e) => e.preventDefault()}>
                                <Space>
                                    Выбрать квартиру
                                    <DownOutlined/>
                                </Space>
                            </a>
                        </Dropdown>
                        <img src={reactLogo} className="logo" alt="React logo"/>
                     <Row gutter={16}>
                         <Col span={8}>
                             <Card title="Card title" bordered={false}>
                                 Card content
                             </Card>
                         </Col>
                         <Col span={8}>
                             <Card title="Card title" bordered={false}>
                                 Card content
                             </Card>
                         </Col>
                         <Col span={8}>
                             <Card title="Card title" bordered={false}>
                                 Card content
                             </Card>
                         </Col>
                     </Row>
                 </AppStyles>
                </Layout>
            </Router>
        </ConfigProvider>
    )
}

export default App;
