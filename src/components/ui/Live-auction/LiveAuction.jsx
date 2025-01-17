import React, {useState, useEffect} from "react";
// import axios from "axios"
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import NftCard from "../Nft-card/NftCard";
import { NFT__DATA } from "../../../assets/data/data.js";

import "./live-auction.css";

const LiveAuction = () => {
  let [nfts, setNfts] = useState([])

  useEffect(() => {
    getNfts()
    // console.log("Nfts ", nfts)
  }, [])

  let getNfts = async () => {
    let response = await fetch('nfts/')
    let data = await response.json()
    setNfts(data)
    // console.log('Data : ' , data)

  }
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="live__auction__top d-flex align-items-center justify-content-between ">
              <h3>Live Auction</h3>
              <span>
                <Link to="/market">Explore more</Link>
              </span>
            </div>
          </Col>

          {nfts.slice(0, 4).map((item) => (
            <Col lg="3" md="4" sm="6" className="mb-4">
              <NftCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default LiveAuction;
