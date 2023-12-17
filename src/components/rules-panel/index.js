import React from "react";
import styled from "styled-components";
import ImgRules from '../../image/image-rules.svg'
import CloseBtn from '../../image/icon-close.svg'

const Overlay = props => {
    return (
        <>
            {props.showRules &&
            <>
                <DivOverlay />

                <RulesPanel>
                    <RulesPanelHeader>
                        <h1 style={{color: '#808080'}}>RULES</h1>
                        <BtnClose src={CloseBtn} onClick={() => props.setShowRules(false)}></BtnClose>
                    </RulesPanelHeader> 

                    <img src={ImgRules}></img>
                </RulesPanel>
            </>
        } 
        </>
    )
}

const DivOverlay = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: black;
    opacity: 0.6;
    z-index: 10;
`

const RulesPanel = styled.div`
    display: flex;
    flex-direction: column;
    padding: 40px;
    border-radius: 10px;
    position: absolute;
    z-index: 999;
    background-color: white;
    left: 0; 
    right: 0; 
    margin-left: auto; 
    margin-right: auto;
    width: 300px;
    top: 50%;
    margin-top: -173px;
`

const RulesPanelHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    font-size: 15px;
`

const BtnClose = styled.img`
    cursor: pointer;
    height: 25px;
    width: 25px;
`

export default Overlay