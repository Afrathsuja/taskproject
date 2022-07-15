import React, { useEffect, useState } from "react";
import ProductsApi from "../../api/ProductsApi";


import { Link } from 'react-router-dom';
import styles from './LandingPage.module.css';
const LandingPage: React.FC<LandingPageProps> = (props) => {
    const [postsData, setPostsData] = useState<any>([]);
    useEffect(() => {

        getPostsDataHandler();

    }, []);

    const getPostsDataHandler = async () => {
        try {
            const items = await ProductsApi.list();
            setPostsData(items);
            console.log(items);

        } catch (err) {
            console.log(err);
        }
    }
    return (
        <>
            <div className=" pt-20">
                <div className="container ">
                    <div className="">
                        <div className="row">

                            {(postsData.slice(0, 6)).map((post: any, index: number) => (

                                <div className="col-lg-4 col-sm-6 col-md-6 custom-grid col-12">
                                    <a>
                                        <div className="wpo-case-item">
                                            <div className="wpo-case-img">
                                                <Link to={`/singleProduct/${post.id}`} onClick={() => { window.location.href = `singleProduct/${post.id}` }}>     <img src={post.product_image} alt={post.name} /></Link>

                                            </div>
                                            <div className="wpo-case-content">
                                                <div className="wpo-case-text-top">
                                                    <span className={styles.category}>{post.category?.name}</span><br />

                                                    <Link to={`/singleProduct/${post.id}`} onClick={() => { window.location.href = `singleProduct/${post.id}` }}>   <a>   <h4 className={styles.title}>{post.name}</h4></a></Link>

                                                    <span>Date : {new Date(post.created_at).toLocaleDateString()}</span><br />
                                                    <span className={styles.price}>${post.price}</span><br />

                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>

            <section>
                <div className={`px-2 ${styles.bgcolor}`}>
                    <div className={`wpo-case-area-2 pt-4 pb-2 ${styles.bgcolor}`}>
                        <div className={`container ${styles.bgcontainer}`}>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12 px-0">
                                    <img src="/images/bg.png" alt="image" />
                                </div>
                                <div className={`col-lg-6 col-md-6 col-sm-12 px-5 ${styles.details}`}>
                                    <div className={`wpo-about-text pb-4 ${styles.wpo_about} `}>
                                        <h2>FINDING THE ITEM <br />
                                            YOU NEED NEAR YOU <br />
                                            WILL NEVER BE EASIER.</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className=" pt-20">
                <div className="container ">
                    <div className={`wpo-about-text  pt-20 pb-4 ${styles.recomend} `}>
                        <h2>RECOMENDED FOR YOU</h2>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </div>
                    <div className="">
                        <div className="row">

                            {(postsData.slice(0, 3)).map((post: any, index: number) => (

                                <div className="col-lg-4 col-sm-6 col-md-6 custom-grid col-12">
                                    <a>
                                        <div className="wpo-case-item">
                                            <div className="wpo-case-img">
                                                <Link to={`/singleProduct/${post.id}`} onClick={() => { window.location.href = `singleProduct/${post.id}` }}>     <img src={post.product_image} alt={post.name} /></Link>

                                            </div>
                                            <div className="wpo-case-content">
                                                <div className="wpo-case-text-top">
                                                    <span className={styles.category}>{post.category?.name}</span><br />

                                                    <Link to={`/singleProduct/${post.id}`} onClick={() => { window.location.href = `singleProduct/${post.id}` }}>   <a>   <h4 className={styles.title}>{post.name}</h4></a></Link>

                                                    <span>Date : {new Date(post.created_at).toLocaleDateString()}</span><br />
                                                    <span className={styles.price}>${post.price}</span><br />

                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>


            <footer className="wpo-site-footer mt-3">
                <div className={styles.footer}  >
                    <div className="container p-3">
                        <div className="row">
                            <div className="col col-lg-3 col-md-6 col-sm-12 col-12 mb-3">
                                <div className="widget about-widget">
                                    <div className="logo widget-title">
                                        <img src='/images/bg.png' className={styles.footer_logo} alt="Logo" />
                                    </div>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam expedita rem debitis quis, iste quos voluptatibus distinctio</p>

                                </div>
                            </div>
                            <div className="col col-lg-4 col-md-6 col-sm-12 col-12 mb-3">
                                <div className="widget market-widget wpo-service-link-widget">
                                    <div className="widget-title">
                                        <h3 className={styles.footer_head}>Lorem ipsumt</h3>
                                    </div>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam expedita rem debitis quis, iste quos voluptatibus distinctio</p>
                                </div>
                            </div>
                            <div className="col col-lg-1 col-md-6 col-sm-12 col-12 mb-3">
                                <div className="widget link-widget">
                                    <div className="widget-title">
                                        <h3 className={styles.footer_head}>Sitemap</h3>
                                    </div>
                                    <ul className={styles.footer_list}>
                                        <li><Link to={`/`} onClick={() => { window.location.href = `/` }}> <a>Home</a></Link></li>
                                        <li><a>About us</a></li>
                                        <li><a>help</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col col-lg-3 offset-lg-1 col-md-6 col-sm-12 col-12 mb-3">
                                <div className="widget market-widget wpo-service-link-widget">
                                    <div className="widget-title">
                                        <h3 className={styles.footer_head}>Contact Us </h3>
                                    </div>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam expedita rem debitis quis, iste quos voluptatibus distinctio</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>
        </>
    );
};

interface LandingPageProps {
    posts: any;
    [key: string]: any;
}

export default LandingPage;
