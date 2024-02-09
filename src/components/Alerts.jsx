import React, { useEffect } from "react";
import { styled } from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
function Alerts() {
  const alerts_Array = [
    {
      alertText:
        "X company released a short report on $XYZ, High IV option sales opps",
    },
    {
      alertText:
        "$XYZ just announced an acquisition of $ABC at $X. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y  if the deal fails.",
    },
    {
      alertText:
        "$XYZ just announced an acquisition of $ABC at $X. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y  if the deal fails.",
    },
    {
      alertText:
        "$XYZ just announced an acquisition of $ABC at $X. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y  if the deal fails.",
    },
    {
      alertText:
        "$XYZ just announced an acquisition of $ABC at $X. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y  if the deal fails.",
    },
    {
      alertText:
        "$XYZ just announced an acquisition of $ABC at $X. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y  if the deal fails.",
    },
  ];
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <AlertsStyle data-aos="fade-left" data-aos-duration="1000">
      <div className="alert__cont">
        <div className="head__alert">
          <ul>
            <li>
              <img
                style={{
                  width: "41.8px",
                  height: "33.66px",
                }}
                src="https://s3-alpha-sig.figma.com/img/ce1d/dd18/812f41f8619361afbe357f7d8b1fe661?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fmfnXC-e487x9xEnegw7OYD5QusJ5XDZbysog4ICNWoUk53i54wepmDbCSeb0IN0TZaS1y1R5shmCV2nh2rH~~X7OhRVzwhc1WpiaciqR49qBQQnfsFCiuCB7UiPkKtnprwhqnO5Foy3qYOMXqPZsCkrYquRRj3Q49nG6e3rpRqKHtjy2ODL6iXV42U3vnZk0cdf57AtJz~CBIs0MDbfl6Pp0Br0V7N94fflQeNORWeofXVwPgEMwDDyZvafnh0BmK6oZT2LBU0XFBMydm6bbdtbDjmaFeMRlDhS3r~OGhKVTbfQpbgW~zu4oaHF1J7GMt63SB9g2kbZ0RyI1wWIPA__"
                alt="ticker"
              />
              <p>$TSLA</p>
            </li>
            <li style={{ justifyContent: "center" }}>
              <img
                style={{
                  width: "41.8px",
                  height: "33.66px",
                }}
                src="https://s3-alpha-sig.figma.com/img/888e/a0ba/dbba7f59b75a594d21a6c97bb0f2063c?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=igzpJSMMlMDLnxo9rSk35UytuMWQ2A5C7Nv5Lx0mc-a2tWCrg9tx6KR82LZb8skZbb0YETcMVuevl2RgbnaMURTl8mxRICXeDfGtoO5jaLkhwQwurW3rt3q9uCzuABNrc6zRfFKRJcez-mogiGvfilBGxaE48ZLQ9ZsrBXjYnKVjrYnWTwTDBx9IqpCgrJOWVOUy3T0-ld4uCbwhhmWlWVcv9hMCOu8FomdIcSD6TpfbZ-pC0KqAZq3aqfGLYV1or-5iPvjzntzvICk3qn-unkQx1ay40aNmo0w1rhELw3nfwCcJT1Y~hgTYTFIHM~6Ojd3scao1N7Xc5eOKVy-dWA__"
                alt="contract"
              />
              <p>200 Contracts</p>
            </li>
            <li style={{ justifyContent: "center" }}>
              <img
                style={{}}
                src="https://s3-alpha-sig.figma.com/img/b757/22d6/7f36f5fbfc5505b5604820e58ea96867?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MB3AN1uxViwLxSK7r-ZG6YHf0EyPeiWcpXX2~zJt6PeapCFUMdo~nB4KOKHzyzh8BW~VxBXM-wt3QmuIjTc81IhUOt3vOj~fsEuD6UCf8BC8Q7UleEN5H~HnPJVidzB3NS29QUKNluutjqdgH8kn3ax~jqYNBRdhP-kqEMkZg98EdLJj5tLoZUDqcbWfy57u5L5TZJ8iU5~BoluIhxoWQ5IdIkTB7IL8ef88XTOR3pLvKZd6NrCFoCKddbmymLTuHWtKUglxY8MoG566ALX6Kz0TILtq4DOujedygE9TD64OPeUu4BQO-5sRu3gjBkMqUqu38BeODBIRDMiehitOJw__"
                alt="ticker"
              />
              <p>12.2%</p>
            </li>
            <li>
              <img
                style={{
                  width: "41.8px",
                  height: "33.66px",
                }}
                src="https://s3-alpha-sig.figma.com/img/7251/fdab/384bfe865c299a7c5f4cd755d1296a61?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p9jHFSjozwaMgwsfKjZm~M6FBu3O425rLe4Du3UcfrFTpc4ieY~79vk69dBn3iXx1CyYmTVRsY9Jx~UEDGRYx9MXi2LUlnfFOEpDj4Fh21PzvPokzCsqomGnOSjZOB7oewEx7O5f7NF4KyHFJ8gSBRP9jS7lnZBwcFPo513cHpR6Zh0R~3LMNQ-pgVeT9eYgu0bArbPzhkmemArBBmQASRt3EBJ6SBKEHldyGjNqjrfosAqFsmaho7XC0or7sUR4iNmr1cMZGUUqVsksO9rWLzxw87v~TeA5p-k5jPL3nGQJcJBLbMyhe8NrG80N5e3RXsnX01n7Ti4O3uG-VYeCkg__"
                alt="risl"
              />
              <p>High risk</p>
            </li>
          </ul>
        </div>
        <p>
          Someone Just bought xxxx contracts of $XYZ, this is notable because
          the relative volume on this options trade is X.X%.
        </p>
      </div>
      <div className="paragraphs__alets">
        {alerts_Array.map((item, index) => (
          <div key={index} className="cont_para">
            <p>{item.alertText}</p>
          </div>
        ))}
      </div>
    </AlertsStyle>
  );
}

