import React from "react";
import styled from "styled-components";
import CloseBtn from '../../images/icon-close.svg'
import Rules from '../../images/image-rules.svg'
import { useMediaQuery } from "react-responsive";

const RulesPanel = props => {
    const for620Width = useMediaQuery({query: '(max-width: 620px)'})

    const handleClick = () => {
        props.setShowRules(false)

        if(for620Width){
            document.getElementById('root').style.minHeight = '100vh'
            document.getElementById('root').style.overflow = 'visible'
        }
        document.getElementById('root').style.borderColor = 'transparent'
    }

    return(
        <>
            {props.showRules &&
                <>
                    {!for620Width &&
                        <>
                            <DivOverlay />

                            <Panel>
                                <div style={{
                                    display: 'flex', 
                                    justifyContent: 'space-between', 
                                    width: '100%',
                                    alignItems: 'center',
                                    marginBottom: '30px'
                                }}>
                                    <h2 style={{color: '#3a445d', fontSize: '25px'}}>RULES</h2>

                                    <img style={{
                                        height: '25px', 
                                        width: '25px',
                                        cursor: 'pointer'
                                    }} onClick={() => handleClick()} src={CloseBtn} alt=''></img>
                                </div>

                                <img style={{width: '100%'}} src={Rules} alt=''></img>
                            </Panel>
                        </>
                    }

                    {for620Width &&
                        <DivOverlay style={{
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                            <PanelFor620Width>
                                <h2 style={{color: '#3a445d', fontSize: '35px'}}>RULES</h2>

                                <img style={{
                                    width: '300px',
                                    margin: '45px 0px 45px 0px'
                                }} src={Rules} alt=''></img>

                                <img style={{
                                    height: '30px', 
                                    width: '30px',
                                    cursor: 'pointer'
                                }} onClick={() => handleClick()} src={CloseBtn} alt=''></img>
                            </PanelFor620Width>
                        </DivOverlay>
                    }
                </>
            }
        </>
    )
}

const DivOverlay = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 10;
`

const Panel = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
    border-radius: 10px;
    position: absolute;
    z-index: 999;
    background-color: white;
    left: 0px;
    right: 0px;
    margin-left: auto;
    margin-right: auto;
    width: 400px;
    top: 50%;
    margin-top: -200px;
`

const PanelFor620Width = styled.div`
    background-color: white;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export default RulesPanel