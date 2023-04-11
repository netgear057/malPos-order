import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { CardLayout } from '../../components/cards'
import ProductCard from '../../components/cards/ProductCard'
import { Box } from '../../components/elements'
import { LabelField } from '../../components/fields'
import PageLayout from '../../layouts/PageLayout'
import {Text} from '../../components/elements'
import {Fontawesome} from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'
export default function ProductsView() {
    return (
        <div>
            <PageLayout>
                <Row>
                    <Col md={12}>
                        <CardLayout>
                            <h3>My Products</h3>
                        </CardLayout>
                    </Col>
                    <Col md={12}>
                        <Row>
                            <Col md={3} className={'product-checkout-sidebar'}>
                                <Box className={'my-products-aside-col'}>
                                <Row>
                                    <Col md={12}>
                                        <CardLayout>
                                            <h5>Inside <span>Table</span> 3</h5>
                                        </CardLayout>
                                    </Col>
                                    <Col md={12} className={'mt-10'}>
                                        <CardLayout>
                                           <Box className={'product-card-details-wrapper'}>
                                           <Box className={'product-card-details'}>
                                            <Box >
                                              <Text as='span'>  Arabian salad</Text>
                                            </Box>
                                            <Box>
                                                +
                                                 {/* <Fontawesome icon={faPlus}/> */}
                                            </Box>
                                           </Box>
                                           <Text as={'span'}>Price : 23$</Text>
                                           <Box className={'product-card-details'}>
                                            <Box >
                                              Arabian salad
                                            </Box>
                                            <Box>
                                                +
                                                 {/* <Fontawesome icon={faPlus}/> */}
                                            </Box>
                                           </Box>
                                           </Box>
                                           
                                        </CardLayout>
                                    </Col>
                                    <Col md={12}>
                                        <CardLayout>
                                            <Box className={'f-13'}>
                                        <Text className={'f-15 f-bold'} as={'span'}>Sub Total</Text> : 4234 $<br/>
                                        <Text  className={'f-15'}as={'span'}>Total</Text> : 43223$
                                        </Box>
                                        </CardLayout>
                                    </Col>
                                </Row>
                                </Box>
                            </Col>
                            <Col md={9}>
                                <CardLayout>
                                    <Row>
                                        <Col md={8}>
                                            <LabelField fieldSize={'w100'} type={'search'} placeholder={'Search product'} />
                                        </Col>
                                        <Col md={4}>
                                            <Box className={'search-btn-box'}>
                                                <Button className='a'>Seach</Button>
                                            </Box>
                                        </Col>
                                        <h3>Salads</h3>

                                        <Col md={12}>
                                            <Box className={'product-card-dis'}>
                                                <ProductCard buttonTitle={'Buy Now'} cardTitle={'Capcicum Salads(245kg) '} Imgsrc={'images/product/single/salad.jpg'} />
                                                <ProductCard buttonTitle={'Buy Now'} cardTitle={'Capcicum Salads(245kg) '} Imgsrc={'images/product/single/salad.jpg'} />
                                                <ProductCard buttonTitle={'Buy Now'} cardTitle={'Capcicum Salads(245kg) '} Imgsrc={'images/product/single/salad.jpg'} />
                                                <ProductCard buttonTitle={'Buy Now'} cardTitle={'Capcicum Salads(245kg) '} Imgsrc={'images/product/single/salad.jpg'} />
                                                <ProductCard buttonTitle={'Buy Now'} cardTitle={'Capcicum Salads(245kg) '} Imgsrc={'images/product/single/salad.jpg'} />
                                                <ProductCard buttonTitle={'Buy Now'} cardTitle={'Capcicum Salads(245kg) '} Imgsrc={'images/product/single/salad.jpg'} />
                                                <ProductCard buttonTitle={'Buy Now'} cardTitle={'Capcicum Salads(245kg) '} Imgsrc={'images/product/single/salad.jpg'} />
                                                <ProductCard buttonTitle={'Buy Now'} cardTitle={'Capcicum Salads(245kg) '} Imgsrc={'images/product/single/salad.jpg'} />
                                                <ProductCard buttonTitle={'Buy Now'} cardTitle={'Capcicum Salads(245kg) '} Imgsrc={'images/product/single/salad.jpg'} />
                                                <ProductCard buttonTitle={'Buy Now'} cardTitle={'Capcicum Salads(245kg) '} Imgsrc={'images/product/single/salad.jpg'} />
                                                <ProductCard buttonTitle={'Buy Now'} cardTitle={'Capcicum Salads(245kg) '} Imgsrc={'images/product/single/salad.jpg'} />
                                            </Box>
                                        </Col>
                                    </Row>
                                </CardLayout>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </PageLayout>
        </div>
    )
}
