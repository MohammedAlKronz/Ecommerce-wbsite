import React from "react";
import rate from "../../images/rate.png";
import RateItem from "./RateItem";
import Pagination from "../Uitlity/Pagination";
import RatePost from "./RatePost";
import ViewAllReviewHook from "../../customHook/review/ViewAllReviewHook";
import { useParams } from "react-router-dom";

const RateContainer = ({ rateAvg, rateQty }) => {
  const { id } = useParams();
  const [allReview, onPress] = ViewAllReviewHook(id);
  return (
    <div className="containerXl pb-3 pt-1 px-3 bg-white shadow rounded-lg">
      <div className="flex items-center gap-[6px]">
        <div className="font-bold text-xl">التقييمات</div>
        <img src={rate} className="w-4 h-4" />
        <span className="text-[#ffc107] text-sm font-semibold">{rateAvg}</span>
        <span className="gray text-xs">({`${rateQty} تقييم`})</span>
      </div>
      <RatePost />
      {allReview.data ? (
        allReview.data.map((review, index) => {
          return <RateItem key={index} review={review} />;
        })
      ) : (
        <h1>لا يوجد تقييمات الآن</h1>
      )}
      {allReview.paginationResult && allReview.paginationResult.numberOfPages >= 2 ? (
        <Pagination
          pageCount={
            allReview.paginationResult
              ? allReview.paginationResult.numberOfPages
              : 0
          }
          onPress={onPress}
        />
      ) : null}
    </div>
  );
};

export default RateContainer;
