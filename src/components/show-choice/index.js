import React, { useState, useEffect } from "react";
import Paper from '../../images/icon-paper.svg'
import Scissor from '../../images/icon-scissors.svg'
import Rock from '../../images/icon-rock.svg'
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

const ShowChoice = props => {
    const for1200Width = useMediaQuery({query: '(max-width: 1200px)'})
    const for1020Width = useMediaQuery({query: '(max-width: 1020px)'})
    const for820Width = useMediaQuery({query: '(max-width: 820px)'})
    const for620Width = useMediaQuery({query: '(max-width: 620px)'})

    const [showHouseChoice, setShowHouseChoice] = useState(false)
    const [showResult, setShowResult] = useState(false)
    const [houseChoice, setHouseChoice] = useState('')
    
    useEffect(() => {
        if(props.showChoice){
            let arr = ['paper', 'rock', 'scissor']
            let index = Math.floor(Math.random() * 3)
            setHouseChoice(arr[index])

            setTimeout(() => {
                setShowHouseChoice(true)
            }, 2500)
        
            setTimeout(() => {
                setShowResult(true)
            }, 4500)
        }
    }, [props.showChoice]) 

    useEffect(() => {
        if(showResult){
            if(result() === 'YOU WIN') props.setScore(props.score + 1)

            else if(result() === 'YOU LOSE') props.setScore(props.score - 1)
        }
    }, [showResult])

    const styleMyChoice = () => {
        let bColor
        let image

        if(props.choice === 'paper'){
            bColor = '#5470f5'
            image = Paper
        } 

        else if(props.choice === 'scissor'){
            bColor = '#eca41c'
            image = Scissor
        }

        else{
            bColor = '#dd3a56'
            image = Rock
        } 

        return(
            {
                content: `url(${image})`,
                borderColor: bColor
            }
        )
    }

    const styleHouseChoice = () => {
        let bColor
        let image

        if(houseChoice === 'paper'){
            bColor = '#5470f5'
            image = Paper
        } 

        else if(houseChoice === 'scissor'){
            bColor = '#eca41c'
            image = Scissor
        }

        else{
            bColor = '#dd3a56'
            image = Rock
        } 

        return(
            {
                content: `url(${image})`,
                borderColor: bColor
            }
        )
    }

    const result = () => {
        let result

        if((props.choice === 'paper' && houseChoice === 'scissor') ||
           (props.choice === 'scissor' && houseChoice === 'rock') ||
           (props.choice === 'rock' && houseChoice === 'paper')){
            result = 'YOU LOSE'
        }
        else if((props.choice === 'paper' && houseChoice === 'rock') ||
                (props.choice === 'scissor' && houseChoice === 'paper') ||
                (props.choice === 'rock' && houseChoice === 'scissor')){
            result = 'YOU WIN'
        }
        else{
            result = 'DRAW'
        }

        return result
    }

    const handleClick = () => {
        setShowHouseChoice(false)
        setShowResult(false)
        props.setShowChoice(false)
    }
   
    return(
        <>
            {props.showChoice &&
                <>
                    {!for1200Width &&
                        <Div>
                            <div style={{marginRight: '40px', textAlign: 'center'}}>
                                <h2 style={{color: 'white'}}>YOU PICKED</h2>
        
                                <ChoiceImg style={styleMyChoice()} alt=''></ChoiceImg>
                            </div>
        
                            {showResult &&
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    margin: '0px 30px 0px 30px'
                                }}>
                                    <h1 style={{
                                        color: 'white',
                                        fontSize: '45px', 
                                        textAlign: 'center'
                                    }}
                                        >{result()}</h1>
        
                                    <PlayAgainBtn onClick={() => handleClick()}>PLAY AGAIN</PlayAgainBtn>
                                </div>
                            }
        
                            {!showHouseChoice &&
                                <div style={{textAlign: 'center', marginLeft: '40px'}}>
                                    <h2 style={{color: 'white'}}>THE HOUSE PICKED</h2>
        
                                    <DarkCircle></DarkCircle>
                                </div>
                            }
                            
        
                            {showHouseChoice &&
                                <div style={{textAlign: 'center', marginLeft: '40px'}}>
                                    <h2 style={{color: 'white'}}>THE HOUSE PICKED</h2>
        
                                    <ChoiceImg style={styleHouseChoice()} alt=''></ChoiceImg>
                                </div>
                            }
                        </Div>
                    }

                    {(for1200Width && !for1020Width) &&
                        <Div style={{marginTop: '135px'}}>
                            <div style={{marginRight: '40px', textAlign: 'center'}}>
                                <h2 style={{color: 'white'}}>YOU PICKED</h2>
        
                                <ChoiceImgFor1200Width style={styleMyChoice()} alt=''></ChoiceImgFor1200Width>
                            </div>
        
                            {showResult &&
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    margin: '0px 30px 0px 30px'
                                }}>
                                    <h1 style={{
                                        color: 'white',
                                        fontSize: '45px', 
                                        textAlign: 'center'
                                    }}
                                        >{result()}</h1>
        
                                    <PlayAgainBtn onClick={() => handleClick()}>PLAY AGAIN</PlayAgainBtn>
                                </div>
                            }
        
                            {!showHouseChoice &&
                                <div style={{textAlign: 'center', marginLeft: '40px'}}>
                                    <h2 style={{color: 'white'}}>THE HOUSE PICKED</h2>
        
                                    <DarkCircle style={{
                                        height: '240px',
                                        width: '240px',
                                        padding: '50px',
                                        border: 'solid 35px rgba(0, 0, 0, 0)'
                                    }}></DarkCircle>
                                </div>
                            }
                            
        
                            {showHouseChoice &&
                                <div style={{textAlign: 'center', marginLeft: '40px'}}>
                                    <h2 style={{color: 'white'}}>THE HOUSE PICKED</h2>
        
                                    <ChoiceImgFor1200Width style={styleHouseChoice()} alt=''></ChoiceImgFor1200Width>
                                </div>
                            }
                        </Div>
                    }

                    {(for1200Width && for1020Width && !for820Width) &&
                        <Div style={{marginTop: '160px', marginBottom: '40px'}}>
                            <div style={{marginRight: '40px', textAlign: 'center'}}>
                                <h2 style={{color: 'white', fontSize: '19px'}}>YOU PICKED</h2>
        
                                <ChoiceImgFor1020Width style={styleMyChoice()} alt=''></ChoiceImgFor1020Width>
                            </div>
        
                            {showResult &&
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    margin: '0px 10px 0px 10px'
                                }}>
                                    <h1 style={{
                                        color: 'white',
                                        fontSize: '30px', 
                                        textAlign: 'center'
                                    }}
                                        >{result()}</h1>
        
                                    <PlayAgainBtn style={{padding: '10px 40px 10px 40px'}} onClick={() => handleClick()}>PLAY AGAIN</PlayAgainBtn>
                                </div>
                            }
        
                            {!showHouseChoice &&
                                <div style={{textAlign: 'center', marginLeft: '40px'}}>
                                    <h2 style={{color: 'white', fontSize: '19px'}}>THE HOUSE PICKED</h2>
        
                                    <DarkCircle style={{
                                        height: '180px',
                                        width: '180px',
                                        padding: '40px',
                                        border: 'solid 25px rgba(0, 0, 0, 0)'
                                    }}></DarkCircle>
                                </div>
                            }
                            
        
                            {showHouseChoice &&
                                <div style={{textAlign: 'center', marginLeft: '40px'}}>
                                    <h2 style={{color: 'white', fontSize: '19px'}}>THE HOUSE PICKED</h2>
        
                                    <ChoiceImgFor1020Width style={styleHouseChoice()} alt=''></ChoiceImgFor1020Width>
                                </div>
                            }
                        </Div>
                    }

                    {(for1200Width && for1020Width && for820Width && !for620Width) &&
                        <Div style={{
                            marginTop: '80px',
                            marginBottom: '0px',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}>
                            <div style={{display: 'flex', marginBottom: '60px'}}>
                                <div style={{marginRight: '40px', textAlign: 'center'}}>
                                    <ChoiceImgFor1020Width style={styleMyChoice()} alt=''></ChoiceImgFor1020Width>

                                    <h2 style={{
                                        color: 'white', 
                                        fontSize: '19px', 
                                        marginTop: '30px'
                                    }}>YOU PICKED</h2>
                                </div>
            
                                {!showHouseChoice &&
                                    <div style={{textAlign: 'center', marginLeft: '40px'}}>
                                        <DarkCircle style={{
                                            height: '180px',
                                            width: '180px',
                                            padding: '40px',
                                            border: 'solid 25px rgba(0, 0, 0, 0)'
                                        }}></DarkCircle>

                                        <h2 style={{
                                            color: 'white', 
                                            fontSize: '19px',
                                            marginTop: '34px'
                                        }}>THE HOUSE PICKED</h2>
                                    </div>
                                }
                                
            
                                {showHouseChoice &&
                                    <div style={{textAlign: 'center', marginLeft: '40px'}}>
                                        <ChoiceImgFor1020Width style={styleHouseChoice()} alt=''></ChoiceImgFor1020Width>

                                        <h2 style={{
                                            color: 'white', 
                                            fontSize: '19px', 
                                            marginTop: '30px'
                                        }}>THE HOUSE PICKED</h2>
                                    </div>
                                }
                            </div>

                            {showResult &&
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    margin: '0px 0px 0px 0px'
                                }}>
                                    <h1 style={{
                                        color: 'white',
                                        fontSize: '45px', 
                                        textAlign: 'center'
                                    }}
                                        >{result()}</h1>

                                    <PlayAgainBtn style={{padding: '10px 60px 10px 60px'}} onClick={() => handleClick()}>PLAY AGAIN</PlayAgainBtn>
                                </div>
                            }
                        </Div>
                    }

                    {(for1200Width && for1020Width && for820Width && for620Width) &&
                        <Div style={{
                            marginTop: '80px',
                            marginBottom: '0px',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}>
                            <div style={{display: 'flex', marginBottom: '60px'}}>
                                <div style={{marginRight: '15px', textAlign: 'center'}}>
                                    <ChoiceImgFor620Width style={styleMyChoice()} alt=''></ChoiceImgFor620Width>

                                    <h2 style={{
                                        color: 'white', 
                                        fontSize: '15px', 
                                        marginTop: '30px'
                                    }}>YOU PICKED</h2>
                                </div>
            
                                {!showHouseChoice &&
                                    <div style={{textAlign: 'center', marginLeft: '15px'}}>
                                        <DarkCircle style={{
                                            height: '140px',
                                            width: '140px',
                                            padding: '30px',
                                            border: 'solid 20px rgba(0, 0, 0, 0)'
                                        }}></DarkCircle>

                                        <h2 style={{
                                            color: 'white', 
                                            fontSize: '15px',
                                            marginTop: '34px'
                                        }}>THE HOUSE PICKED</h2>
                                    </div>
                                }
                                
            
                                {showHouseChoice &&
                                    <div style={{textAlign: 'center', marginLeft: '15px'}}>
                                        <ChoiceImgFor620Width style={styleHouseChoice()} alt=''></ChoiceImgFor620Width>

                                        <h2 style={{
                                            color: 'white', 
                                            fontSize: '15px', 
                                            marginTop: '30px'
                                        }}>THE HOUSE PICKED</h2>
                                    </div>
                                }
                            </div>

                            {showResult &&
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    margin: '0px 0px 0px 0px'
                                }}>
                                    <h1 style={{
                                        color: 'white',
                                        fontSize: '45px', 
                                        textAlign: 'center'
                                    }}
                                        >{result()}</h1>

                                    <PlayAgainBtn style={{padding: '10px 60px 10px 60px'}} onClick={() => handleClick()}>PLAY AGAIN</PlayAgainBtn>
                                </div>
                            }
                        </Div>
                    }
                </>
            }
        </>
    )
}

