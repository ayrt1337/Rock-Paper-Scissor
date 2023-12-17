import React, { useEffect } from "react";
import Triangule from '../../image/bg-triangle.svg'
import Paper from '../../image/icon-paper.svg'
import Scissor from '../../image/icon-scissors.svg'
import Rock from '../../image/icon-rock.svg'
import styled from "styled-components";
import ScreenPlayAgain from "../screen-play-again";
import { useMediaQuery } from "react-responsive";

const Choice = props => {
    const for1080Width = useMediaQuery({query: '(max-width: 1080px)'})
    const for800Width = useMediaQuery({query: '(max-width: 800px)'})
    const for650Width = useMediaQuery({query: '(max-width: 650px)'})
    const for600Width = useMediaQuery({query: '(max-width: 600px)'})
    const for450Width = useMediaQuery({query: '(max-width: 450px)'})

    const ShowHousePick = () => {
        setTimeout(() => {
            props.setShowHousePick(true)
        }, 3000)
    }

    const ShowScreenPlayAgain = () => {
        setTimeout(() => {
            props.setShowScreen(true)
        }, 5000)
    }

    useEffect(() => {
        if((props.choice == 'paper' && props.houseChoice == 'scissor') ||
           (props.choice == 'scissor' && props.houseChoice == 'rock') ||
           (props.choice == 'rock' && props.houseChoice == 'paper')){
            props.setScreen('LOSE')
        }
        else if((props.choice == 'paper' && props.houseChoice == 'rock') ||
                (props.choice == 'scissor' && props.houseChoice == 'paper') ||
                (props.choice == 'rock' && props.houseChoice == 'scissor')){
            props.setScreen('WIN')
        }
        else{
            props.setScreen('DRAW')
        }
    })

    useEffect(() => {
        if(props.showScreen){
            if(props.screen == 'LOSE'){
                props.setScore(props.score - 1)
            }
            else if(props.screen == 'WIN'){
                props.setScore(props.score + 1)
            }
        }
    }, [props.showScreen])

    const RandomHousePick = () => {  
        let arr = ['paper', 'rock', 'scissor']
        let index = Math.floor(Math.random() * 3)
        props.setHouseChoice(arr[index])
    }

    return(
        <>
        {(!props.showChoice && for600Width && !for450Width) &&
            <Div>
                <Img600Width src={Triangule}></Img600Width>

                <ImgPaper600Width src={Paper} onClick={() => {props.setChoice('paper')
                                                      props.setShowChoice(true)
                                                      ShowHousePick()
                                                      RandomHousePick()
                                                      ShowScreenPlayAgain()}}>
                </ImgPaper600Width>

                <ImgScissors600Width src={Scissor} onClick={() => {props.setChoice('scissor')
                                                           props.setShowChoice(true)
                                                           ShowHousePick()
                                                           RandomHousePick()
                                                           ShowScreenPlayAgain()}}>
                </ImgScissors600Width>

                <ImgRock600Width src={Rock} onClick={() => {props.setChoice('rock')
                                                    props.setShowChoice(true)
                                                    ShowHousePick()
                                                    RandomHousePick()
                                                    ShowScreenPlayAgain()}}>
                </ImgRock600Width>
            </Div>
        }

        {(!props.showChoice && for450Width) &&
            <Div>
                <Img600Width src={Triangule}></Img600Width>

                <ImgPaper450Width src={Paper} onClick={() => {props.setChoice('paper')
                                                    props.setShowChoice(true)
                                                    ShowHousePick()
                                                    RandomHousePick()
                                                    ShowScreenPlayAgain()}}>
                </ImgPaper450Width>

                <ImgScissors450Width src={Scissor} onClick={() => {props.setChoice('scissor')
                                                        props.setShowChoice(true)
                                                        ShowHousePick()
                                                        RandomHousePick()
                                                        ShowScreenPlayAgain()}}>
                </ImgScissors450Width>

                <ImgRock450Width src={Rock} onClick={() => {props.setChoice('rock')
                                                    props.setShowChoice(true)
                                                    ShowHousePick()
                                                    RandomHousePick()
                                                    ShowScreenPlayAgain()}}>
                </ImgRock450Width>
            </Div> 
        }

        {(!props.showChoice && !for600Width && !for450Width) && 
            <Div>
                <Img src={Triangule}></Img>
                <ImgPaper src={Paper} onClick={() => {props.setChoice('paper')
                                                      props.setShowChoice(true)
                                                      ShowHousePick()
                                                      RandomHousePick()
                                                      ShowScreenPlayAgain()}}>
                </ImgPaper>

                <ImgScissors src={Scissor} onClick={() => {props.setChoice('scissor')
                                                           props.setShowChoice(true)
                                                           ShowHousePick()
                                                           RandomHousePick()
                                                           ShowScreenPlayAgain()}}>
                </ImgScissors>

                <ImgRock src={Rock} onClick={() => {props.setChoice('rock')
                                                    props.setShowChoice(true)
                                                    ShowHousePick()
                                                    RandomHousePick()
                                                    ShowScreenPlayAgain()}}>
                </ImgRock>
            </Div>
        }

        {(props.showChoice && !for650Width && !for800Width && for1080Width) &&
            <DivPick>   
                <YourPick>
                    <H2Pick>YOU PICKED</H2Pick>
                    {props.choice == 'paper' && <ImgPaperPick1080Width src={Paper}></ImgPaperPick1080Width>}
                    {props.choice == 'rock' && <ImgRockPick1080Width src={Rock}></ImgRockPick1080Width>}
                    {props.choice == 'scissor' && <ImgScissorPick1080Width src={Scissor}></ImgScissorPick1080Width>}
                </YourPick>

                {props.showScreen &&
                    <ScreenPlayAgain 
                        setScreen={props.setScreen}
                        screen={props.screen}
                        setShowChoice={props.setShowChoice}
                        setHouseChoice={props.setHouseChoice}
                        setShowHousePick={props.setShowHousePick}
                        setShowScreen={props.setShowScreen}
                    />
                }

                <HousePick>
                    <H2Pick>THE HOUSE PICKED</H2Pick>
                    {props.showHousePick ?
                        <>
                            {props.houseChoice == 'paper' && <ImgPaperPick1080Width src={Paper}></ImgPaperPick1080Width>}
                            {props.houseChoice == 'rock' && <ImgRockPick1080Width src={Rock}></ImgRockPick1080Width>}
                            {props.houseChoice == 'scissor' && <ImgScissorPick1080Width src={Scissor}></ImgScissorPick1080Width>}
                        </> 
                        : <DarkCircle1080Width></DarkCircle1080Width>
                    }
                </HousePick>
            </DivPick>
        }

        {(props.showChoice && for1080Width && for800Width && !for650Width) &&
            <DivPick800Width>
                <Picks800Width>
                    <YourPick>
                        <H2Pick>YOU PICKED</H2Pick>
                        {props.choice == 'paper' && <ImgPaperPick1080Width src={Paper}></ImgPaperPick1080Width>}
                        {props.choice == 'rock' && <ImgRockPick1080Width src={Rock}></ImgRockPick1080Width>}
                        {props.choice == 'scissor' && <ImgScissorPick1080Width src={Scissor}></ImgScissorPick1080Width>}
                    </YourPick>

                    <HousePick>
                        <H2Pick>THE HOUSE PICKED</H2Pick>
                        {props.showHousePick ?
                            <>
                                {props.houseChoice == 'paper' && <ImgPaperPick1080Width src={Paper}></ImgPaperPick1080Width>}
                                {props.houseChoice == 'rock' && <ImgRockPick1080Width src={Rock}></ImgRockPick1080Width>}
                                {props.houseChoice == 'scissor' && <ImgScissorPick1080Width src={Scissor}></ImgScissorPick1080Width>}
                            </> 
                            : <DarkCircle1080Width></DarkCircle1080Width>
                        }
                    </HousePick>
                </Picks800Width>

                {props.showScreen &&
                    <ScreenPlayAgain 
                        setScreen={props.setScreen}
                        screen={props.screen}
                        setShowChoice={props.setShowChoice}
                        setHouseChoice={props.setHouseChoice}
                        setShowHousePick={props.setShowHousePick}
                        setShowScreen={props.setShowScreen}
                    />
                }
            </DivPick800Width>
        } 

        {(props.showChoice && for1080Width && for800Width && for650Width) &&
            <DivPick800Width>
                <Picks800Width>
                    <YourPick650Width>
                        <H2Pick650Width>YOU PICKED</H2Pick650Width>
                        {props.choice == 'paper' && <ImgPaperPick650Width src={Paper}></ImgPaperPick650Width>}
                        {props.choice == 'rock' && <ImgRockPick650Width src={Rock}></ImgRockPick650Width>}
                        {props.choice == 'scissor' && <ImgScissorPick650Width src={Scissor}></ImgScissorPick650Width>}
                    </YourPick650Width>

                    <HousePick650Width>
                        <H2Pick650Width>THE HOUSE PICKED</H2Pick650Width>
                        {props.showHousePick ?
                            <>
                                {props.houseChoice == 'paper' && <ImgPaperPick650Width src={Paper}></ImgPaperPick650Width>}
                                {props.houseChoice == 'rock' && <ImgRockPick650Width src={Rock}></ImgRockPick650Width>}
                                {props.houseChoice == 'scissor' && <ImgScissorPick650Width src={Scissor}></ImgScissorPick650Width>}
                            </> 
                            : <DarkCircle650Width></DarkCircle650Width>
                        }
                    </HousePick650Width>
                </Picks800Width>

                {props.showScreen &&
                    <ScreenPlayAgain 
                        setScreen={props.setScreen}
                        screen={props.screen}
                        setShowChoice={props.setShowChoice}
                        setHouseChoice={props.setHouseChoice}
                        setShowHousePick={props.setShowHousePick}
                        setShowScreen={props.setShowScreen}
                    />
                }
            </DivPick800Width>
        }   

        {(props.showChoice && !for1080Width && !for800Width && !for650Width) &&
            <DivPick>
                <YourPick>
                    <H2Pick>YOU PICKED</H2Pick>
                    {props.choice == 'paper' && <ImgPaperPick src={Paper}></ImgPaperPick>}
                    {props.choice == 'rock' && <ImgRockPick src={Rock}></ImgRockPick>}
                    {props.choice == 'scissor' && <ImgScissorPick src={Scissor}></ImgScissorPick>}
                </YourPick>

                {props.showScreen &&
                    <ScreenPlayAgain 
                        setScreen={props.setScreen}
                        screen={props.screen}
                        setShowChoice={props.setShowChoice}
                        setHouseChoice={props.setHouseChoice}
                        setShowHousePick={props.setShowHousePick}
                        setShowScreen={props.setShowScreen}
                    />
                }

                <HousePick>
                    <H2Pick>THE HOUSE PICKED</H2Pick>
                    {props.showHousePick ?
                        <>
                            {props.houseChoice == 'paper' && <ImgPaperPick src={Paper}></ImgPaperPick>}
                            {props.houseChoice == 'rock' && <ImgRockPick src={Rock}></ImgRockPick>}
                            {props.houseChoice == 'scissor' && <ImgScissorPick src={Scissor}></ImgScissorPick>}
                        </> 
                        : <DarkCircle></DarkCircle>
                    }
                </HousePick>
            </DivPick>
        }

        </>
    )
}

