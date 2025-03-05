import Link from "next/link";
import React from "react";
import { baseUrl } from "@/Http/helper";

const QuestionsAnswers = () => {

    return (
        <>
        <div className="questions_answers" bis_skin_checked={1}>
  <div className="container" bis_skin_checked={1}>
    <div className="row" bis_skin_checked={1}>
      <div className="col-lg-12" bis_skin_checked={1}>
        <div className="" bis_skin_checked={1}>
          <h2 className="title-left">
            {" "}
            Questions and Answers for specific info?{" "}
          </h2>
          {/*  <div className="next-prev-swiper-wrapper">
      <div className="swiper-button-prev"><i className="fa-regular fa-chevron-left"></i></div>
      <div className="swiper-button-next"><i className="fa-regular fa-chevron-right"></i></div>
    </div> */}
        </div>
      </div>
      <div className="col-lg-4" bis_skin_checked={1}>
        <div
          className="form-group has-search question_anser_specific"
          bis_skin_checked={1}
        >
          <span className="fa fa-search form-control-feedback2" />
          <input
            type="text"
            className="form-control"
            placeholder="Search Questions and Answers"
          />
        </div>
      </div>
      <div className="col-lg-12" bis_skin_checked={1}>
        <div className="question_ansewer" bis_skin_checked={1}>
          <p>
            <strong>Question:</strong> What makes wireless headphones good for
            noise cancellation?
          </p>
          <p>
            <span className="orange">Answer:</span> Good wireless headphones for
            noise cancellation feature strong Active Noise Cancellation (ANC)
            technology, high quality drivers for clear sound, and a comfortable
            design for extended wear.
          </p>
        </div>
      </div>
      <div className="devider" bis_skin_checked={1} />
      <div className="col-lg-12" bis_skin_checked={1}>
        <div className="question_ansewer" bis_skin_checked={1}>
          <p>
            <strong>Question:</strong> How long should the battery last on
            wireless headphones?
          </p>
          <p>
            <span className="orange">Answer:</span> A good pair of wireless
            headphones should offer at least 20 hours of battery life with noise
            cancellation on
          </p>
        </div>
      </div>
      <div className="col-lg-5" bis_skin_checked={1}>
        <div className="input-group ask_a_question" bis_skin_checked={1}>
          <input
            type="text"
            className="form-control"
            placeholder="Didn t find the answer you need?"
          />
          <div className="input-group-append" bis_skin_checked={1}>
            <button className="ask" type="button">
              Ask your question
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        </>
    )
}
export default QuestionsAnswers