export default Alerts;

const AlertsStyle = styled.div`
  height: 722px;
  background-color: #212121;
  border-radius: 15px;
  font-family: "Nunito", sans-serif;
  padding: 20px 15px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  .alert__cont {
    display: flex;
    flex-direction: column;
    border-radius: 12px;
    border: 0.6px solid #d6d6d6;
    height: 172.15px;
    justify-content: space-evenly;
    align-items: center;
    padding: 0 20px;

    /* box-shadow: 0px 4px 4px 0px #00000040; */
    background: linear-gradient(
      287.84deg,
      rgba(102, 126, 234, 0.231) 44.52%,
      rgba(144, 75, 162, 0) 71.09%
    );
    background-color: #212121;
  }
  .alert__cont .head__alert {
    height: 38.37px;
    width: 100%;
  }
  .alert__cont p {
    margin: 0;
    font-size: 26px;
    color: #fff;
    font-weight: 600;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    overflow: hidden;
    line-height: 32px;
  }
  .alert__cont .head__alert ul {
    display: grid;
    grid-template-columns: 1fr 1.65fr 1.65fr 1fr;
    margin: 0;
    padding: 0;
    position: relative;
    width: 100%;
  }
  .alert__cont .head__alert ul li {
    position: relative;
    display: flex;
    align-items: center;
    border-right: 1.47px solid #d6d6d6;
  }
  .alert__cont .head__alert ul li:nth-child(4n) {
    justify-content: end;
    border: none;
  }
  .alert__cont .head__alert ul li p {
    font-size: 20px;
    margin-inline-start: 8px;
  }
  .alert__cont .head__alert ul li img {
    width: 41.8px;
    height: 33.66px;
  }
  .paragraphs__alets {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .cont_para {
    height: 76.31px;
    margin: 6px 0 0 0;
    border: 1px solid #ddd;
    border-radius: 12px;
    display: flex;
    align-items: center;
  }
  .paragraphs__alets p {
    height: auto;
    font-size: 24px;
    font-weight: 400;
    line-height: 32px;
    padding: 3px 25px;
    margin: 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #fff;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    overflow: hidden;
  }
  @media (max-width: 1024px) {
    height: auto;
    .alert__cont {
      height: auto;
      padding: 1rem;
    }
    .alert__cont .head__alert {
      height: auto;
      padding: 1rem 0;
    }
    .alert__cont .head__alert ul {
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
      height: auto;
    }
    .alert__cont .head__alert ul li {
      border-right: none;
      border-bottom: 1.47px solid #d6d6d6;
      justify-content: center;
    }
    .alert__cont .head__alert ul li:nth-child(4n) {
      justify-content: center;
      border-bottom: 1px solid #d6d6d6;
    }
  }
  @media (max-width: 690px) {
    .alert__cont .head__alert ul {
      grid-template-columns: repeat(1, 1fr);
    }
    .alert__cont .head__alert ul li {
      padding-bottom: 10px;
    }
  }
`;
/* ticker 1 */
/* Bg */
/* Rectangle 33 */