const Div = styled.div`
    position: relative;
`

const Img = styled.img`
    margin-top: 150px;
    width: 385px;
    height: 350px;
`

const ImgPaper = styled.img`
    cursor: pointer;
    width: 45px;
    height: 45px;
    background-color: white;
    border: solid 20px #4169E1;
    border-radius: 50%;
    padding: 30px;
    position: absolute;
    left: -14%;
    top: 20%;
`

const ImgScissors = styled.img`
    cursor: pointer;
    width: 45px;
    height: 45px;
    background-color: white;
    border: solid 20px #FFBF00;
    border-radius: 50%;
    padding: 30px;
    position: absolute;
    top: 20%;
    right: -14%;
`

const ImgRock = styled.img`
    cursor: pointer;
    width: 45px;
    height: 45px;
    background-color: white;
    border: solid 20px #D22B2B;
    border-radius: 50%;
    padding: 30px;
    position: absolute;
    top: 80%;
    left: 32%;
`

const DivPick = styled.div`
    display: flex;
    margin-top: 130px;
`

const H2Pick = styled.h2`
    color: white;
`

const HousePick = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 50px;
`

const YourPick = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 50px;
`

const ImgPaperPick = styled.img`
    margin-top: 60px;
    width: 60px;
    height: 60px;
    background-color: white;
    border: solid 40px #4169E1;
    border-radius: 50%;
    padding: 60px;
    margin-left: 18px;
    margin-right: 18px;
`