const Div = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 100px;
`

const ChoiceImg = styled.img`
    margin-top: 30px;
    height: 300px;
    width: 300px;
    background-color: white;
    border-radius: 50%;
    padding: 70px;
    border: solid 40px;
`

const ChoiceImgFor1200Width = styled.img`
    margin-top: 30px;
    height: 240px;
    width: 240px;
    background-color: white;
    border-radius: 50%;
    padding: 50px;
    border: solid 35px;
`

const ChoiceImgFor1020Width = styled.img`
    margin-top: 30px;
    height: 180px;
    width: 180px;
    background-color: white;
    border-radius: 50%;
    padding: 40px;
    border: solid 25px;
`

const ChoiceImgFor620Width = styled.img`
    margin-top: 30px;
    height: 140px;
    width: 140px;
    background-color: white;
    border-radius: 50%;
    padding: 30px;
    border: solid 20px;
`

const DarkCircle = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    margin-top: 30px;
    height: 300px;
    width: 300px;
    border-radius: 50%;
    padding: 70px;
    border: solid 40px rgba(0, 0, 0, 0);
`

const PlayAgainBtn = styled.p`
    text-align: center;
    color: #181e40;
    padding: 10px 60px 10px 60px;
    background-color: white;
    font-weight: 500;
    border-radius: 10px;
    cursor: pointer;
    margin-top: 15px;
    font-size: 18px;
`

export default ShowChoice