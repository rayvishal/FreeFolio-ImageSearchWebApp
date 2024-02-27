import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import Topics from "./Topics";
const Header = (props) => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    props.setheaderSearchValue(inputValue);
    navigate("/");
  }
  // console.log("mango");
  return (
    <React.Fragment>
      <nav
        className="navbar navbar-expand-sm navbar-light bg-light"
        style={{ position: "fixed", top: "0", width: "100%" }}
      >
        <div className="container-fluid">
          <div className="navbar-brand">
            <Link to="/">
              <img
                style={{ height: "60px" }}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEX///8AAACWlpZhYWGzs7PBwcGenp7s7Oz8/Pz5+fmKiore3t68vLyrq6uxsbHR0dFaWloSX54vAAABIUlEQVR4nO3cUW7CUAxFwRBoGwIE9r/absGJcZ+pZr6frnw+AYlpAgAAAAAAAAAAAAAIud2/ou630cce8jjFPUYfe8hlR+Fl9LGHKFTYn0KF/SlU2J9Chf0pVNifQoX9KVTYn0KF/SlU2J/Czy/cdhRuo4895Dl/R83P0cceshS97WOJn73jKQAAAH0s18ir647Ph+8ezPr/hdMa+XZpHTmYNUcOmkcOZilUWD+YpVBh/WCWQoX1g1kKFdYPZilUWD+YpVBh/WCWQoX1g1kKFdYPZilUWD+YpVBh/WBW6KD1Jy70+2G7wrdTqFChQoUKFSpUqFChQoUKFSpUqFChQoUKFSpUqFBhx8Ltdf57r8/8QzAAAAAAAAAAAAAAAIBufgE70iW0yq+HRAAAAABJRU5ErkJggg=="
                alt="img"
              ></img>
            </Link>
          </div>
          <form onSubmit={handleSubmit} className="form-inline my-2 my-lg-0">
            <input
              style={{ width: "600px", height: "42px", borderRadius: "50px" }}
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search high-resolution images"
              aria-label="Search"
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
            />

            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/advertise" className="nav-link">
                  Advertise
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/plus" className="nav-link">
                  FreeFolio+
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/stats" className="nav-link">
                  Stats
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <img
                  className="nav-item active"
                  style={{ height: "50px", marginLeft: "10px" }}
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAmVBMVEX///8kHiAAAAD8/PwhHyAiHB4kHyEjHyAjICEhGx0fHR4EAAD+/f4hHR8fGBoaGBny8vIaEhUTCAwbExafn58YFhcMAACXl5f49/jn5+cOAAXCwsLc3Nx0cnPNzc3j4uO0tLQ1NDTT09NJR0h+fH2RkJBoaGinp6e7ubqDgYJDQUJ5dndRT1CIh4hZVFVkYmNAOzwuLC0xKi1ODAO0AAAQPUlEQVR4nO1dB3eruBLGAwiMKIYYG+Pea1zu//9xTw3bSYiNKHb2Hb49Z0vuRmjQaPoMilKjRo0aNWrUqFGjRo0aNWrUqFGjRo0aNWrUqFHj/wMqwYM/fd1GqgInz45ag/5kvdzuh6vVarj/7K43/XEruvtf/sPo9bvDeQMAcCfwA9//8H0/CGJMfnA5Ltqj1rs3mBPsXKJZ+xQABKHbaOiNn9A/AvLHxmo9ePd2ZcGu3nh90gB/pFH2Fc2PDpirSc9+97alMO7OcefD0rSn9NGjbBi6j4Nju/fubT8Hl5ut9QEClxweMozv1DhpZ4rY310Mx0nEGPzvCh+6s9kQIERZzu4nXIj3s79MINlb/wC+qWnfKdRdn4tP3Ik75J/QiYMP9+d5aloIh/6fJJAr9skZ3IaOEu7UTLPRbPoxOdT5cLmejGaDMcVg1J+0P1dTKmf9puloSBfs7CCEfNhN+IJ/ilJG34XQ9+VELHJcu/169JsI6Y3awwuh30VfDj2Ey4RK1j9FoaL0z9A0Gs3bVokS2H32mUJX2V/XCyb+UxDQ2yzOEN+/G0uzYNd/FyE/wTY6Pt3Oz9RM9NHBx/U48xKD9qHzhUgidE7jvyJzyC7UJfi3zSErgN1aVrmN22cI9TvbJ4Sl+jcYVVVGKEYNdHv73nbA/yDrBlV+WLOFf3eQmoYvowr3nXFrZGet7ZVBkaa5MF3nN6Zb7Sm+LobIy9pGtv3eg1SV2RRb1xtowXRTzL5UJ1NoJqyKmvF5oLxZbbTB00yxoSah75nP+xjsFyf/Os0rr3rQfqPaIBx6git/OjFal7MVdW3im9EOp+h9JA6mgdiGY3qwbZX2tlsLCK/HiKdv8x/74CW7cGA3K8agd2AG/A5fxZcX9t9xija5gkIiGMRebpf+gO7tGJuwLn35DNhCsgEdzwcVvOTBLmgmxwjL18ubIdxE6GcFxodqK9EWmuKWa7At+wFPHh+dkmtihEF1RvIGPIsLVQRD+5V68UogagS7XoUG8vgcagmjDl/JpyecsCheRYpdodURnWIWyDFMDe+resh32MqwwxmUKInKr4e6B9MUjLp9lQW3EFJUbxApXvETVao2OIUOk6ivwBKERaXDpHoflTxgzUUqsQxfoRdtIt+uWmJS/fMY1mCJY4R+9XpxcGPRycuE2xocfvOtcFzpQ8navYuwRdELCaQkUo+YqP7wXGmyityJAwvIGMh4sanYBeGGBqsqH6Mq3Q4LyKAGfL7YTtwnVmK1r3YkLqHTeamBQd+tfQoQCxwjqMLMZw8hLv1FhGTCeVTJMx6hRQw4FtBzd1FlFA4Drgmb3utTfaoyBo2nN/BnVY/og0PvAkIwUl6esaWJEWZqGA0LZtXwaeRyb02D7lvCX6qyCITDdqnGltqKsFN4fE/KnVjdO7fhUAMVdytwuYkxQ2+BYzj4Xfl2VZkBVVbIrGAPVNe75Ao08lq/KXGOPKfQFeqqCr2/Ya+voYWHvHegN5u0Pxf7xWd3Mst9BGeR1oDSkzbq1GUUOlhW37LTi/qLXQg4DgJaEYUh3C36uQLII+ywHLo7L1vYrLlb34ilnVCyj9E+5PUnV+huAOF+lCMHug8sh3k2m5KFjcfdF/efvD3Rn4PfbHwH0qwQdhu5pcizW57F9L47LZfCNYutGYa8yzQ73GL/X2AYNEE4n8nyarvjcO9N8u08gqpE0yaigtTbSe4n+oSPVPoEHA8WkZx6jS6cIchNLA0qsZdYgl0DyRTJffo0/SA1Szq1NBEaA8qLRKvK3GVBS3cn8UvMkPR+lrZ9vY0OMmTjPfbUc+iqH8fybuIseWsSrE8o7MLjA0ygU0NXYrcTzJ0MacX1O4a8lsQ92zIrLuGa/34CE7L7Q8Q6jS4eVc26vygtI8sCCA6Si/92AaGsNYoOLGWWbvO0mx6X44erRFVQ51rzzOwJdSqcTCcjfRRSd7Hlc+sBy/zSo80ePEqhGcgEn2Zg/ajBfASNeLXZsRDX5ihPThrGQHUhkQfZpbodTT8MmSNsIHcqEQilXpRO728ZThQRidzz/ZBQFcoCS5cJx3uJO3Bx6fomLqd8YM4dlo6EXziTu4TsEIlDlJ3Cdkx/x/EOuSj6hh5m11rP7FaTfR78x4o+FaHEdscxC52iuAw2XbPXJWFB0KCcPH30VkmYYXNunJaSPDlxudWRUIbzdG/iCTRPwpZu80KCj1NxCiPNoqpCg+xprVmuI6QOUfbQxJhT2ETF498z0IjQMD0JSTp86DA9gL/KfBPss2BTGTWajjY3aILslmMr1HN2lOhhdp245ZcnLqovVGXFV5JwK/LJGQac/Ski2e4XDCsSngm5CQhZ3+419p4HxFvIipZ4j24+ym7o8YXcc9ZfIPZGM7XbMAuaZvadichpYcNNsFyQvR6plZ9JiTTNfhH3LJ0opURTkJhHjTi7yTYqQGH2UPbVp8PdfKQJ2Il7L/HkCX5CxSN0Jpn3NmLZRCcc5qLshoM0ty/zCxqilLKH1HvA/fKCQcWIazY9zP4rBUQpoTC7MFUCamxpllbMqBFiQyaMuPefkPGIQhmem9N4lGkR4VSERlHj5UsUl+S22WQpTEREsaR+oiwkQmGFzjCQoHAZMLVbUF0IwRhLuE7bV93DNX+QhPhNXYX50lJhu1fJUmKZIvH2i0Bsl6jDzA7+pIDGlyoSuN2gIhAsJ3Obi9g0pkx6XjjaMoydAi6vUEciAdYClNfwlrOjBzzx7hczaoR32MnctExg/kxpZ0UTSTxnLCgs5iGeqHJDDYmgHfEP/ZwuPtmtTEvFWAQBiwWjTtQsNRqxzBluWGQnF6Ry870rhUWQh0tboZU3TuPLFHEnZ1iMSxmFRgPLUKgM8802QUjuSpVzD4XtJ5dPzqkvNC272qUYcHuroCzl+tDAMlFJ1Z67D0n5jULJWpZEHxZrvbrZNNmhElnj5MjM0A6OHKwi4xWkoM0plIhjMswtTZ5E2RKgxCtoF6Jwkse6VcnrteQplC2ovPkWxfxDJDghO+jz9rI5YIQC2RaO5AYVa2XP4eMztKauXFjY9C6y0YjExy9WN9TiPfcycRqKpCI7O1iHgdxOdyIMWKzVK2ry2hyJWBsFq2l7UtJ2B8PhjWJyFLIeaMdBxcqG7DmPK+GeNCcs4X5q1ENoZo7+1x6TZqZM9j8VsjHvK2zlM7NpQ+vaVNmjGLG6QKnoXCrk8xYCtq10IQufGoaRq4N5jQ3axV4wb5En93SHCWQw3wwvXweHiFoWrqOVzh/ewVZm/+KnOiO4SEtRVr1aUv5QVQI2YczIuVBr8eAYkWYiF/YtJUfjhdrjekwPcu3rbiHlxGIS+RORozn8pvwdzYP5KFd70LUqqaCHT5/NRY0Z5ovZ0SkPm2lavwX16GE6Se2IyoKyajFYoSiRiEaui6iI8+mvQvBdHRlIc0xW06c3fcCrIr1LiUVTvJ4msjTehVNoHFVrsz/H0MEhAe17Cs7DTavIXETh4De1EnqCT6Ej2CH/WpQStTdad7fD1XDbXY+YiVRkcNaaJ57KqGuj4wzYWof8a/36i/l3dwhZq2Upw1V6QqVJRRSrRo8VYpgaUWIlNCSIYoUSpFZ54KUmlnUopedamKbNnNKUQ+VbUa//WWRjtE2JVtcbQVGjlK8mDDezkGD+2QVcQuiheMkX34pyZD6illPpi1Xo1xHay+1iv9gu2+v+oIBnribqvrQGPT7LoGH48nUdfEh7v3s6+2yIN2sDDuIYwD2fuuLDCNKn2TJE+WxZY04i4Eo/l0qcdY8YcPhjPLnu+jHgY5caErKr8o7Whg6tsnrXFiFvvb3I+uGD5T8IXEdL+4QAMeIsyw3g0pW1ltQpz95JRwB/x0w465lLMpixom7oFwTYL6bFa+jPWN95jI+bKPskNmLKsyM05VqlnuDIN+pesv9KtJ6Cl63DsuHBtJ25X4b5vlTdewWsrO+LJs4YytxDp7YN7GpWpu9b0LyaBdo6q46cYNHWVV4zNx0q4tHNoua/Zy2I3Jre/IulyhUItzY7l34mLalORS/3ubx+fBbfZQyHnjeLkT2OT5CnHMNig+afQngCZbVXil0rypRT2NSeaGoaFejkq07UMg3rjUTjZvOfVFPyc4gisgYbsfnIG+odIH/BUBOOPeWRSiLmTEA/hkEEackD8ewkavBMRPedMEf694YP7XHIa8aVvead7XKHm9hJTpks/cgG6UKe7O8NiA9h/30bO49xiFn+iEhVWYl5t7ibPuiLNsoPC3DoFbC3f2XUtrgsYUk9zl/Qu471+41Po2Ms1b/9K4m/zpkfYI9zCAzKHvZFl+tixMyscJf+iqM5Nkuh0MSHtCeQizcP6R1AjfjzoTzKTaVQtbSi88cbVAmBQSEZc4/gkDLSxVY+uZgxi3Yg/ApRooNSBiAQAg9hIRnzFamnuBFzWp3yx2BxItTkHRK19cP4sE9YK5FCk44r+3aMY1YRaCAjLlYV/AjRTlgr3rl1x6j037aQt+LyF+DPrxSqLf5wU/Nkpi9IQk16mLXgdH8V1dss4/LwNURhKycxNFGrai4kB9FHbC6dGX9JCs/AKUWK3uMbJQucXMJuhSO2ycKrZPATdG8/bU1zNeA/BpsFIkiJiLHEbIlmIyiYMHxCIRGZ5zB5xTcuSia3lglD168tQmxouXAppq0qh6STte1xoLPSSlMTWRFb6YNZnhS9ASGWeKbPWIPG8siGHlc1RPhGJKWHn5jO60HtqED7wWNYbKoRPUHR4e+UOMHsVwpV9kLZO2aMSrRkpyIC2ZwD9sDEnid+R+XTYSmLLIF9wxFZFhU3gydD5wrAtPCAeWT8BBEQHVkxjwosQEu+jbJQTmHZmvAO/lHZJ1WOBlRny3yFevuMDtLwwbJKtmbugbx5kEzZwEUr2KRIXAFyHJpmNpsmqkKQChh0fTYZFnVWtFbudSCnWNn1S4MDrztBCiLgFlDh9fsBHbYvPUCmpD4Jo5Zti6aCfteCStFXTxFXiRVuvYZRkfOe764pSh9XYHCnwA3e8u08apAOpkGe9h8JGKaBgun49R8qSNA6VSxvqN20ev23NO7RzlLoXIBCmqyRLnIvEzYdhqxplQnV4DwoO3ovj9YCvNyNvw9huPD5Xg7lIB6jiau4jXrnIj3OvCpEn1BgoEkaTNMMC3dSlAhVGbBvq5fHq1oIq3d9KCQNtDqhP8VuafLGzVvDXy0mF3qORWM2RDC7cC7xqwClYnIurh018U2IP3eACk9fbOY4tbciK/QAjn373Z9Tf4zZHndcZMraAA792KgLeCHK+P4whcQEmBwAW5IkmpaH4TiJ/jhtSlL1NW4fOvgjO7vSDppDuycaM95NQ0b01icDxz4ry3PSPpKgN8iPEaUuBm01+UvaLzOiWXsVAuDQ01KDAY4VYgD/tJ79V47tC1SR5ev128ODCUmVN0MQxB3yE3QYdvvs7NQiDUJ/AqxSf73cDocrguF22Z70B62/4DfUyA5V1H6r4t8LNa7VqFGjRo0aNWrUqFGjRo0aNWrUqFGjRo0aNWr8J/E/J+/4C3LatrkAAAAASUVORK5CYII="
                  alt="img"
                ></img>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};
export default Header;
