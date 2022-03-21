import React from 'react';
import { FiShoppingBag, FiSettings } from 'react-icons/fi';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { GiSchoolBag } from 'react-icons/gi';
import { IoWalletOutline } from 'react-icons/io5';
import { RiTruckLine } from 'react-icons/ri';
import { BiHelpCircle } from 'react-icons/bi';
import { MdLogout } from 'react-icons/md';
import rocket from '../assets/rocket.png';
import Links from './Links';

const Sidebar = () => {

    const links1 = [
        {
            text: "Overview",
            icon: FiShoppingBag,
            active: true
        },
        {
            text: "Orders",
            icon: HiOutlineShoppingCart
        },
        {
            text: "Customers",
            icon: GiSchoolBag
        },
        {
            text: "Transactions",
            icon: IoWalletOutline
        },
        {
            text: "Shipment",
            icon: RiTruckLine
        }
    ]

    const links2 = [
        {
            text: "Help Center",
            icon: BiHelpCircle
        },
        {
            text: "Settings",
            icon: FiSettings
        },
        {
            text: "Logout",
            icon: MdLogout
        }
    ]

    return (
        <>
            <aside className="sidebar">
                <div className="brand">ShopStop</div>
                <div className="links">
                    <Links
                        links={links1}
                    ></Links>
                    <Links
                        links={links2}
                    ></Links>
                </div>
                <div className="pro">
                    <div className="image">
                        <img src={rocket} alt="" />
                    </div>
                    <h3>ShopStop Pro</h3>
                    <h5>Get access to all features</h5>
                    <button>Get Pro</button>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;