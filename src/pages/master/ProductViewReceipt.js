import React from 'react'
import { Col, Row,Button } from 'react-bootstrap'
import { CardLayout } from '../../components/cards'
import { Box } from '../../components/elements'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faClock, faAngleDown } from '@fortawesome/free-solid-svg-icons'

export default function ProductViewReceipt() {
    return (
        <div>
            <CardLayout>
                <Row className="f-13">
                    <Col md={4}>
                        <FontAwesomeIcon icon={faEdit} /> Takeaway
                    </Col>
                    <Col md={4} className="text-center" >
                        <FontAwesomeIcon icon={faClock} /> 00:00
                    </Col>
                    <Col md={4} className="text-end">
                        #2324  <FontAwesomeIcon icon={faAngleDown} />
                    </Col>
                    <Col md={12}>
                        <Box className={'pv-receipt-box'}>

                        </Box>
                    </Col>
                    <Col md={6}>
                        Discount<br />
                        00.33
                    </Col>
                    <Col md={6}>
                        Subtotal<br />
                        00.33
                    </Col>
                    <Col md={12}>
                        <Button className="w-100">
                            {" "}
                            Check out
                        </Button>
                    </Col>
                </Row>

            </CardLayout>
        </div>
    )
}
