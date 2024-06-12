import React, {useEffect, useState} from "react";
import axios from "axios";
import { Container, Row, Col, Button } from "reactstrap";
import CommonSection from "../components/ui/Common-section/CommonSection";
import NftCard from "../components/ui/Nft-card/NftCard";

import "../styles/create-item.css";
import { useNavigate } from "react-router-dom";

const Create = () => {
  let [data, setData] = useState([])

  const navigate = useNavigate()
  function randomNft(){
    return Math.floor(Math.random()*(9 - 1 + 1)) + 1;
  }
  
  useEffect(() => {
    getRandomNft()
  },[])
  let getRandomNft = async () => {
    let id = randomNft()

    let response = await fetch(`nft/${id}`)
    let data = await response.json()

    setData(data)
  }

  let createNft = (data) => {
    fetch(`http://127.0.0.1:8000/createNft/`,{
      method : "POST",
      headers : {
          "Content-Type" : "application/json",
      },
      body : JSON.stringify(data),
  });
  }

  const submitHandler = (e) => {
    e.preventDefault()
    console.log("Submitted")
    createNft(e.target.data)
    // navigate('/')
  }

  return (
    <>
      <CommonSection title="Create Item" />

      <section>
        <Container>
          <Row>
            <Col lg="3" md="4" sm="6">
              <h5 className="mb-4 text-light">Preview Item</h5>
              <NftCard item={data} />
            </Col>

            <Col lg="9" md="8" sm="6">
              <div className="create__item">
                <form onSubmit={submitHandler}>
                  <div className="form__input">
                    <label htmlFor="">Upload File</label>
                    <input 
                      type="file" 
                      className="upload__input"
                      required 
                    />
                  </div>

                  <div className="form__input">
                    <label htmlFor="">Price</label>
                    <input
                      type="number"
                      placeholder="Enter price for one item (ETH)"
                      required
                      onChange={(e) => {
                        setData({ ...data, price: e.target.value });
                      }}
                    />
                  </div>

                  {/* <div className="form__input">
                    <label htmlFor="">Minimum Bid</label>
                    <input type="number" required placeholder="Enter minimum bid" />
                  </div>

                  <div className=" d-flex align-items-center gap-4">
                    <div className="form__input w-50">
                      <label htmlFor="">Starting Date</label>
                      <input type="date" />
                    </div>

                    <div className="form__input w-50">
                      <label htmlFor="">Expiration Date</label>
                      <input type="date" />
                    </div>
                  </div> */}

                  <div className="form__input">
                    <label htmlFor="">Title</label>
                    <input 
                      type="text" 
                      placeholder="Enter title" 
                      required
                      onChange={(e) => {
                        setData({ ...data, title: e.target.value });
                      }}
                    />
                  </div>

                  <div className="form__input">
                    <label htmlFor="">Description</label>
                    <textarea
                      name=""
                      id=""
                      rows="7"
                      placeholder="Enter description"
                      className="w-100"
                    ></textarea>
                  </div>

                  <Button>
                    Submit
                  </Button>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Create;