const ImgScissorPick = styled.img`
    margin-top: 60px;
    width: 60px;
    height: 60px;
    background-color: white;
    border: solid 40px #FFBF00;
    border-radius: 50%;
    padding: 60px;
    margin-left: 18px;
    margin-right: 18px;
`

const ImgRockPick = styled.img`
    margin-top: 60px;
    width: 60px;
    height: 60px;
    background-color: white;
    border: solid 40px #D22B2B;
    border-radius: 50%;
    padding: 60px;
    margin-left: 18px;
    margin-right: 18px;
`

const DarkCircle = styled.div`
    margin-top: 60px;
    width: 60px;
    height: 60px;
    background-color: rgba(0, 0, 0, 0.7);
    border: solid 40px rgba(0, 0, 0, 0);
    border-radius: 50%;
    padding: 60px;
`

const Img600Width = styled.img`
    margin-top: 150px;
    width: 285px;
    height: 250px;
`

const ImgPaper600Width = styled.img`
    cursor: pointer;
    width: 35px;
    height: 35px;
    background-color: white;
    border: solid 15px #4169E1;
    border-radius: 50%;
    padding: 30px;
    position: absolute;
    left: -14%;
    top: 25%;
`

const ImgScissors600Width = styled.img`
    cursor: pointer;
    width: 35px;
    height: 35px;
    background-color: white;
    border: solid 15px #FFBF00;
    border-radius: 50%;
    padding: 30px;
    position: absolute;
    top: 25%;
    right: -12%;
`

