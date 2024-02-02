import React from "react";
import styled from "styled-components";
import Logo from '../../images/logo.svg'
import { useMediaQuery } from "react-responsive";

const ScorePanel = props => {
    const for800Width = useMediaQuery({query: '(max-width: 820px)'})
    const for540Width = useMediaQuery({query: '(max-width: 540px)'})

    return(
        <>
            {!for800Width &&
                <Div>
                    <img src={Logo} alt=''></img>

                    <DivScore>
                        <p style={{
                            color: '#45569a', 
                            fontSize: '19px',
                            fontWeight: 'bold'
                        }}>SCORE</p>

                        <h1 style={{color: '#575369', fontSize: '35px'}}>{props.score}</h1>
                    </DivScore>
                </Div>
            }

            {(for800Width && !for540Width) &&
                <Div style={{
                    width: '400px',
                    padding: '17px 20px 17px 20px'
                }}>
                    <img style={{width: '130px'}} src={Logo} alt=''></img>

                    <DivScore style={{padding: '10px 25px 10px 25px'}}>
                        <p style={{
                            color: '#45569a', 
                            fontSize: '16px',
                            fontWeight: 'bold'
                        }}>SCORE</p>

                        <h1 style={{color: '#575369', fontSize: '30px'}}>{props.score}</h1>
                    </DivScore>
                </Div>
            }
            
            {(for800Width && for540Width) &&
                <Div style={{
                    width: '260px',
                    padding: '15px 15px 15px 15px',
                    alignItems: 'center'
                }}>
                    <img style={{width: '100px', height: '70px'}} src={Logo} alt=''></img>

                    <DivScore style={{padding: '10px 15px 10px 15px'}}>
                        <p style={{
                            color: '#45569a', 
                            fontSize: '17px',
                            fontWeight: 'bold',
                        }}>SCORE</p>

                        <h1 style={{color: '#575369', fontSize: '30px'}}>{props.score}</h1>
                    </DivScore>
                </Div>
            }
        </>
    )
}

const Div = styled.div`
    display: flex;
    justify-content: space-between;
    width: 600px;
    margin: 80px auto 0px auto;
    border: solid 3px rgba(204,	204, 204, 0.4);
    border-radius: 8px;
    padding: 20px 25px 20px 25px;
`

const DivScore = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    justify-content: center;
    padding: 0px 35px 0px 35px;
    border-radius: 5px;
`

export default ScorePanel