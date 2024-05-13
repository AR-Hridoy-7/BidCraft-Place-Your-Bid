import React, { useState } from 'react';
import './DescriptionBox.css';
import q_logo from '../Assets/question_logo.jpeg';
import a_logo from '../Assets/answer_logo.jpg';

const DescriptionBox = ({ product, qna }) => {
  const [activeTab, setActiveTab] = useState('description');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div
          className={`descriptionbox-nav-box ${activeTab === 'description' ? 'active' : 'fade'}`}
          onClick={() => handleTabClick('description')}
        >
          Description
        </div>
        <div
          className={`descriptionbox-nav-box ${activeTab === 'reviews' ? 'active' : 'fade'}`}
          onClick={() => handleTabClick('reviews')}
        >
          Reviews ({qna.length})
        </div>
      </div>
      <div className="descriptionbox-description">
        {activeTab === 'description' ? (
          <>
            <p>{product.description}</p>
         
          </>
        ) : (
          <div className="description-item">
            {qna.map((item, i) => (
              <div key={i} className="question-answer">
                <div className="question-side">
                  <img src={q_logo} alt="" />
                  <p className="question">{item.question_text}</p>
                </div>
                <div className="answer-side">
                  {item.answers.length > 0 ? (
                    item.answers.map((answer, j) => (
                      <div key={j} className="answer-wrapper">
                        <img src={a_logo} alt="" className="answer-logo" />
                        <p className="answer">{answer.answer_text}</p>
                      </div>
                    ))
                  ) : (
                    <p>No answers available</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DescriptionBox;
