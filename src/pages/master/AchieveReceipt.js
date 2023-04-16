import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { LabelField } from '../../components/fields'
import { Box } from '../../components/elements'
export default function AchieveReceipt() {
    return (
        <div>
            <Row>
                <Col md={12}>
                    <Box className={'open-receipt-box'}>
                        <LabelField
                            type={'date'}
                            fieldSize=" mr-10 field-w-150 h-md "
                        />
                        <LabelField
                            option={["ID", "Cash", "Card", "Bank"]}
                            fieldSize=" mr-10  field-w-200 h-md"
                        />
                        <LabelField
                            option={["Hall", "Cash", "Card", "Bank"]}
                            fieldSize=" mr-10 field-w-100 h-md "
                        />
                        <LabelField
                            option={["Table", "Cash", "Card", "Bank"]}
                            fieldSize=" mr-10 field-w-100 h-md "
                        />
                    </Box>
                </Col>
            </Row>
        </div>
    )
}
