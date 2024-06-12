import {useState, useEffect} from "react";
import axios from 'axios'
import { Container, Row, Col } from "reactstrap";

import { NFT__DATA } from "../../../assets/data/data";
import "./trending.css";

import NftCard from "../Nft-card/NftCard";

const Trending = () => {
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
            <h3 className="trending__title">Trending</h3>
          </Col>

          {nfts.map((item) => (
            <Col lg="3" md="4" sm="6" key={item.id} className="mb-4">
              <NftCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Trending;
