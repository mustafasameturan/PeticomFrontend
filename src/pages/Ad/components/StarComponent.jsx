import React, { useEffect, useState } from "react";
import {
  AddStar,
  CalculateStarAverageByAdId,
  GetStarByUserIdAndAdId,
} from "../../../services/StarService";
import useAuth from "../../../hooks/useAuth";
import "../../../assets/css/star.css";

const StarComponent = ({ adId }) => {
  const { user, token } = useAuth();

  const [star, setStar] = useState(null);
  const [isHaveStar, setIsHaveStar] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isStarDisabled, setIsStarDisabled] = useState(false);

  const getStarAverageByAdId = async (adId) => {
    const result = await CalculateStarAverageByAdId(adId);

    if (result.statusCode === 200) {
      setStar((star) => Math.round(result.data));
    }
  };

  const getStarsByUserIdAndAdId = async (userId, adId) => {
    const result = await GetStarByUserIdAndAdId(userId, adId);
    
    if (result.statusCode === 200) {
      setIsHaveStar((isHaveStar) => true);
    } else {
      setIsHaveStar((isHaveStar) => false);
    }
  };

  const sendRequestToGetStarsByUserAndAdIdEndpoint = () => {
    if(user.UserId && adId){
      getStarsByUserIdAndAdId(user.UserId, adId);
    }
  }

  const addStar = async (star) => {
    let model = {
      userId: user.UserId,
      adId: adId,
      starCount: star,
    };

    await AddStar(model);
    sendRequestToGetStarsByUserAndAdIdEndpoint();
  };

  useEffect(() => {
    if (user.UserId && adId) {
      sendRequestToGetStarsByUserAndAdIdEndpoint();
    }
    getStarAverageByAdId(adId);
  }, [adId]);

  useEffect(() => {
    if(token.length === 0){
      setIsStarDisabled(isStarDisabled => true);
    }
  }, [token])

  useEffect(() => {
    if (isHaveStar) {
      setIsStarDisabled(true);
    }
  }, [isHaveStar, isLoggedIn]);
  

  return (
      <div className="star-rating mt-2">
        <div className={`star-rating__stars ${isStarDisabled ? 'pointer-events-none' : ''}`}>
          <input
            id={`1-${adId.split("-")[0]}`}
            className="star-rating__input"
            type="radio"
            name={`rating-${adId.split("-")[0]}`}
            value="1"
            checked={star === 1}
            disabled={isHaveStar}
            onChange={() => setStar(1)}
            onClick={() => addStar(1)}
          />
          <label
            className={`star-rating__label ${(isStarDisabled) ? 'disabled' : ''}`}
            htmlFor={`1-${adId.split("-")[0]}`}
            aria-label="One"
          ></label>

          <input
            id={`2-${adId.split("-")[0]}`}
            className="star-rating__input"
            type="radio"
            name={`rating-${adId.split("-")[0]}`}
            value="2"
            checked={star === 2}
            disabled={isHaveStar}
            onChange={() => setStar(2)}
            onClick={() => addStar(2)}
          />
          <label
            className={`star-rating__label ${(isStarDisabled) ? 'disabled' : ''}`}
            htmlFor={`2-${adId.split("-")[0]}`}
            aria-label="Two"
          ></label>

          <input
            id={`3-${adId.split("-")[0]}`}
            className="star-rating__input"
            type="radio"
            name={`rating-${adId.split("-")[0]}`}
            value="3"
            checked={star === 3}
            disabled={isHaveStar}
            onChange={() => setStar(3)}
            onClick={() => addStar(3)}
          />
          <label
            className={`star-rating__label ${(isStarDisabled) ? 'disabled' : ''}`}
            htmlFor={`3-${adId.split("-")[0]}`}
            aria-label="Three"
          ></label>

          <input
            id={`4-${adId.split("-")[0]}`}
            className="star-rating__input"
            type="radio"
            name={`rating-${adId.split("-")[0]}`}
            value="4"
            checked={star === 4}
            disabled={isHaveStar}
            onChange={() => setStar(4)}
            onClick={() => addStar(4)}
          />
          <label
            className={`star-rating__label ${(isStarDisabled) ? 'disabled' : ''}`}
            htmlFor={`4-${adId.split("-")[0]}`}
            aria-label="Four"
          ></label>

          <input
            id={`5-${adId.split("-")[0]}`}
            className="star-rating__input"
            type="radio"
            name={`rating-${adId.split("-")[0]}`}
            value="5"
            checked={star === 5}
            disabled={isHaveStar}
            onChange={() => setStar(5)}
            onClick={() => addStar(5)}
          />
          <label
            className={`star-rating__label ${(isStarDisabled) ? 'disabled' : ''}`}
            htmlFor={`5-${adId.split("-")[0]}`}
            aria-label="Five"
          ></label>
          <div className="star-rating__focus"></div>
        </div>
      </div>
  );
};

export default StarComponent;
