import React, { useEffect, useState } from "react";
import {
  AddStar,
  CalculateStarAverageByAdId,
  GetStarByUserIdAndAdId,
} from "../../../services/StarService";
import useAuth from "../../../hooks/useAuth";
import "../../../assets/css/star.css";

const StarComponent = ({ adId }) => {
  const { user } = useAuth();

  const [isHaveStar, setIsHaveStar] = useState(false);
  const [star, setStar] = useState(null);

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

  const addStar = async (star) => {
    let model = {
      userId: user.UserId,
      adId: adId,
      starCount: star,
    };

    await AddStar(model);
  };

  useEffect(() => {
    if (user.UserId && adId) {
      getStarsByUserIdAndAdId(user.UserId, adId);
      getStarAverageByAdId(adId);
    }
  }, [adId]);

  return (
      <div className="star-rating mt-2">
        <div className="star-rating__stars disabled">
          <input
            id={`1-${adId.split("-")[0]}`}
            className={`star-rating__input ${
              isHaveStar ? "pointer-events-none" : ""
            }`}
            type="radio"
            name={`rating-${adId.split("-")[0]}`}
            value="1"
            checked={star === 1}
            disabled={isHaveStar}
            onChange={() => setStar(1)}
            onClick={() => addStar(1)}
          />
          <label
            className="star-rating__label"
            htmlFor={`1-${adId.split("-")[0]}`}
            aria-label="One"
          ></label>

          <input
            id={`2-${adId.split("-")[0]}`}
            className={`star-rating__input ${
              isHaveStar ? "pointer-events-none " : ""
            }`}
            type="radio"
            name={`rating-${adId.split("-")[0]}`}
            value="2"
            checked={star === 2}
            disabled={isHaveStar}
            onChange={() => setStar(2)}
            onClick={() => addStar(2)}
          />
          <label
            className="star-rating__label"
            htmlFor={`2-${adId.split("-")[0]}`}
            aria-label="Two"
          ></label>

          <input
            id={`3-${adId.split("-")[0]}`}
            className={`star-rating__input ${
              isHaveStar ? "pointer-events-none " : ""
            }`}
            type="radio"
            name={`rating-${adId.split("-")[0]}`}
            value="3"
            checked={star === 3}
            disabled={isHaveStar}
            onChange={() => setStar(3)}
            onClick={() => addStar(3)}
          />
          <label
            className="star-rating__label"
            htmlFor={`3-${adId.split("-")[0]}`}
            aria-label="Three"
          ></label>

          <input
            id={`4-${adId.split("-")[0]}`}
            className={`star-rating__input ${
              isHaveStar ? "pointer-events-none " : ""
            }`}
            type="radio"
            name={`rating-${adId.split("-")[0]}`}
            value="4"
            checked={star === 4}
            disabled={isHaveStar}
            onChange={() => setStar(4)}
            onClick={() => addStar(4)}
          />
          <label
            className="star-rating__label"
            htmlFor={`4-${adId.split("-")[0]}`}
            aria-label="Four"
          ></label>

          <input
            id={`5-${adId.split("-")[0]}`}
            className={`star-rating__input ${
              isHaveStar ? "pointer-events-none " : ""
            }`}
            type="radio"
            name={`rating-${adId.split("-")[0]}`}
            value="5"
            checked={star === 5}
            disabled={isHaveStar}
            onChange={() => setStar(5)}
            onClick={() => addStar(5)}
          />
          <label
            className="star-rating__label"
            htmlFor={`5-${adId.split("-")[0]}`}
            aria-label="Five"
          ></label>
          <div className="star-rating__focus"></div>
        </div>
      </div>
  );
};

export default StarComponent;
