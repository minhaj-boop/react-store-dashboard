import React from 'react';
import {BiChevronRight} from 'react-icons/bi';
import {RiGroupLine} from 'react-icons/ri';
import Title from './Title';

const StoreVisits = () => {
    
    const data = [
        {
            title: "Men", 
            value: "30%" 
        },
        {
            title: "Women",
            value: "70%"
        },
        {
            title: "Visits/day",
            value: "60%"
        }
    ]
    
    return (
        <>
            <section className="storeVisits">
                <Title title="Store Visits" subTitle="Details of your store visits"/>
                <div className="analytics">
                    <div className="icon">
                        <RiGroupLine/>
                    </div>
                    <div className="content">
                        <div className="title">
                            <h4>Pro Analytics</h4>
                            <span>$112/mo</span>
                        </div>
                        <BiChevronRight/>
                    </div>
                </div>
                <div className="progress_bars">
                    {
                        data.map(x => {
                            return (
                                <div className="progress_bar">
                                    <div className="title">
                                        <h5>{x.title}</h5>
                                        <h5>{x.value}</h5>
                                    </div>
                                    <progress value={x.value} max="100"/>
                                </div>
                            )
                        })
                    }
                </div>               
            </section>   
        </>
    );
};

export default StoreVisits;