import React, { useState } from "react";
import { Col, Row ,Button,Modal} from "react-bootstrap";
import { Link } from "react-router-dom";
import { CardLayout } from "../../components/cards";
import { Box, Text } from "../../components/elements";
import GuestSelectModel from "../../components/popupsModel/GuestSelectModel";
import { LabelField } from "../../components/fields";
import { faCheck, faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function OrderLineTable1() {
  const [value, setValue] = useState(0);
  const [showModel, setShow] = useState(false);
  const handleButtonClick = (input) => {
    if (input === "delete") {
      const newValue = Math.floor(value / 10); 
      setValue(newValue);
    } else if (value < 100) {
      setValue(value * 10 + input);
    }
  };
  const handleTextChange = (event) => {
    setValue(event.target.value);
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Col md={12}>
        <CardLayout>
          <Box className={"order-line-tables-wrapper"}>
            <Box className={"order-line-tables"}>
              <Row>
                <Col md={3}>
                  <Box className={"child-one-box-container"}>
                    <Link to={""} onClick={handleShow} className={"child-one-box"}>
                      <h6>Table 1</h6>
                      <br />
                      <Text as="span">4</Text>

                    </Link>
                    <Modal className='guestSelect-model f-13' show={showModel} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title className='f-13'>Guest Select</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Col md={12}>
                                <LabelField type={'number'} value={value} placeholder="0" />
                            </Col>
                            <Col md={12}>
                                <Box className={'cal-btns-wrapper d-flex-wrap'}>
                                <button onClick={() => handleButtonClick(1)} className={'cal-btns'}>1</button>
                                <button   className={'cal-btns'} onClick={() => handleButtonClick(2)}>2</button>
                                <button className={'cal-btns'} onClick={() => handleButtonClick(3)}>3</button>
                                <button  className={'cal-btns'} onClick={() => handleButtonClick(4)}>4</button>
                                <button className={'cal-btns'} onClick={() => handleButtonClick(5)}>5</button>
                                <button className={'cal-btns'} onClick={() => handleButtonClick(6)}>6</button>
                                <button className={'cal-btns'} onClick={() => handleButtonClick(7)}>7</button>
                                <button className={'cal-btns'} onClick={() => handleButtonClick(8)}>8</button>
                                <button className={'cal-btns'} onClick={() => handleButtonClick(9)}>9</button>
                                <button className={'cal-btns'} onClick={() => handleButtonClick(0)}>.</button>
                                <button className={'cal-btns'} onClick={() => handleButtonClick(0)}>0</button>
                                <button className={'cal-btns'} onClick={() => handleButtonClick("delete")}>
                                    <FontAwesomeIcon icon={faDeleteLeft}/>
                                </button>
                                </Box>
                            </Col>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button className='cus-btn' onClick={handleClose}>
                                <FontAwesomeIcon icon={faCheck} />  Save
                            </Button>
                        </Modal.Footer>
                    </Modal>
                    <Link to={""} className={"child-one-box"}>
                      <Box>
                        <h6>Table 1</h6>
                        <br />
                        <Text as="span">34</Text>
                      </Box>
                    </Link>
                    <Link to={""} className={"child-one-box"}>
                      <h6>Table 1</h6>
                      <br />
                      <Text as="span">4</Text>
                    </Link>
                    <Link to={""} className={"child-one-box"}>
                      <h6>Table 1</h6>
                      <br />
                      <Text as="span">4</Text>
                    </Link>
                  </Box>
                </Col>
                <Col md={3}>
                  <Link to={""} className={"child-two-box-container"}>
                    <Box className={"child-two-box"}>
                      <h6>Table 1</h6>
                      <br />
                      <Text as="span">4</Text>
                    </Box>
                  </Link>
                </Col>
                <Col md={3}>
                  <Box className={"child-thr-box-container"}>
                    <Link to={""} className={"child-thr-box"}>
                      <h6>Table 1</h6>
                      <br />
                      <Text as="span">4</Text>
                    </Link>
                    <Link to={""} className={"child-thr-box"}>
                      <h6>Table 1</h6>
                      <br />
                      <Text as="span">4</Text>
                    </Link>
                  </Box>
                </Col>
                <Col md={3}>
                  <Box className={"child-one-box-container"}>
                    <Link to={""} className={"child-one-box"}>
                      <h6>Table 1</h6>
                      <br />
                      <Text as="span">4</Text>
                    </Link>
                    <Link to={""} className={"child-one-box child-four-box"}>
                      <h6>Table 1</h6>
                      <br />
                      <Text as="span">4</Text>
                    </Link>
                    <Link to={""} className={"child-one-box"}>
                      <h6>Table 1</h6>
                      <br />
                      <Text as="span">4</Text>
                    </Link>
                  </Box>
                </Col>
              </Row>
            </Box>
          </Box>
        </CardLayout>
      </Col>
    </div>
  );
}
