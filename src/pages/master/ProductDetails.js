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
import {
  faB,
  faBars,
  faGear,
  faHome,
  faPlus,
  faSearch,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../../layouts/Sidebar";
import ImageCards from "../../components/cards/ImageCards";
import ProductViewReceipt from "./ProductViewReceipt";
import { MultipleMenu } from "../../components/sidebar";

export default function ProductDetails() {
  const [showAdd, setShowAdd] = useState(false);

  const handleShowAdd = () => setShowAdd(true);

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
              <Col md={1}>
                <CardLayout>
                  <Sidebar />
                  {/* <MultipleMenu data={data?.navs} /> */}
                </CardLayout>
              </Col>
              <Col md={4}>
                <Row>
                  <ProductViewReceipt />
                </Row>
              </Col>
              <Col md={7}>
                <CardLayout>
                  <Row>
                    <Col md={7}>
                      <Button className={"logo-btn-p"}>
                        <FontAwesomeIcon icon={faHome} />
                      </Button>
                    </Col>
                    <Col md={5}>
                      <Box className={"search-btn-box"}>
                        <Button className={"logo-btn-p"}>
                          <FontAwesomeIcon icon={faSearch} />
                        </Button>
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
                    <h3>Salads</h3>

                    <Col md={12}>
                      <Row>
                        <Col md={3}>
                          <div>
                            <ImageCards
                              Imgsrc={"images/product/single/salad.jpg"}
                              productTitle=" lasgana"
                            />
                          </div>
                        </Col>
                        <Col md={3}>
                          <div onClick={handleShowAdd}>
                            <ImageCards
                              Imgsrc={"images/product/single/salad.jpg"}
                              productTitle=" lasgana"
                            />
                          </div>
                        </Col>{" "}
                        <Col md={3}>
                          <ImageCards
                            Imgsrc={"images/product/single/salad.jpg"}
                            productTitle=" lasgana"
                          />
                        </Col>{" "}
                        <Col md={3}>
                          <ImageCards
                            Imgsrc={"images/product/single/salad.jpg"}
                            productTitle=" lasgana"
                          />
                        </Col>{" "}
                        <Col md={3}>
                          <ImageCards
                            Imgsrc={"images/product/single/salad.jpg"}
                            productTitle="lasgana"
                          />
                        </Col>
                      </Row>
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
