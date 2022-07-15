import React, { useEffect, useState } from "react";
import ProductsApi from "../../api/ProductsApi";
import { FaCalendarAlt ,FaDollarSign} from "react-icons/fa";

import { Link } from 'react-router-dom';
import axios from "axios";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import {
    useParams,
  } from "react-router-dom";
import styles from './SingleProduct.module.css';
const SingleProduct: React.FC<SingleProductProps> = (props) => {
    const [postsData, setPostsData] = useState<any>([]);
    const [data, setData] = useState<any>([]);
    const [images, setImages] = React.useState(null);
    const  id:any  = useParams();
    

    useEffect(() => { 
        setData(id);
        getPostsDataHandler(id.id);

    }, []);

    const getPostsDataHandler = async (asd: any) => {
        try {
          
            const items2 = await ProductsApi.getOne(asd);
            setPostsData(items2);
            let shouldCancel = false;

            const call = async () => {
                setImages(
                    items2.image_gallery.map((url: any) => ({
                        original: `${url}`,
                        thumbnail: `${url}`
                    }))
                );
            };
            call();
            return () => (shouldCancel = true);


        } catch (err) {
            console.log(err);
        }
    }
    return (

        
            <>
                <section className=" pb-0">
                    <div className="container pt-20">
                        <div className="row">
                            <div className="col col-lg-12 col-12">
                                <div className="wpo-wpo-blog-content ">
                                    <div className="post">
                                            <a>   <h4 className={styles.title}>{postsData.name}</h4></a>
                                        <ul className={styles.user_table}>
                                            <li ><a className='pr-4'><FaDollarSign /> {postsData.price}</a></li>
                                            <li><FaCalendarAlt /> {new Date(postsData.created_at).toLocaleDateString()}</li>
                                        </ul>

                                        
                                        {images &&   <ImageGallery items={images}  />}
                                        <span className={styles.category}>{postsData.category?.name}</span><br />

                                            <a>   <h4 className={styles.title}>{postsData.name}</h4></a>
                                        
                                        <p>{postsData.description}</p>

                                    </div>
                                </div>


                            </div>

                        </div>
                    </div>
            </section>
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

interface SingleProductProps {
    posts: any;
    [key: string]: any;
}

export default SingleProduct;
