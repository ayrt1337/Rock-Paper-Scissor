import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

const ScreenPlayAgain = props => {
    const for1080Width = useMediaQuery({query: '(max-width: 1080px)'})
    
    return(
        <>
        {for1080Width &&
            <Div1080Width>
                {props.screen == 'DRAW' ? <H1>DRAW</H1> : <H1>YOU {props.screen}</H1>}
                <Button1080Width onClick={() => {props.setShowChoice(false)
                                        props.setHouseChoice(null)
                                        props.setShowHousePick(false)
                                        props.setShowScreen(false)
                }}>PLAY AGAIN</Button1080Width>
            </Div1080Width>
        }

        {!for1080Width &&
            <Div>
                {props.screen == 'DRAW' ? <H1>DRAW</H1> : <H1>YOU {props.screen}</H1>}
                <Button onClick={() => {props.setShowChoice(false)
                                        props.setHouseChoice(null)
                                        props.setShowHousePick(false)
                                        props.setShowScreen(false)
                }}>PLAY AGAIN</Button>
            </Div>
        }
        </>
    )
}

const Div = styled.div`
    margin-left: 40px;
    margin-right: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const H1 = styled.h1`
    color: white;
`

const Button = styled.p`
    font-weight: 500;
    color: #0047AB;
    cursor: pointer;
    background-color: white;
    border-radius: 10px;
    margin-top: 20px;
    padding: 10px 50px;
    font-size: 20px;
`

const Div1080Width = styled.div`
    margin-left: 0px;
    margin-right: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Button1080Width = styled.button`
    color: #0047AB;
    cursor: pointer;
    background-color: white;
    border-radius: 10px;
    margin-top: 20px;
    padding: 10px 35px;
    font-size: 18px;
    border: 1px solid white;
    font-weight: 500;
`

export default ScreenPlayAgain