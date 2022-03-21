import React from 'react';
import Milestones from './Milestones';
import Navbar from './Navbar';
import Revenue from './Revenue';
import StoreVisits from './StoreVisits';
            
const Dashboard = () => {
    return (
        <>
            <section>
                <div className="dashboard">
                    <Navbar />
                    <div className="grid">
                        <div className="one">
                            <Milestones />
                        </div>
                        <div className="two">
                            <Revenue />
                            <StoreVisits />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Dashboard;