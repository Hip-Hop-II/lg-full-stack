import React from 'react'
import Link from 'next/link'

export default (props) => (
  <li className="wrapper">
    <div className="body">
      <Link>
        <a className="logo">
          <img src="https://www.lgstatic.com/thumbnail_160x160/image1/M00/3F/9F/CgYXBlXBB6qAW4tmAAAHpU_SYgI502.png?cc=0.23255507252179086" alt=""/>
          <h3>{props.companyShortName}</h3>
        </a>
      </Link>
      <div className="body-industry">
        <span>{props.industryField}</span>
        <span>/</span>
        <span>{props.financeStage}</span>
      </div>
      <p>{props.companyFeatures}</p>
    </div>
    <div className="footer">
      <Link>
        <a>
          <h4>{props.interviewRemarkNum}</h4>
          <span>面试评价</span>
        </a>
      </Link>
      <Link>
        <a>
          <h4>{props.positionNum}</h4>
          <span>在招职位</span>
        </a>
      </Link>
      <Link>
        <a>
          <h4>{props.processRate}%</h4>
          <span>简历处理率</span>
        </a>
      </Link>
    </div>
    <style jsx>{`
      .wrapper {
        flex: 0 1 288px;
        border: 1px solid #eee;
        padding: 20px 14px 0;
        margin-top: 20px;
      }
      .body {
        text-align: center;
      }
      .logo>h3 {
        margin-top: 10px;
        color: #333;
      }
      .logo>img {
        width: 80px;
        height: 80px;
      }
      .body-industry {
        line-height: 30px;
      }
      .body-industry>span {
        color: #999;
      }
      .body>p {
        color: #555;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        word-wrap: normal;
        max-width: 180px;
        margin: 0 auto;
      }
      .footer {
        margin: 16px 0;
        padding-top: 16px;
        border-top: 1px dashed #E0E0E0;
        display: flex;
      }
      .footer>a {
        flex: 1;
        display: flex;
        flex-direction: column;
        text-align: center;
        line-height: 20px;
      }
      .footer>a>h4 {
        color: #00b38a;
        font-size: 12px;
      }
      .footer>a>span {
        color: #999;
        font-size: 12px;
      }
    `}</style>
  </li>
)
