import React from 'react'
import Link from 'next/link'

type Props = {
  positionName?: string;
  formatCreateTime?: string;
  workYear?: string;
  education?: string;
  positionLables: Array<string|any>;
  salary?: string;
  companyShortName?: string;
  industryField?: string;
  financeStage?: string;
  city?: string;
  companyLogo?: string;
}

export default (props: Props) => (
  <li className="content">
    <div className="body">
      <div className="body-left">
        <div className="body-title">
          <h2>
            <Link>
              <a>{props.positionName}</a>
            </Link>
          </h2>
          <span>[{props.formatCreateTime}]</span>
        </div>
        <div className="body-content">
          <span>经验{props.workYear}</span>
          <span style={{margin: '0 6px'}}>/</span>
          <span>{props.education}</span>
        </div>
        <div className="body-labels">
          {props.positionLables.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
      </div>
      <div className="body-right">
        <span>{props.salary}</span>
      </div>
    </div>
    <div className="footer">
      <a className="footer-media">
        <img src={props.companyLogo} alt=""/>
      </a>
      <div className="footer-content">
        <a>{props.companyShortName}</a>
        <div className="footer-caption">
          <span>{props.industryField}</span>
          <span style={{margin: '0 6px'}}>/</span>
          <span>{props.financeStage}</span>
          <span style={{margin: '0 6px'}}>/</span>
          <span>{props.city}</span>
        </div>
      </div>
    </div>
    <style jsx>{`
      .content {
        flex: 0 1 389px;
        border: 1px solid #EAEEED;
        padding: 20px 18px 0;
        margin-top: 16px;
        position: relative;
        bottom: 0;
        transition: all .2s ease;
      }
      .content:hover {
        box-shadow: 0 0 10px 0 rgba(56,81,76,.12);
        bottom: 4px;
      }
      .body {
        display: flex;
        justify-content: space-between;
      }
      .body-title {
        display: flex;
        align-items: center;
      }
      .body-title>h2 {
        max-width: 160px;
      }
      .body-title>h2>a {
        color: #333;
      }
      .body-title>span {
        color: #999;
        margin-left: 6px;
        margin-bottom: 1px;
      }
      .body-content {
        display: flex;
        line-height: 30px;
        color: #777;
      }
      .body-labels {
        display: flex;
        margin-top: 5px;
      }
      .body-labels>div {
        width: 73px;
        height: 26px;
        padding: 0 5px;
        line-height: 26px;
        color: #999;
        font-size: 12px;
        text-align: center;
        border-radius: 3px;
        border: 1px solid #f0f0f0;
      }
      .body-labels>div+div {
        margin-left: 8px;
      }
      .footer {
        margin-top: 18px;
        padding-top: 18px;
        border-top: 1px dashed #E0E0E0;
        display: flex;
        align-items: center;
        margin-bottom: 10px;
      }
      .footer-media {
        display: flex;
        width: 40px;
        height: 40px;
        margin-right: 6px;
      }
      .footer-media>img {
        max-width: 100%;
      }
      .footer-caption {
        margin-top: 4px;
      }
      .footer-caption>span {
        color: #999;
      }
      .body-right>span {
        color: #fa6041;
        font-size: 16px;
      }
    `}
    </style>
  </li>
)