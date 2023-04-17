import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { CardLayout } from '../../components/cards'
import PageLayout from '../../layouts/PageLayout'
import Header from '../../layouts/Header'
import OpenReceipt from './OpenReceipt'
import AchieveReceipt from './AchieveReceipt'
import OfflineAchieveReceipt from './OfflineAchieveReceipt'
import { Text } from '../../components/elements'

export default function OrderReceipt() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleItemClick = (index) => {
        setActiveIndex(index);
    };
    return (
        <div>
            <PageLayout>
                <Row>
                    <Col md={12}>
                        <CardLayout className={'f-13'}>
                            <Text
                                className={`bold floor-bg mr-10 ${activeIndex === 0 ? "active" : ""
                                    }`}
                                as="span"
                                onClick={() => handleItemClick(0)}
                            >  OpenReceipt
                            </Text>
                            <Text
                                className={`bold floor-bg mr-10 ${activeIndex === 1 ? "active" : ""
                                    }`}
                                as="span"
                                onClick={() => handleItemClick(1)}
                                id="1"
                            > Achieve Receipt
                            </Text>
                            <Text
                                className={`bold floor-bg mr-10 ${activeIndex === 2 ? "active" : ""
                                    }`}
                                as="span"
                                onClick={() => handleItemClick(2)}
                                id="2"
                            > Offline Achieve Receipt
                            </Text>
                        </CardLayout>
                    </Col>
                    <Col md={12}>
                        <CardLayout>
                            {activeIndex === 0 && <OpenReceipt />}
                            {activeIndex === 1 && <AchieveReceipt />}
                            {activeIndex === 2 && <OfflineAchieveReceipt />}

                        </CardLayout>
                    </Col>
                </Row>
            </PageLayout>
        </div>
    )
}
