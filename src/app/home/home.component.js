import React, {useState} from 'react';
// import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';

// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
// import ErrorBoundary from 'react-error-boundary';
// import { Carousel } from 'react-responsive-carousel';

import ErrorBoundary from 'react-error-boundary';
import loadable from '@loadable/component';

import Loader from '../common/loader.component';

import './home.scss';

// const BreadCrumb = loadable(() => import(/* webpackChunkName: "bradcrumb" */ '../global/header/breadcrumb.component'), {
// 	fallback: (
// 		<ErrorBoundary>
// 			<Loader />
// 		</ErrorBoundary>
// 	)
// });
class Home extends React.Component {
	constructor(props){
		super(props)
		let initialData
		if(props.staticContext){
			initialData = props.staticContext.initialData
		}else {
			console.log('else part chk data')
			console.log(window.__initialData__)
			initialData = window.__initialData__;
			delete window.__initialData__;
		}
		this.state = {news : initialData}
	}
	
	static requestInitialData(){
		return fetch("http://localhost:3000/api/news")
		.then(res => res.json())
	}

	componentDidMount() {
		console.log('in the did mount part')
		if(!this.state.news){
			console.log('in the did mount part in if ')
			Home.requestInitialData()
			.then(news => {this.setState({news})})
		}
	}
// const Home = props => {
	// console.log('Home props: ', props);
	// console.log('asdasdasdasdasda',props.breadcrumb)
	render(){
            const { news } = this.state;
			console.log("asaaaa", news);
			if(news && news.length > 0){
            return (
              <React.Fragment>
                {/* <BreadCrumb display={props.breadcrumb} /> */}
                <main className="home">
                  <section className="hero-banner">
                    <figure>
                      <img
                        src={news[0].heroBanner.imageSource}
                        alt="hero banner image"
                      />
                      <figcaption>
                        <p>minimal designs &#8208;</p>
                        <h1>{news[0].heroBanner.desc}</h1>
                        <p>
                          {news[0].heroBanner.discount}&#37; off on{" "}
                          {news[0].heroBanner.arrivals}&#43; new arrivals
                        </p>
                        <br />
                        <a href="#">shop now </a>
                      </figcaption>
                    </figure>
                  </section>

                  <section className="living-spaces-1">
                    <figure>
                      <img
                        src={news[0].livingSpaces.imageSource}
                        alt="hero image 1"
                      />
                      <figcaption>
                        <p>living spaces</p>
                        <h1>{news[0].livingSpaces.desc}</h1>
                        <p>{news[0].livingSpaces.descS}</p>
                        <a href="#">shop now</a>
                      </figcaption>
                    </figure>
                  </section>

                  <section className="living-spaces-2">
                    <figure className="group-images">
                      {news[0].groupImages.map((s, i) => {
                        return (
                          <img
                            src={s.sourcePath}
                            alt={s.alternativePath}
                            key={i}
                          />
                        );
                      })}
                    </figure>
                  </section>

                  <section className="best-seller">
                    <h1>Best Sellers</h1>
                    {news[0].bestSeller.map((data, i) => {
                      return (
                        <figure key={i}>
                          <img src={data.sourceImage} alt={data.altImage} />
                          <figcaption>
                            <a href="#">{data.t_shirtType}</a>
                            <p>
                              <del>&#36;{data.discountedPrice}</del> &#8208;
                              &#36;
                              {data.finalPrice}
                            </p>
                          </figcaption>
                        </figure>
                      );
                    })}
                  </section>

                  <section className="picture-this">
                    <h1>Picture This</h1>
                    <p>
                      Our Clothing looks a lot better in your home. Click a pic
                      and share to get featured
                    </p>
                    <p>&#35;clothing</p>
                    <button className="btn screen-reader">Stop</button>
                  </section>
                </main>
              </React.Fragment>
			);
				}else{
					return(
						<React.Fragment/>
					)
				}
          }
};

export default Home;
