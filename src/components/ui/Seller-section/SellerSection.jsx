import React, {useState, useEffect} from "react";
import "./seller.css";
import { Container, Row, Col } from "reactstrap";
import { SELLER__DATA } from "../../../assets/data/data";
import axios from 'axios'

const SellerSection = () => {
  let [seller, setSeller] = useState([])

  useEffect(() => {
    getSeller()
  }, [])

  let getSeller = async () => {
      let response = await fetch('seller/')
      let data = await response.json()
      // console.log("Data : " ,data)
      setSeller(data)
  }
  let data = [...seller].sort((a, b) => b.highestBid - a.highestBid)
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="seller__section-title">
              <h3>Top Seller</h3>
            </div>
          </Col>

          {data.map((item) => (
            <Col lg="2" md="3" sm="4" xs="6" key={item.id} className="mb-4">
              <div className="single__seller-card d-flex align-items-center gap-3">
                <div className="seller__img">
                  <img src={item.sellerImage} alt="" className="w-100" />
                </div>

                <div className="seller__content">
                  <h6>{item.sellerName}</h6>
                  <h6>{item.highestBid} ETH</h6>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default SellerSection;
