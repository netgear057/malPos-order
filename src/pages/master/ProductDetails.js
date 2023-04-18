import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { CardLayout } from "../../components/cards";
import ProductCard from "../../components/cards/ProductCard";
import { Box, Input, Label, List } from "../../components/elements";
import { LabelField } from "../../components/fields";
import PageLayout from "../../layouts/PageLayout";
import { Text } from "../../components/elements";
import { Fontawesome, FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import data from "../../data/master/productList.json";

import {
  faB,
  faBars,
  faGear,
  faHome,
  faPlus,
  faSearch,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import ImageCards from "../../components/cards/ImageCards";
import ProductViewReceipt from "./ProductViewReceipt";
import { Link, useLocation } from "react-router-dom";
import AddGuestProductModal from "../../components/popupsModel/AddGuestProductModal";

export default function ProductDetails() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [addGuest, setAddGuest] = useState(false);
  const handlAddGuestClose = () => setAddGuest(false);
  const handlAddGuestShow = () => setAddGuest(true);
  const [selectedItem, setSelectedItem] = useState("");
  // const handleShowAdd = () => setShowAdd(true);
  const location = useLocation();
  // const service = location.state;
  const { id, service } = location.state;
  console.log(service);
  console.log(id);
  const myList = [
    { name: "Lasgana 220 Kg", qty: 2, subtotal: 10 },
    { name: "Large Pizza", qty: 1, subtotal: 5 },
    { name: "250 ml Coke", qty: 3, subtotal: 15 },
  ];

  return (
    <div>
      <PageLayout>
        <Row>
          <Col md={12}>
            <Row>
              {/* <Col md={1}>
                <CardLayout>
                  <Sidebar />
                  <MultipleMenu data={data?.navs} />
                </CardLayout>
              </Col> */}
              <Col md={4}>
                <Row>
                  <ProductViewReceipt id={service.service} />
                </Row>
              </Col>
              <Col md={8}>
                <CardLayout>
                  <Row>
                    <Col md={7}>
                      <Row>
                        <Col md={2}>
                          <Link to="/orders-line">
                            <Button className={"logo-btn-p"}>
                              <FontAwesomeIcon icon={faHome} />
                            </Button>
                          </Link>
                        </Col>
                        <Col md={5}>
                          {data.product.tbody
                            .filter((item) => {
                              return item.id == id;
                            })
                            .map((item, i) => (
                              <Text>{item.heading}</Text>
                            ))}
                        </Col>
                        {/* <Text>
                        {id[0].toUpperCase() + id.slice(1).replaceAll("-", " ")}
                      </Text> */}
                      </Row>
                    </Col>

                    <Col md={5}>
                      <Box className={"search-btn-box"}>
                        <Button onClick={handleShow} className={"logo-btn-p"}>
                          <FontAwesomeIcon icon={faSearch} />
                        </Button>
                        <Modal
                          className="search-model"
                          show={show}
                          onHide={handleClose}
                        >
                          <Modal.Body>
                            <LabelField
                              type={"search"}
                              placeholder={"Search here"}
                              label={"Search"}
                              fieldSize={" w-100 h-45"}
                            />
                          </Modal.Body>
                        </Modal>
                        <Button className={"logo-btn-p"}>
                          <FontAwesomeIcon icon={faBars} />
                        </Button>
                        <Button className={"logo-btn-p"}>
                          <FontAwesomeIcon icon={faGear} />
                        </Button>
                        <Button className={"logo-btn-p"}>
                          <FontAwesomeIcon icon={faStar} />
                        </Button>
                        <Button className={"logo-btn-p"}>
                          <FontAwesomeIcon icon={faB} />
                        </Button>
                      </Box>
                    </Col>

                    <Col md={12}>
                    <Box className={"product-img-card"}>


                          {data.product.tbody
                            .filter((item) => {
                              return item.id == id;
                            })
                            .map((item, i) => (
                              <div
                                className="clickable"
                                key={i}
                                onClick={() => setSelectedItem(item.heading)}
                              >
                                <Box onClick={handlAddGuestShow} className={'imgCard'}>
                                <ImageCards
                                  Imgsrc={item.src}
                                  productTitle={item.heading}
                                />
                              <AddGuestProductModal show={addGuest} handlAddGuestClose={handlAddGuestClose} handlAddGuestShow={handlAddGuestShow}/>

                                </Box>
                              </div>
                            ))}
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
  );
}
