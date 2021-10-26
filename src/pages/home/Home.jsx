import React from 'react'
import Chart from '../../components/chart/Chart'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import "./Home.css"
import {userData} from "../../dummyData"
import Widgetsm from '../../components/widgetsm/Widgetsm'
import Widgetlg from '../../components/widgetlg/Widgetlg'

function Home() {
    return (
        <div className="home">
            <FeaturedInfo />
            <Chart data={userData} title="User Analytics" grid dataKEy="Active User"/>
            <div className="homeWidgets">
                <Widgetsm />
                <Widgetlg />
            </div>
        </div>
    )
}

export default Home