const ImgRock600Width = styled.img`
    cursor: pointer;
    width: 35px;
    height: 35px;
    background-color: white;
    border: solid 15px #D22B2B;
    border-radius: 50%;
    padding: 30px;
    position: absolute;
    top: 80%;
    left: 27%;
`

const ImgPaper450Width = styled.img`
    cursor: pointer;
    width: 30px;
    height: 30px;
    background-color: white;
    border: solid 13px #4169E1;
    border-radius: 50%;
    padding: 25px;
    position: absolute;
    left: -3%;
    top: 30%;
`

const ImgScissors450Width = styled.img`
    cursor: pointer;
    width: 30px;
    height: 30px;
    background-color: white;
    border: solid 13px #FFBF00;
    border-radius: 50%;
    padding: 25px;
    position: absolute;
    top: 30%;
    right: -3%;
`

const ImgRock450Width = styled.img`
    cursor: pointer;
    width: 30px;
    height: 30px;
    background-color: white;
    border: solid 13px #D22B2B;
    border-radius: 50%;
    padding: 25px;
    position: absolute;
    top: 80%;
    left: 32.5%;
`

const ImgPaperPick1080Width = styled.img`
    margin-top: 60px;
    width: 40px;
    height: 40px;
    background-color: white;
    border: solid 25px #4169E1;
    border-radius: 50%;
    padding: 50px;
    margin-left: 18px;
    margin-right: 18px;
`

const ImgScissorPick1080Width = styled.img`
    margin-top: 60px;
    width: 40px;
    height: 40px;
    background-color: white;
    border: solid 25px #FFBF00;
    border-radius: 50%;
    padding: 50px;
    margin-left: 18px;
    margin-right: 18px;
`

const ImgRockPick1080Width = styled.img`
    margin-top: 60px;
    width: 40px;
    height: 40px;
    background-color: white;
    border: solid 25px #D22B2B;
    border-radius: 50%;
    padding: 50px;
    margin-left: 18px;
    margin-right: 18px;
`

const DarkCircle1080Width = styled.div`
    margin-top: 60px;
    width: 40px;
    height: 40px;
    background-color: rgba(0, 0, 0, 0.7);
    border: solid 25px rgba(0, 0, 0, 0);
    border-radius: 50%;
    padding: 50px;
`

const DivPick800Width = styled.div`
    display: flex;
    margin-top: 100px;
    flex-direction: column;
`

const Picks800Width = styled.div`
    display: flex;
    margin-bottom: 70px;
`

const ImgPaperPick650Width = styled.img`
    margin-top: 60px;
    width: 35px;
    height: 35px;
    background-color: white;
    border: solid 20px #4169E1;
    border-radius: 50%;
    padding: 32px;
`

const ImgRockPick650Width = styled.img`
    margin-top: 60px;
    width: 35px;
    height: 35px;
    background-color: white;
    border: solid 20px #D22B2B;
    border-radius: 50%;
    padding: 32px;
`

const ImgScissorPick650Width = styled.img`
    margin-top: 60px;
    width: 35px;
    height: 35px;
    background-color: white;
    border: solid 20px #FFBF00;
    border-radius: 50%;
    padding: 32px;
`

const YourPick650Width = styled.div`
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 0px;
`

const HousePick650Width = styled.div`
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 0px;
`

const H2Pick650Width = styled.h2`
    color: white;
    font-size: 17px
`

const DarkCircle650Width = styled.div`
    margin-top: 60px;
    width: 35px;
    height: 35px;
    background-color: rgba(0, 0, 0, 0.7);
    border: solid 20px rgba(0, 0, 0, 0);
    border-radius: 50%;
    padding: 32px;
`

export { Choice }