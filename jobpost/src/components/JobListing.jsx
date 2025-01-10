import React from "react";
import "../css/Joblist.css";

const JobListing = ({ title, url, by, time }) => {
  const formattedTime = new Date(time * 1000).toLocaleString();
  return (
    <div className="job_listing">
      <h3 className="job_listing_title">
        <a className={url ? "" : "inactive-link"} href={url} target="_blank">
          {title}
        </a>
      </h3>
      <span className="job_listing_user_detail">
        <strong>{by}</strong>
        <p>{formattedTime}</p>
      </span>
    </div>
  );
};

export default JobListing;
