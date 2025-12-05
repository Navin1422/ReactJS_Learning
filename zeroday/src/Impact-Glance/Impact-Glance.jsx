import React from "react";
import { ImpactGlanceStyled } from "./Impact-Glance.js";

const ImpactGlanceComponent = () => {
    return (
        <ImpactGlanceStyled>
            <div className="Main">
                <p>Impact at a 
                     <span className="red"> Glance</span>
                </p>

                <div className="Top">
                    <div className="School">
                        <div className="School__para">
                            <p>Colleges</p>
                            <p>100+</p>
                        </div>
                        <img loading="lazy" src="https://aptitudeguruhem.com/static/media/school.534dd7db3daaf4c66eff.png" alt="Schools"/>
                    </div>

                    <div className="Students">
                        <div className="Students_para">
                            <p>Students</p>
                            <p>1,00,000</p>
                        </div>
                        <img src="https://aptitudeguruhem.com/static/media/bag.52185bac9246c85ed48f.png" alt="Bag"/>
                    </div>
                </div>

                <div className="Bottom">
                    <div className="Study_Materials">
                        <div className="Study_para">
                            <p>Study Materials</p>
                            <p>1000+</p>
                        </div>
                        <img src="https://aptitudeguruhem.com/static/media/books.d290f0589bd8ed867b77.png" alt="Books"/>
                    </div>

                    <div className="Professional_Trainers">
                        <div className="Professional_para">
                            <p>Professional Trainers</p>
                            <p>150</p>
                        </div>
                        <img src="https://aptitudeguruhem.com/static/media/people.0b6f76ebbf0b209884e7.png" alt="People"/>
                    </div>
                </div>
            </div>
        </ImpactGlanceStyled>
    );
}

export default ImpactGlanceComponent;
