import React from "react";
import { About, Description, Image, Hide } from "../styles";
import styled from "styled-components";

const FaqSection = () => {
  return (
    <>
      <Faq>
        <h2>
          Any Questions <span>FAQ</span>
        </h2>
        <div className="question">
          <h4>how Do I Start?</h4>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
              ipsum, nam molestias dolorem cum, sunt assumenda tempora
              necessitatibus quasi maxime corporis rem atque incidunt fugit
              minus repudiandae ea possimus nisi?
            </p>
          </div>
          <div className="faq-line"></div>
        </div>
        <div className="question">
          <h4>Daily schedule</h4>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
              ipsum, nam molestias dolorem cum, sunt assumenda tempora
              necessitatibus quasi maxime corporis rem atque incidunt fugit
              minus repudiandae ea possimus nisi?
            </p>
          </div>
          <div className="faq-line"></div>
        </div>
        <div className="question">
          <h4>Differnet Payment Method</h4>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
              ipsum, nam molestias dolorem cum, sunt assumenda tempora
              necessitatibus quasi maxime corporis rem atque incidunt fugit
              minus repudiandae ea possimus nisi?
            </p>
          </div>
          <div className="faq-line"></div>
        </div>
        <div className="question">
          <h4>What Product Do you Offer</h4>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
              ipsum, nam molestias dolorem cum, sunt assumenda tempora
              necessitatibus quasi maxime corporis rem atque incidunt fugit
              minus repudiandae ea possimus nisi?
            </p>
          </div>
          <div className="faq-line"></div>
        </div>
      </Faq>
    </>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
