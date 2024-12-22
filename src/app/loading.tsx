import { Col, Row, Spin } from 'antd';
import React from 'react';

export default function Loading(): React.ReactElement {
    return (
        <Row justify="center" align="middle" style={{ height: '100vh' }}>
            <Col>
                <Spin size="large" />
            </Col>
        </Row>
    );
}
